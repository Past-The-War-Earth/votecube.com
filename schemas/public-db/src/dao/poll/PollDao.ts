import {DI}       from '@airport/di'
import {POLL_DAO} from '../../diTokens'
import {IPoll}    from '../../generated/interfaces'
import {Poll_Id}  from '../../types/poll/Poll'

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

	getOriginalDetails(
		pollId: Poll_Id
	): Promise<IPoll>

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
		const db = (window as any).db
		return await db.collection('polls')
			.orderBy('createdAt', 'desc')
			.get()
	}

	async getForTheme(
		themeId: number
	): Promise<IPoll[]> {
		const db = (window as any).db
		return await db.collection('polls')
			.where('theme.id', '==', themeId)
			.orderBy('createdAt', 'desc')
			.get()
	}

	async getOriginalDetails(
		pollId: Poll_Id
	): Promise<IPoll> {
		if (pollId == 0) {
			return this.tempPoll
		}

		const docRef = (window as any).db
			.collection('polls').doc(pollId)
			.collection('variations')
			.where('initial', '==', true)

		const result = await docRef.get()

		const docs = result.docs

		if (!docs.length) {
			return null
		}

		return docs[0].data()
	}

	async save(
		aPoll: IPoll,
		user
	): Promise<IPoll> {
		const createdAt      = new Date().getTime()
		const variation: any = {
			...aPoll,
			by: user.name,
			createdAt,
			initial: true,
			uid: user.uid
		}
		delete variation.id

		const factors = {}

		for (const pfp of variation.pollFactorPositions) {
			factors[pfp.axis] = {
				...pfp.factorPosition.factor,
				color: pfp.color
			}
		}

		const outcomes = {}
		for (const outcome of variation.outcomes) {
			outcomes[outcome.key] = {
				name: outcome.outcome
			}
		}

		const poll: any = {
			ageSuitability: variation.ageSuitability,
			createdAt,
			factors,
			name: variation.name,
			outcomes,
			theme: variation.theme,
			uid: user.uid
		}

		try {
			const db = (window as any).db
			await db.runTransaction(async (transaction) => {
				const pollRef             = db.collection('polls').doc()
				const variationRef        = pollRef
					.collection('variations').doc()
				const variationListingRef = pollRef
					.collection('variationListings').doc()

				poll.key          = pollRef.id
				variation.key     = variationRef.id
				variation.pollKey = pollRef.id

				const variationListing = {
					...poll,
					key: variationListingRef.id,
					pollKey: pollRef.id,
					variationKey: variationRef.id,
				}

				await transaction.set(pollRef, poll)
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
