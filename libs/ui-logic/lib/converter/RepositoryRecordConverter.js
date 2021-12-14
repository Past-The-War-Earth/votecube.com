import { DI } from "@airport/di";
import { REPOSITORY_RECORD_CONVERTER } from "../tokens";
export class RepositoryRecordConverter {
    dbToUi(dbRepositoryEntity) {
        if (!dbRepositoryEntity) {
            return {
                ageSuitability: 0,
            };
        }
        return {
            // actorId: dbRepositoryEntity.actor.id,
            // actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability,
            // repositoryId: dbRepositoryEntity.repository.id,
        };
    }
    uiToDb(uiRepositoryRecord, dbRepositoryEntity, ageSuitability = null) {
        // if (!uiRepositoryRecord) {
        //     return
        // }
        if (ageSuitability || ageSuitability === 0) {
            dbRepositoryEntity.ageSuitability = ageSuitability;
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
DI.set(REPOSITORY_RECORD_CONVERTER, RepositoryRecordConverter);
//# sourceMappingURL=RepositoryRecordConverter.js.map