import {
	container,
	DI
}                    from '@airport/di'
import {
	Factor_Key,
	ICorePollFactorsFragment,
	IFactorDoc,
	IKeyed,
	IOutcomeDoc,
	IPollDoc,
	IPositionDoc,
	IsDoc,
	ITimestamp,
	IUser,
	IUserCreated,
	IVariationDoc,
	IVariationListingDoc,
	Key,
	Poll_Key,
	Variation_Key
}                    from '@votecube/model'
import * as firebase from 'firebase/app'
import {
	ICollection,
	IVCDocumentReference,
	IVCTransaction
}                    from '../../document/document'
import {
	DB_UTILS,
	POLL_DAO,
	SCHEMA
}                    from '../../tokens'
import {
	IDbUtils,
	IFullTextSearchObject
}                    from '../DbUtils'

// extends IBasePollDao
export interface IPollDao {
	// findByPollIdWithDetails(
	// 	pollId: Poll_Id
	// ): Promise<IPoll>

	addTemp(
		poll: IVariationDoc
	): void

	getAll(): Promise<IPollDoc[]>

	getChildVariationListings(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationListingDoc[]>

	getForTheme(
		themeId: number
	): Promise<IPollDoc[]>

	getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationDoc>

	getVariationListing(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationListingDoc>

	save(
		variation: IVariationDoc,
		user: IUser
	): Promise<IPollDoc>

}

export class PollDao
	// extends BasePollDao
	implements IPollDao {

	tempVariation: IVariationDoc


	async addTemp(
		poll: IVariationDoc
	): Promise<void> {
		this.tempVariation = poll
	}

	async getAll(): Promise<IPollDoc[]> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.reference
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getForTheme(
		themeId: number
	): Promise<IPollDoc[]> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.reference
			.where('theme.id.v', '==', themeId)
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationDoc> {
		const schema = await container(this).get(SCHEMA)
		return await this.getOne(
			schema.pollDrafts.pollVariations(pollKey).doc(variationKey)
		)
	}

	async getVariationListing(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationListingDoc> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.pollVariationListings(pollKey)
			.reference.where('key', '==', variationKey)
			.get()

		const records = result.docs.map(
			doc => doc.data())

		if (!records.length) {
			return null
		}

		return records[0]
	}

	async getChildVariationListings(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationListingDoc[]> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.pollVariationListings(pollKey)
			.reference.where('parent.key', '==', variationKey)
			.orderBy('createdAt.m', 'desc')
			.get()

		return result.docs.map(
			doc => doc.data())
	}

	async save(
		variationIn: IVariationDoc,
		user: IUser,
	): Promise<IPollDoc> {
		const variationOnly = !!variationIn.pollKey

		const variation = await this.setupVariation(variationIn, user)
		const poll      = await this.setupPoll(variation, user)

		try {
			const [dbUtils, schema] = await container(this).get(DB_UTILS, SCHEMA)
			await schema.db.runTransaction(async (transaction) => {
				const {
					      pollRef,
					      variationRef
				      } = variationOnly
					? await this.getRefs(variation)
					: await this.prepPollAndGetRefs(poll)

				poll.key          = pollRef.id
				variation.pollKey = poll.key
				variation.key     = variationRef.id

				const variationListing    = this.setupVariationListing(poll, variation)
				const variationListingRef = schema.pollDrafts.pollVariationListings(pollRef)
					.doc(variation.key)

				const outcomeFactorsAndPositionsFts: IFullTextSearchObject =
					      await this.addOutcomesFactorsAndPositions(
						      poll, variationOnly, variation,
						      user, transaction, dbUtils)

				this.copyFtsProps(outcomeFactorsAndPositionsFts, poll.fts)
				variation.fts        = poll.fts
				variationListing.fts = poll.fts

				await transaction.set(variationRef, variation)
				await transaction.set(variationListingRef, variationListing)

				if (!variationOnly) {
					await transaction.set(pollRef, poll)
				}

				delete this.tempVariation
			})
		} catch (error) {
			alert(error)
		} finally {
			// Nothing to do
		}

		return poll
	}

	private async setupVariation(
		variationIn: IVariationDoc,
		user: IUser
	): Promise<IVariationDoc> {
		const date       = new Date()
		const dateString = date.toString()
		const timezone   = dateString.split('(')[1].split(')')[0]

		const createdAt: ITimestamp = {
			m: date.getTime(),
			o: date.getTimezoneOffset(),
			s: firebase.firestore.FieldValue.serverTimestamp(),
			z: timezone
		}

		const variation: IVariationDoc = {
			...variationIn,
			createdAt,
			userKey: user.key
		}

		const dbUtils = await container(this).get(DB_UTILS)
		dbUtils.calculateWaterMarks(variation)

		return variation
	}

	private async setupPoll(
		variation: IVariationDoc,
		user: IUser
	): Promise<IPollDoc> {
		const factors: ICorePollFactorsFragment<IsDoc> = {
			1: undefined,
			2: undefined,
			3: undefined
		}

		const dbUtils = await container(this).get(DB_UTILS)

		const poll = {
			ageSuitability: dbUtils.copy(variation.ageSuitability),
			createdAt: variation.createdAt,
			factors,
			fts: undefined,
			key: undefined,
			name: dbUtils.copy(variation.name),
			outcomes: undefined,
			rootVariationKey: variation.key,
			theme: dbUtils.copy(variation.theme),
			userKey: user.key
		}

		const fts = dbUtils.getFtsProps(poll)

		const outcomes = dbUtils.copy(variation.outcomes)

		for (const factorNumber in variation.factors) {
			if (factorNumber === 'marks') {
				continue
			}
			const variationFactor = variation.factors[factorNumber]
			factors[factorNumber] = {
				axis: dbUtils.copy(variationFactor.axis),
				color: dbUtils.copy(variationFactor.color),
				name: dbUtils.copy(variationFactor.name)
			}
		}
		poll.outcomes = outcomes
		poll.fts      = fts

		return poll
	}

	private setupVariationListing(
		poll: IPollDoc,
		variation: IVariationDoc
	): IVariationListingDoc {
		return {
			...poll,
			depth: variation.depth,
			key: variation.key,
			parent: variation.parent,
			path: variation.path,
			pollKey: variation.pollKey
		}
	}

	private async getRefs(
		variation: IVariationDoc
	): Promise<{
		pollRef: IVCDocumentReference<Poll_Key, IPollDoc>,
		variationRef: IVCDocumentReference<Variation_Key, IVariationDoc, Poll_Key, IPollDoc>
	}> {
		const schema       = await container(this).get(SCHEMA)
		const pollRef      = schema.pollDrafts.doc(variation.pollKey)
		const variationRef = schema.pollDrafts.pollVariations(pollRef).reference.doc()

		return {
			pollRef,
			variationRef
		}
	}

	private async prepPollAndGetRefs(
		poll: IPollDoc
	): Promise<{
		pollRef: IVCDocumentReference<Poll_Key, IPollDoc>,
		variationRef: IVCDocumentReference<Variation_Key, IVariationDoc, Poll_Key, IPollDoc>
	}> {
		const schema  = await container(this).get(SCHEMA)
		const pollRef = schema.pollDrafts.doc()
		poll.key      = pollRef.id

		const variationRef = schema.pollDrafts.pollVariations(pollRef).doc()

		poll.rootVariationKey = variationRef.id

		return {
			pollRef,
			variationRef
		}
	}

	private async addOutcomesFactorsAndPositions(
		poll: IPollDoc,
		pollExists: boolean,
		variation: IVariationDoc,
		user: IUser,
		transaction: IVCTransaction,
		dbUtils: IDbUtils
	): Promise<IFullTextSearchObject> {
		const outcomeFactorsAndPositionsFts: IFullTextSearchObject = {}
		const outcomeAfts                                          = await this.addOutcome(
			poll.outcomes.A, poll, pollExists, user, transaction, dbUtils)
		const outcomeBfts                                          = await this.addOutcome(
			poll.outcomes.B, poll, pollExists, user, transaction, dbUtils)

		const factor1fts = await this.addFactor(
			variation.factors[1], poll, pollExists, user, transaction, dbUtils)
		const factor2fts = await this.addFactor(
			variation.factors[2], poll, pollExists, user, transaction, dbUtils)
		const factor3fts = await this.addFactor(
			variation.factors[3], poll, pollExists, user, transaction, dbUtils)

		this.copyFtsProps(outcomeAfts, outcomeFactorsAndPositionsFts)
		this.copyFtsProps(outcomeBfts, outcomeFactorsAndPositionsFts)
		this.copyFtsProps(factor1fts, outcomeFactorsAndPositionsFts)
		this.copyFtsProps(factor2fts, outcomeFactorsAndPositionsFts)
		this.copyFtsProps(factor3fts, outcomeFactorsAndPositionsFts)

		return outcomeFactorsAndPositionsFts
	}

	private async addOutcome(
		outcome: IOutcomeDoc,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction,
		dbUtils: IDbUtils
	): Promise<IFullTextSearchObject> {
		const outcomeExists = !!outcome.key
		const schema        = await container(this).get(SCHEMA)

		const {
			      fts,
			      ref
		      } = await this.addResource(outcome, schema.outcomes,
			user, transaction, [], dbUtils)

		await this.addManyToManyResource(schema.outcomes.outcomePolls(ref),
			outcome, 'outcome', outcomeExists,
			poll, pollExists, user, transaction)

		return fts
	}

	private async addFactor(
		factor: IFactorDoc,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction,
		dbUtils: IDbUtils
	): Promise<IFullTextSearchObject> {
		const factorExists = !!factor.key

		const schema = await container(this).get(SCHEMA)
		const {
			      fts,
			      ref
		      }      = await this.addResource(factor, schema.factors,
			user, transaction, ['positions'], dbUtils)

		await this.addManyToManyResource(schema.factors.factorPolls(ref),
			factor, 'factor', factorExists,
			poll, pollExists, user, transaction)

		const positionAFts = await this.addPosition(
			factor.positions.A, ref, factor, factorExists,
			poll, pollExists, user, transaction, dbUtils)
		const positionBFts = await this.addPosition(
			factor.positions.B, ref, factor, factorExists,
			poll, pollExists, user, transaction, dbUtils)

		this.copyFtsProps(positionAFts, fts)
		this.copyFtsProps(positionBFts, fts)

		return fts
	}

	private copyFtsProps(
		from,
		to
	) {
		for (const fromProperty in from) {
			to[fromProperty] = true
		}
	}

	private async addManyToManyResource<K extends Key, T extends IUserCreated<K>,
		PK extends Key, PT extends IKeyed<PK>>(
		collection: ICollection<K, T, PK, PT>,
		parent: IUserCreated<any>,
		parentName: string,
		parentExists: boolean,
		child: IUserCreated<any>,
		childExists: boolean,
		user: IUser,
		transaction: IVCTransaction
	): Promise<void> {
		const manyToManyRef = collection.doc(child.key)

		// If both factor and this poll existed before, check if this poll is already listed under
		// this factor
		let createManyToMany = true
		if (parentExists && childExists) {
			const manyToManyDoc = await manyToManyRef.get()

			if (manyToManyDoc.exists) {
				createManyToMany = false
			}
		}

		if (!createManyToMany) {
			return
		}

		const manyToMany = {
			...child,
			[parentName + 'Key']: parent.key
		}
		// manyToManyRef =
		await this.addResource(manyToMany, collection, user, transaction)
	}

	private async addPosition(
		position: IPositionDoc,
		factorRef: IVCDocumentReference<Factor_Key, IFactorDoc>,
		factor: IFactorDoc,
		factorExists: boolean,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction,
		dbUtils: IDbUtils
	): Promise<IFullTextSearchObject> {
		const positionExists = !!position.key

		const schema = await container(this).get(SCHEMA)
		const {
			      fts,
			      ref
		      }      = await this.addResource(position, schema.positions,
			user, transaction, [], dbUtils)

		await this.addManyToManyResource(schema.positions.positionPolls(ref),
			position, 'position', positionExists,
			poll, pollExists, user, transaction)

		await this.addManyToManyResource(schema.factors.factorPositions(factorRef),
			factor, 'factor', factorExists,
			position, positionExists, user, transaction)

		return fts
	}

	private async addResource<K extends Key, T extends IUserCreated<K>,
		PK extends Key, PT extends IKeyed<PK>>(
		resource: T,
		collection: ICollection<K, T, PK, PT>,
		user: IUser,
		transaction: IVCTransaction,
		propertiesToDelete: string[] = [],
		dbUtils?: IDbUtils
	): Promise<{
		fts: IFullTextSearchObject,
		ref: IVCDocumentReference<K, T, PK, PT>
	}> {

		let fts
		if (dbUtils) {
			fts = dbUtils.getFtsProps(resource)
		}

		if (resource.key) {
			return {
				fts,
				ref: collection.doc(resource.key)
			}
		}

		const resourceRef = collection.doc()
		resource.key      = resourceRef.id as K
		resource.userKey  = user.key

		resource = {
			...resource
		}
		for (const propertyToDelete of propertiesToDelete) {
			delete resource[propertyToDelete]
		}

		if (dbUtils) {
			resource = {
				...resource,
				fts
			}
		}

		await transaction.set(resourceRef, resource)

		return {
			fts,
			ref: resourceRef
		}
	}

	private async getOne<K extends Key, T extends IKeyed<K>,
		PK extends Key, PT extends IKeyed<PK>>(
		docRef: IVCDocumentReference<K, T, PK, PT>
	): Promise<T | null> {
		const doc = await docRef.get()

		if (doc.exists) {
			return doc.data()
		}

		return null
	}

}

DI.set(POLL_DAO, PollDao)
