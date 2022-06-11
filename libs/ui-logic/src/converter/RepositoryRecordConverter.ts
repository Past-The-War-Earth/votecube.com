import { IUiRepositoryRecord } from "@votecube/model";
import type { IAirEntity } from "@airport/holding-pattern";
import { Injected } from "@airport/direction-indicator";

export interface IRepositoryRecordConverter {

    dbToUi(
        dbAirEntity: IAirEntity
    ): IUiRepositoryRecord

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        dbAirEntity: IAirEntity,
        ageSuitability?: 0 | 7 | 13 | 18
    ): void

}

@Injected()
export class RepositoryRecordConverter
    implements IRepositoryRecordConverter {

    dbToUi(
        dbAirEntity: IAirEntity
    ): IUiRepositoryRecord {
        if (!dbAirEntity) {
            return {
                ageSuitability: 0,
            }
        }

        return {
            // actorId: dbAirEntity.actor.id,
            // actorRecordId: dbAirEntity.actorRecordId,
            ageSuitability: dbAirEntity.ageSuitability as 0 | 7 | 13 | 18,
            // repositoryId: dbAirEntity.repository.id,
        }
    }

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        dbAirEntity: IAirEntity,
        ageSuitability: 0 | 7 | 13 | 18 = null
    ): void {
        // if (!uiRepositoryRecord) {
        //     return
        // }
        if (ageSuitability || ageSuitability === 0) {
            dbAirEntity.ageSuitability = ageSuitability
        }
        /*
        if (!dbAirEntity.actor) {
            dbAirEntity.actor = {
                id: null
            }
        }
        if (!dbAirEntity.repository) {
            dbAirEntity.repository = {
                id: null
            }
        }
        */
    }

}
