import {DI}       from '@airport/di'
import {POLL_DAO} from '../../diTokens'
import {IPoll}    from '../../generated/interfaces'
import {Poll_Id}  from '../../types/poll/Poll'
import {
	calculateWaterMarks,
	copy
}                 from '../DB'

export interface IPollDao
	// extends IBasePollDao
{
	// findByPollIdWithDetails(
	// 	pollId: Poll_Id
	// ): Promise<IPoll>

	addTemp(
		poll: IPoll
	): void

	getAll(): Promise<IPoll[]>

	getForTheme(
		themeId: number
	): Promise<IPoll[]>

	save(
		poll: IPoll,
		user
	): Promise<IPoll>

}

export class PollDao
	// extends BasePollDao
	implements IPollDao {

	tempPoll: IPoll
	DI

	async addTemp(
		poll: IPoll
	): Promise<void> {
		this.tempPoll = poll
	}

	async getAll(): Promise<IPoll[]> {
		const db     = (window as any).db
		const result = await db.collection('polls')
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getForTheme(
		themeId: number
	): Promise<IPoll[]> {
		const db     = (window as any).db
		const result = await db.collection('polls')
			.where('theme.id.v', '==', themeId)
			.orderBy('createdAt.m', 'desc')
			.get()
		return result.docs.map(
			doc => doc.data())
	}

	async getVariation(
		pollKey: Poll_Id,
		variationKey: any
	): Promise<IPoll> {
		return await this.getChildPollObjectByKey(pollKey, variationKey, 'variations')
	}

	async getVariationListing(
		pollKey: Poll_Id,
		variationKey: any
	): Promise<IPoll> {
		const result = await (window as any).db
			.collection('polls').doc(pollKey)
			.collection('variationListings')
			.where('variationKey', '==', variationKey)
			.get()

		const records = result.docs.map(
			doc => doc.data())

		if (!records.length) {
			return null
		}

		return records[0]
	}

	async getChildVariationListings(
		pollKey: Poll_Id,
		variationKey: any
	): Promise<IPoll> {
		const result = await (window as any).db
			.collection('polls').doc(pollKey)
			.collection('variationListings')
			.where('parent.key', '==', variationKey)
			.orderBy('createdAt.m', 'desc')
			.get()

		return result.docs.map(
			doc => doc.data())
	}

	async save(
		aPoll: IPoll,
		user
	): Promise<IPoll> {
		const createdAt: any = {}
		const date           = new Date()

		createdAt.m      = date.getTime()
		createdAt.o      = date.getTimezoneOffset()
		const dateString = date.toString()
		const timezone   = dateString.split('(')[1].split(')')[0]
		createdAt.z      = timezone

		const variation: any = {
			...aPoll,
			createdAt,
			uid: user.uid
		}
		delete variation.id

		calculateWaterMarks(variation)

		const factors = {}

		for (const factorName in variation.factors) {
			if (factorName === 'marks') {
				continue
			}
			const variationFactor = variation.factors[factorName]
			factors[factorName]   = {
				axis: copy(variationFactor.axis),
				color: copy(variationFactor.color),
				name: copy(variationFactor.name)
			}
		}

		const poll: any = {
			ageSuitability: copy(variation.ageSuitability),
			createdAt,
			factors,
			name: copy(variation.name),
			outcomes: copy(variation.outcomes),
			theme: copy(variation.theme),
			uid: user.uid
		}

		try {
			const db = (window as any).db
			await db.runTransaction(async (transaction) => {
				let pollRef

				if (!variation.parent) {
					pollRef           = db.collection('polls').doc()
					poll.key          = pollRef.id
					variation.pollKey = poll.key
				} else {
					pollRef = db.collection('polls').doc(variation.pollKey)
				}

				const variationRef        = pollRef
					.collection('variations').doc()
				const variationListingRef = pollRef
					.collection('variationListings').doc()

				variation.key = variationRef.id

				const variationListing = {
					...poll,
					depth: variation.depth,
					key: variationListingRef.id,
					parent: variation.parent,
					pollKey: variation.pollKey,
					variationKey: variation.key,
				}

				if (!variation.parent) {
					poll.rootVariationKey = variation.key
					await transaction.set(pollRef, poll)
				}
				await transaction.set(variationRef, variation)
				await transaction.set(variationListingRef, variationListing)

				delete this.tempPoll
			})
		} catch (error) {
			alert(error)
		} finally {
			// Nothing to do
		}

		return poll
	}

	private async getChildPollObjectByKey(
		pollKey: Poll_Id,
		variationKey: any,
		childPollCollectionName
	): Promise<IPoll> {
		const docRef = (window as any).db
			.collection('polls').doc(pollKey)
			.collection(childPollCollectionName).doc(variationKey)

		// const result = await result.ref.get()

		const doc = await docRef.get()

		if (doc.exists) {
			return doc.data()
		}

		return null
	}

	/*

	async findByPollIdWithDetails(
		pollId: Poll_Id
	): Promise<IPoll> {
		return await this.findFromWhereClauseWithSomeDetails(
			p => p.id.equals(pollId))
	}

	private async findFromWhereClauseWithSomeDetails(
		callback: (
			p: QPoll
		) => JSONBaseOperation
	): Promise<IPoll> {
		const pfpDuo = await DI.get(POLL_FACTOR_POSITION_DUO)
		const pconDuo = await DI.get(POLL_CONTINENT_DUO)

		const repoIdFieldsSelect = this.db.duo.select.fields
		let p: QPoll
		return await this.db.findOne.graph({
			from: [
				p = this.db.from
			],
			select: {
				...this.db.duo.select.fields,
				pollContinents: {
					...pconDuo.select.fields,
					continent: {}
				},
				pollCountries: {
					...repoIdFieldsSelect,
					country: {}
				},
				pollFactorPositions: {
					...pfpDuo.select.fields,
					factorPosition: {
						...repoIdFieldsSelect,
						factor: {},
						position: {}
					}
				},
				pollStates: {
					...repoIdFieldsSelect,
					state: {}
				},
				pollTowns: {
					...repoIdFieldsSelect,
					town: {}
				},
				theme: {}
			},
			where: callback(p)
		})
	}

	private matchRepoEntitiesByIds(
		repositoryEntities: IRepositoryEntity[],
		referencingEntities: any[],
		repositoryEntityPropertyName: string,
		referencingEntitiesPropertyName: string
	): void {
		const repoEntityMap: Map<number, Map<number, Map<number, IRepositoryEntity>>>
						= new Map<number, Map<number, Map<number, IRepositoryEntity>>>()

		for (const repositoryEntity of repositoryEntities) {
			repositoryEntity[referencingEntitiesPropertyName] = []
			ensureChildJsMap(
				ensureChildJsMap(repoEntityMap,
					repositoryEntity.repository.id),
				repositoryEntity.actor.id).set(repositoryEntity.actorRecordId, repositoryEntity)
		}

		for (const referencingEntity of referencingEntities) {
			const repoEntityReference = referencingEntity[repositoryEntityPropertyName]

			const repoEntityMapForRepoId = repoEntityMap.get(repoEntityReference.repository.id)

			if (!repoEntityMapForRepoId) {
				continue
			}

			const repoEntityMapForActorId = repoEntityMapForRepoId.get(repoEntityReference.actor.id)

			if (!repoEntityMapForActorId) {
				continue
			}

			const repositoryEntity = repoEntityMapForActorId.get(repoEntityReference.actorRecordId)

			if (!repositoryEntity) {
				continue
			}

			repositoryEntity[referencingEntitiesPropertyName].push(referencingEntity)
			referencingEntity[repositoryEntityPropertyName] = repositoryEntity
		}
	}
*/
}

DI.set(POLL_DAO, PollDao)
