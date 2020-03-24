import {
	container,
	DI
}                    from '@airport/di'
import {
	Factor_Id,
	ICorePollFactorsFragment,
	IFactorDoc,
	IIdentified,
	IOutcomeDoc,
	IPollDoc,
	IPositionDoc,
	IsDoc,
	ITimestamp,
	IUiPollRevision,
	IUser,
	IUserCreated,
	IRevisionDoc,
	IRevisionListingDoc,
	Id,
	Poll_Id,
	Revision_Id
} from '@votecube/model'
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
		poll: IRevisionDoc
	): void

	getAll(): Promise<IPollDoc[]>

	getChildRevisionListings(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionListingDoc[]>

	getForTheme(
		themeId: number
	): Promise<IPollDoc[]>

	getRevision(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionDoc>

	getRevisionListing(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionListingDoc>

	save(
		revision: IRevisionDoc,
		user: IUser
	): Promise<IPollDoc>

}

export class PollDao
	// extends BasePollDao
	implements IPollDao {

	tempRevision: IRevisionDoc


	async addTemp(
		poll: IRevisionDoc
	): Promise<void> {
		this.tempRevision = poll
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

	async getRevision(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionDoc> {
		const schema = await container(this).get(SCHEMA)
		return await this.getOne(
			schema.pollDrafts.pollRevisions(pollId).doc(revisionId)
		)
	}

	async getRevisionListing(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionListingDoc> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.pollRevisionListings(pollId)
			.reference.where('id', '==', revisionId)
			.get()

		const records = result.docs.map(
			doc => doc.data())

		if (!records.length) {
			return null
		}

		return records[0]
	}

	async getChildRevisionListings(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionListingDoc[]> {
		const schema = await container(this).get(SCHEMA)
		const result = await schema.pollDrafts.pollRevisionListings(pollId)
			.reference.where('parent.id', '==', revisionId)
			.orderBy('createdAt.m', 'desc')
			.get()

		return result.docs.map(
			doc => doc.data())
	}

	async save(
		revisionIn: IUiPollRevision,
		user: IUser,
	): Promise<IPollDoc> {
		const revisionOnly = !!revisionIn.pollId

		const revision = await this.setupRevision(revisionIn, user)
		const poll      = await this.setupPoll(revision, user)

		try {
			const [dbUtils, schema] = await container(this).get(DB_UTILS, SCHEMA)
			await schema.db.runTransaction(async (transaction) => {
				const {
					      pollRef,
					      revisionRef
				      } = revisionOnly
					? await this.getRefs(revision)
					: await this.prepPollAndGetRefs(poll)

				poll.id          = pollRef.id
				revision.pollId = poll.id
				revision.id     = revisionRef.id

				const revisionListing    = this.setupRevisionListing(poll, revision)
				const revisionListingRef = schema.pollDrafts.pollRevisionListings(pollRef)
					.doc(revision.id)

				const outcomeFactorsAndPositionsFts: IFullTextSearchObject =
					      await this.addOutcomesFactorsAndPositions(
						      poll, revisionOnly, revision,
						      user, transaction, dbUtils)

				this.copyFtsProps(outcomeFactorsAndPositionsFts, poll.fts)
				revision.fts        = poll.fts
				revisionListing.fts = poll.fts

				await transaction.set(revisionRef, revision)
				await transaction.set(revisionListingRef, revisionListing)

				if (!revisionOnly) {
					await transaction.set(pollRef, poll)
				}

				delete this.tempRevision
			})
		} catch (error) {
			alert(error)
		} finally {
			// Nothing to do
		}

		return poll
	}

	private async setupRevision(
		revisionIn: IRevisionDoc,
		user: IUser
	): Promise<IRevisionDoc> {
		const date       = new Date()
		const dateString = date.toString()
		const timezone   = dateString.split('(')[1].split(')')[0]

		const createdAt: ITimestamp = {
			m: date.getTime(),
			o: date.getTimezoneOffset(),
			s: firebase.firestore.FieldValue.serverTimestamp(),
			z: timezone
		}

		const revision: IRevisionDoc = {
			...revisionIn,
			createdAt,
			userId: user.id
		}

		const dbUtils = await container(this).get(DB_UTILS)
		dbUtils.calculateWaterMarks(revision)

		return revision
	}

	private async setupPoll(
		revision: IRevisionDoc,
		user: IUser
	): Promise<IPollDoc> {
		const factors: ICorePollFactorsFragment<IsDoc> = {
			1: undefined,
			2: undefined,
			3: undefined
		}

		const dbUtils = await container(this).get(DB_UTILS)

		const poll = {
			ageSuitability: dbUtils.copy(revision.ageSuitability),
			createdAt: revision.createdAt,
			factors,
			fts: undefined,
			id: undefined,
			name: dbUtils.copy(revision.name),
			outcomes: undefined,
			rootRevisionId: revision.id,
			theme: dbUtils.copy(revision.theme),
			userId: user.id
		}

		const fts = await dbUtils.getFtsProps(poll)

		const outcomes = dbUtils.copy(revision.outcomes)

		for (const factorNumber in revision.factors) {
			if (factorNumber === 'marks') {
				continue
			}
			const revisionFactor = revision.factors[factorNumber]
			factors[factorNumber] = {
				axis: dbUtils.copy(revisionFactor.axis),
				color: dbUtils.copy(revisionFactor.color),
				name: dbUtils.copy(revisionFactor.name)
			}
		}
		poll.outcomes = outcomes
		poll.fts      = fts

		return poll
	}

	private setupRevisionListing(
		poll: IPollDoc,
		revision: IRevisionDoc
	): IRevisionListingDoc {
		return {
			...poll,
			depth: revision.depth,
			id: revision.id,
			parent: revision.parent,
			path: revision.path,
			pollId: revision.pollId
		}
	}

	private async getRefs(
		revision: IRevisionDoc
	): Promise<{
		pollRef: IVCDocumentReference<Poll_Id, IPollDoc>,
		revisionRef: IVCDocumentReference<Revision_Id, IRevisionDoc, Poll_Id, IPollDoc>
	}> {
		const schema       = await container(this).get(SCHEMA)
		const pollRef      = schema.pollDrafts.doc(revision.pollId)
		const revisionRef = schema.pollDrafts.pollRevisions(pollRef).reference.doc()

		return {
			pollRef,
			revisionRef
		}
	}

	private async prepPollAndGetRefs(
		poll: IPollDoc
	): Promise<{
		pollRef: IVCDocumentReference<Poll_Id, IPollDoc>,
		revisionRef: IVCDocumentReference<Revision_Id, IRevisionDoc, Poll_Id, IPollDoc>
	}> {
		const schema  = await container(this).get(SCHEMA)
		const pollRef = schema.pollDrafts.doc()
		poll.id      = pollRef.id

		const revisionRef = schema.pollDrafts.pollRevisions(pollRef).doc()

		poll.rootRevisionId = revisionRef.id

		return {
			pollRef,
			revisionRef
		}
	}

	private async addOutcomesFactorsAndPositions(
		poll: IPollDoc,
		pollExists: boolean,
		revision: IRevisionDoc,
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
			revision.factors[1], poll, pollExists, user, transaction, dbUtils)
		const factor2fts = await this.addFactor(
			revision.factors[2], poll, pollExists, user, transaction, dbUtils)
		const factor3fts = await this.addFactor(
			revision.factors[3], poll, pollExists, user, transaction, dbUtils)

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
		const outcomeExists = !!outcome.id
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
		const factorExists = !!factor.id

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

	private async addManyToManyResource<K extends Id, T extends IUserCreated<K>,
		PK extends Id, PT extends IIdentified<PK>>(
		collection: ICollection<K, T, PK, PT>,
		parent: IUserCreated<any>,
		parentName: string,
		parentExists: boolean,
		child: IUserCreated<any>,
		childExists: boolean,
		user: IUser,
		transaction: IVCTransaction
	): Promise<void> {
		const manyToManyRef = collection.doc(child.id)

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
			[parentName + 'Id']: parent.id
		}
		// manyToManyRef =
		await this.addResource(manyToMany, collection, user, transaction)
	}

	private async addPosition(
		position: IPositionDoc,
		factorRef: IVCDocumentReference<Factor_Id, IFactorDoc>,
		factor: IFactorDoc,
		factorExists: boolean,
		poll: IPollDoc,
		pollExists: boolean,
		user: IUser,
		transaction: IVCTransaction,
		dbUtils: IDbUtils
	): Promise<IFullTextSearchObject> {
		const positionExists = !!position.id

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

	private async addResource<K extends Id, T extends IUserCreated<K>,
		PK extends Id, PT extends IIdentified<PK>>(
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
			fts = await dbUtils.getFtsProps(resource)
		}

		if (resource.id) {
			return {
				fts,
				ref: collection.doc(resource.id)
			}
		}

		const resourceRef = collection.doc()
		resource.id      = resourceRef.id as K
		resource.userId  = user.id

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

	private async getOne<K extends Id, T extends IIdentified<K>,
		PK extends Id, PT extends IIdentified<PK>>(
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
