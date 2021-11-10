import { DI } from "@airport/di";
import { REPOSITORY_RECORD_CONVERTER } from "../tokens";
export class RepositoryRecordConverter {
    dbToUi(dbRepositoryEntity) {
        return {
            actorId: dbRepositoryEntity.actor.id,
            // actorUuId: dbRepositoryEntity.actor.uuId,
            actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability,
            repositoryId: dbRepositoryEntity.repository.id,
        };
    }
    uiToDb(uiRepositoryRecord, ageSuitability = null) {
        if (!uiRepositoryRecord) {
            return {
                actor: {
                    id: null,
                },
                actorRecordId: null,
                ageSuitability,
                repository: {
                    id: null,
                    uuId: null
                }
            };
        }
        if (uiRepositoryRecord.ageSuitability || uiRepositoryRecord.ageSuitability === 0) {
            ageSuitability = uiRepositoryRecord.ageSuitability;
        }
        return {
            actor: {
                id: uiRepositoryRecord.actorId,
            },
            actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability,
            repository: {
                id: uiRepositoryRecord.repositoryId,
            }
        };
    }
}
DI.set(REPOSITORY_RECORD_CONVERTER, RepositoryRecordConverter);
//# sourceMappingURL=RepositoryRecordConverter.js.map