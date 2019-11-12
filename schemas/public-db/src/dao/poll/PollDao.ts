import {DI}        from '@airport/di'
import {
	FactorKey,
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
	PollKey,
	VariationKey
}                  from '@votecube/model'
import * as firebase from 'firebase/app'
import {
	DB_UTILS,
	POLL_DAO,
	SCHEMA
}                  from '../../diTokens'
import {
	ICollection,
	IVCDocumentReference,
	IVCTransaction
}                  from '../../document/document'

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
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationListingDoc[]>

	getForTheme(
		themeId: number
	): Promise<IPollDoc[]>

	getVariation(
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationDoc>

	getVariationListing(
		pollKey: PollKey,
		variationKey: VariationKey
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
		const schema = await DI.get(SCHEMA)
		const result = await schema.pollDrafts.reference
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getForTheme(
		themeId: number
	): Promise<IPollDoc[]> {
		const schema = await DI.get(SCHEMA)
		const result = await schema.pollDrafts.reference
			.where('theme.id.v', '==', themeId)
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getVariation(
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationDoc> {
		const schema = await DI.get(SCHEMA)
		return await this.getOne(
			schema.pollDrafts.pollVariations(pollKey).doc(variationKey)
		)
	}

	async getVariationListing(
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationListingDoc> {
		const schema = await DI.get(SCHEMA)
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
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationListingDoc[]> {
		const schema = await DI.get(SCHEMA)
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
			const schema = await DI.get(SCHEMA)
			await schema.db.runTransaction(async (transaction) => {
				const {
					      pollRef,
					      variationRef
				      } = variationOnly
					? await this.getRefs(variation)
					: await this.savePollAndGetRefs(poll, transaction)

				variation.pollKey = poll.key
				variation.key     = variationRef.id
				await transaction.set(variationRef, variation)

				const variationListing    = this.setupVariationListing(poll, variation)
				const variationListingRef = schema.pollDrafts.pollVariationListings(pollRef)
					.doc(variation.key)
				await transaction.set(variationListingRef, variationListing)

				await this.addOutcomesFactorsAndPositions(
					poll, variationOnly, variation,
					user, transaction)

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
		delete (variation as any).id

		const dbUtils = await DI.get(DB_UTILS)
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

		const dbUtils = await DI.get(DB_UTILS)

		for (const factorName in variation.factors) {
			if (factorName === 'marks') {
				continue
			}
			const variationFactor = variation.factors[factorName]
			factors[factorName]   = {
				axis: dbUtils.copy(variationFactor.axis),
				color: dbUtils.copy(variationFactor.color),
				name: dbUtils.copy(variationFactor.name)
			}
		}

		return {
			ageSuitability: dbUtils.copy(variation.ageSuitability),
			createdAt: variation.createdAt,
			factors,
			fts: undefined,
			key: undefined,
			name: dbUtils.copy(variation.name),
			outcomes: dbUtils.copy(variation.outcomes),
			rootVariationKey: variation.key,
			theme: dbUtils.copy(variation.theme),
			userKey: user.key
		}
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
		pollRef: IVCDocumentReference<PollKey, IPollDoc>,
		variationRef: IVCDocumentReference<VariationKey, IVariationDoc, PollKey, IPollDoc>
	}> {
		const schema       = await DI.get(SCHEMA)
		const pollRef      = schema.pollDrafts.doc(variation.pollKey)
		const variationRef = schema.pollDrafts.pollVariations(pollRef).reference.doc()

		return {
			pollRef,
			variationRef
		}
	}

	private async savePollAndGetRefs(
		poll: IPollDoc,
		transaction: IVCTransaction,
	): Promise<{
		pollRef: IVCDocumentReference<PollKey, IPollDoc>,
		variationRef: IVCDocumentReference<VariationKey, IVariationDoc, PollKey, IPollDoc>
	}> {
		const schema  = await DI.get(SCHEMA)
		const pollRef = schema.pollDrafts.doc()
		poll.key      = pollRef.id

		const variationRef = schema.pollDrafts.pollVariations(pollRef).doc()

		poll.rootVariationKey = variationRef.id
		await transaction.set(pollRef, poll)

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
		transaction: IVCTransaction
	): Promise<void> {
		await this.addOutcome(poll.outcomes.A, poll, pollExists, user, transaction)
		await this.addOutcome(poll.outcomes.B, poll, pollExists, user, transaction)

		await this.addFactor(variation.factors[1], poll, pollExists, user, transaction)
		await this.addFactor(variation.factors[2], poll, pollExists, user, transaction)
		await this.addFactor(variation.factors[3], poll, pollExists, user, transaction)
	}

	private async addOutcome(
		outcome: IOutcomeDoc,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction
	): Promise<void> {
		const outcomeExists = !!outcome.key
		const schema        = await DI.get(SCHEMA)
		const outcomeRef    = await this.addResource(outcome, schema.outcomes,
			user, transaction)

		await this.addManyToManyResource(schema.outcomes.outcomePolls(outcomeRef),
			outcome, 'outcome', outcomeExists,
			poll, pollExists, user, transaction)
	}

	private async addFactor(
		factor: IFactorDoc,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction
	): Promise<void> {
		const factorExists     = !!factor.key
		const standAloneFactor = {...factor}
		delete standAloneFactor.positions

		const schema    = await DI.get(SCHEMA)
		const factorRef = await this.addResource(standAloneFactor, schema.factors,
			user, transaction)

		await this.addManyToManyResource(schema.factors.factorPolls(factorRef),
			factor, 'factor', factorExists,
			poll, pollExists, user, transaction)

		await this.addPosition(factor.positions.A, factorRef, factor, factorExists,
			poll, pollExists, user, transaction)
		await this.addPosition(factor.positions.B, factorRef, factor, factorExists,
			poll, pollExists, user, transaction)
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
		factorRef: IVCDocumentReference<FactorKey, IFactorDoc>,
		factor: IFactorDoc,
		factorExists: boolean,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction
	): Promise<void> {
		const positionExists = !!position.key

		const schema      = await DI.get(SCHEMA)
		const positionRef = await this.addResource(position, schema.positions,
			user, transaction)

		await this.addManyToManyResource(schema.positions.positionPolls(positionRef),
			position, 'position', positionExists,
			poll, pollExists, user, transaction)

		await this.addManyToManyResource(schema.factors.factorPositions(factorRef),
			factor, 'factor', factorExists,
			position, positionExists, user, transaction)
	}

	private async addResource<K extends Key, T extends IUserCreated<K>,
		PK extends Key, PT extends IKeyed<PK>>(
		resource: T,
		collection: ICollection<K, T, PK, PT>,
		user: IUser,
		transaction: IVCTransaction
	): Promise<IVCDocumentReference<K, T, PK, PT>> {
		if (resource.key) {
			return collection.doc(resource.key)
		}

		const resourceRef = collection.doc()
		resource.key      = resourceRef.id as K
		resource.userKey  = user.key

		await transaction.set(resourceRef, resource)

		return resourceRef
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
