import {DI}                     from '@airport/di'
import {JSONBaseOperation}      from '@airport/ground-control'
import {IRepositoryEntity}      from '@airport/holding-pattern'
import {Poll_Id}                from '../../ddl/poll/Poll'
import {
	POLL_DAO,
	POLL_FACTOR_POSITION_DMO
}                               from '../../diTokens'
import {IPollFactorPositionDmo} from '../../dmo/dmo'
import {
	BasePollDao,
	IBasePollDao,
	IPoll,
	QPoll
}                               from '../../generated/generated'

export interface IPollDao
	extends IBasePollDao {
	findByPollIdWithDetails(
		pollId: Poll_Id
	): Promise<IPoll>
}

export class PollDao
	extends BasePollDao
	implements IPollDao {

	pfpDmo: IPollFactorPositionDmo

	constructor() {
		super()
		DI.get(
			pollFactorPositionDao => {
				this.pfpDmo = pollFactorPositionDao
			}, POLL_FACTOR_POSITION_DMO)
	}

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
		const repoIdFieldsSelect = this.db.dmo.getIdFieldsSelect()
		let p: QPoll
		return await this.db.findOne.graph({
			from: [
				p = this.db.from
			],
			select: {
				...this.db.dmo.getAllFieldsSelect(),
				pollContinents: {
					...repoIdFieldsSelect,
					continent: {}
				},
				pollCountries: {
					...repoIdFieldsSelect,
					country: {}
				},
				pollFactorPositions: {
					...this.pfpDmo.getAllFieldsSelect(),
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
			this.utils.ensureChildJsMap(
				this.utils.ensureChildJsMap(repoEntityMap,
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

}

DI.set(POLL_DAO, PollDao)
