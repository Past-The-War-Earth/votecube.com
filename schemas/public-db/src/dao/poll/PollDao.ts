import {DI}       from '@airport/di'
import {POLL_DAO} from '../../diTokens'
import {IPoll}    from '../../generated/interfaces'
import {Poll_Id}  from '../../types/poll/Poll'
import {
	DB,
	SEQUENCES
}                 from '../stubDB'

export interface IPollDao
	// extends IBasePollDao
{
	// findByPollIdWithDetails(
	// 	pollId: Poll_Id
	// ): Promise<IPoll>

	addTemp(
		poll: IPoll,
		pollId?: Poll_Id
	): void

	getAll(): Promise<IPoll[]>

	findByIdWithDetails(
		pollId: Poll_Id
	): Promise<IPoll>

	getTempPoll(
		pollId: Poll_Id
	): Promise<IPoll>

	save(
		poll: IPoll
	): Promise<IPoll>

}

export class PollDao
	// extends BasePollDao
	implements IPollDao {

	pollMap: { [pollId: number]: IPoll }     = {}
	tempPollMap: { [pollId: number]: IPoll } = {}

	async addTemp(
		poll: IPoll,
		pollId: Poll_Id = poll.id
	): Promise<void> {
		this.tempPollMap[pollId] = poll
	}

	async getAll(): Promise<IPoll[]> {
		return DB.polls.map(
			poll => {
				if (this.pollMap[poll.id]) {
					return poll
				}

				return this.cachePoll(poll)
			}).filter(
			poll => poll.id)
	}

	async findByIdWithDetails(
		pollId: Poll_Id
	): Promise<IPoll> {
		pollId = parseInt(pollId as any)
		if (!pollId && pollId != 0) {
			return null
		}
		let poll = this.tempPollMap[pollId]

		if (poll) {
			return poll
		}

		poll = this.pollMap[pollId]

		if (poll) {
			return poll
		}

		poll = DB.polls.filter(
			aPoll => pollId === aPoll.id)[0]

		return this.cachePoll(poll)
	}

	async getTempPoll(
		pollId: Poll_Id
	): Promise<IPoll> {
		return this.tempPollMap[pollId]
	}

	async save(
		poll: IPoll
	): Promise<IPoll> {
		poll.id = ++SEQUENCES.polls;
		(poll as any).pollsFactorsPositions.forEach((
			pollFactorPosition
		) => {
			pollFactorPosition.id      = ++SEQUENCES.pollsFactorsPositions
			const factorPosition       = pollFactorPosition.factorPosition
			factorPosition.id          = ++SEQUENCES.factorPositions
			factorPosition.factor.id   = ++SEQUENCES.factors
			factorPosition.position.id = ++SEQUENCES.positions
		})

		this.pollMap[poll.id] = poll
		DB.polls.push(poll as any)
		delete this.tempPollMap[0]

		return poll
	}

	private cachePoll(
		poll: IPoll
	): IPoll {
		for (const pollFactorPosition of (poll as any).pollsFactorsPositions) {
			let currentFactorPosition
			pollFactorPosition.factorPosition = DB.factorPositions.filter((factorPosition) => {
				if (factorPosition.id === pollFactorPosition.factorPosition.id) {
					currentFactorPosition = factorPosition
					return true
				}
			})[0]

			currentFactorPosition.factor = DB.factors.filter((factor) =>
				factor.id === currentFactorPosition.factor.id
			)[0]

			currentFactorPosition.position = DB.positions.filter((position) =>
				position.id === currentFactorPosition.position.id
			)[0]
		}

		this.pollMap[poll.id] = poll

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
