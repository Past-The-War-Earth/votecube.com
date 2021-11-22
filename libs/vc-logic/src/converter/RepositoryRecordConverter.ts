import { IUiRepositoryRecord } from "@votecube/model";
import type { IRepositoryEntity } from "@airport/holding-pattern";
import { DI } from "@airport/di";
import { REPOSITORY_RECORD_CONVERTER } from "../tokens";

export interface IToDbConversionContext {
    actorsById: Map<number, {
        id: number
    }>
    repositoriesById: Map<number, {
        id: number
    }>
}

export function getToDbConversionContext(): IToDbConversionContext {
    return {
        actorsById: new Map(),
        repositoriesById: new Map()
    }
}

export interface IRepositoryRecordConverter {

    dbToUi(
        dbRepositoryEntity: IRepositoryEntity
    ): IUiRepositoryRecord

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        context?: IToDbConversionContext,
        ageSuitability?: 0 | 7 | 13 | 18
    ): IRepositoryEntity

}

export class RepositoryRecordConverter
    implements IRepositoryRecordConverter {

    dbToUi(
        dbRepositoryEntity: IRepositoryEntity
    ): IUiRepositoryRecord {
        if (!dbRepositoryEntity) {
            return null
        }

        return {
            actorId: dbRepositoryEntity.actor.id,
            // actorUuId: dbRepositoryEntity.actor.uuId,
            actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability as 0 | 7 | 13 | 18,
            repositoryId: dbRepositoryEntity.repository.id,
            // repositoryUuId: dbRepositoryEntity.repository.uuId,
        }
    }

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        context: IToDbConversionContext,
        ageSuitability: 0 | 7 | 13 | 18 = null
    ): IRepositoryEntity {
        if (!uiRepositoryRecord) {
            return {
                actor: {
                    id: null,
                    // uuId: null
                },
                actorRecordId: null,
                ageSuitability,
                repository: {
                    id: null,
                    // uuId: null
                }
            }
        }
        if (uiRepositoryRecord.ageSuitability || uiRepositoryRecord.ageSuitability === 0) {
            ageSuitability = uiRepositoryRecord.ageSuitability
        }
        let actor = null
        if (uiRepositoryRecord.actorId) {
            actor = context.actorsById.get(uiRepositoryRecord.actorId)
            if (!actor) {
                actor = {
                    id: uiRepositoryRecord.actorId,
                    // uuId: uiRepositoryRecord.actorUuId
                }
                context.actorsById.set(uiRepositoryRecord.actorId, actor)
            }
        }
        let repository = null
        if (uiRepositoryRecord.repositoryId) {
            repository = context.repositoriesById.get(uiRepositoryRecord.repositoryId)
            if (!repository) {
                repository = {
                    id: uiRepositoryRecord.repositoryId,
                    // uuId: uiRepositoryRecord.repositoryUuId
                }
                context.repositoriesById.set(uiRepositoryRecord.repositoryId, repository)
            }
        }
        return {
            actor,
            actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability,
            repository
        }
    }

}
DI.set(REPOSITORY_RECORD_CONVERTER, RepositoryRecordConverter)