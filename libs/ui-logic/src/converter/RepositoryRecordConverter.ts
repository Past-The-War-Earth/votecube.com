import { IUiRepositoryRecord } from "@votecube/model";
import type { IRepositoryEntity } from "@airport/holding-pattern";
import { DI } from "@airport/direction-indicator";
import { REPOSITORY_RECORD_CONVERTER } from "../tokens";

export interface IRepositoryRecordConverter {

    dbToUi(
        dbRepositoryEntity: IRepositoryEntity
    ): IUiRepositoryRecord

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        dbRepositoryEntity: IRepositoryEntity,
        ageSuitability?: 0 | 7 | 13 | 18
    ): void

}

export class RepositoryRecordConverter
    implements IRepositoryRecordConverter {

    dbToUi(
        dbRepositoryEntity: IRepositoryEntity
    ): IUiRepositoryRecord {
        if (!dbRepositoryEntity) {
            return {
                ageSuitability: 0,
            }
        }

        return {
            // actorId: dbRepositoryEntity.actor.id,
            // actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability as 0 | 7 | 13 | 18,
            // repositoryId: dbRepositoryEntity.repository.id,
        }
    }

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        dbRepositoryEntity: IRepositoryEntity,
        ageSuitability: 0 | 7 | 13 | 18 = null
    ): void {
        // if (!uiRepositoryRecord) {
        //     return
        // }
        if (ageSuitability || ageSuitability === 0) {
            dbRepositoryEntity.ageSuitability = ageSuitability
        }
        /*
        if (!dbRepositoryEntity.actor) {
            dbRepositoryEntity.actor = {
                id: null
            }
        }
        if (!dbRepositoryEntity.repository) {
            dbRepositoryEntity.repository = {
                id: null
            }
        }
        */
    }

}
DI.set(REPOSITORY_RECORD_CONVERTER, RepositoryRecordConverter)