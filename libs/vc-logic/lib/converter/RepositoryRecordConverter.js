import { DI } from "@airport/di";
import { REPOSITORY_RECORD_CONVERTER } from "../tokens";
export function getToDbConversionContext() {
    return {
        actorsById: new Map(),
        repositoriesById: new Map()
    };
}
export class RepositoryRecordConverter {
    dbToUi(dbRepositoryEntity) {
        if (!dbRepositoryEntity) {
            return null;
        }
        return {
            actorId: dbRepositoryEntity.actor.id,
            // actorUuId: dbRepositoryEntity.actor.uuId,
            actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability,
            repositoryId: dbRepositoryEntity.repository.id,
        };
    }
    uiToDb(uiRepositoryRecord, context, ageSuitability = null) {
        if (!uiRepositoryRecord) {
            return {
                actor: {
                    id: null,
                },
                actorRecordId: null,
                ageSuitability,
                repository: {
                    id: null,
                }
            };
        }
        if (uiRepositoryRecord.ageSuitability || uiRepositoryRecord.ageSuitability === 0) {
            ageSuitability = uiRepositoryRecord.ageSuitability;
        }
        let actor = null;
        if (uiRepositoryRecord.actorId) {
            actor = context.actorsById.get(uiRepositoryRecord.actorId);
            if (!actor) {
                actor = {
                    id: uiRepositoryRecord.actorId,
                };
                context.actorsById.set(uiRepositoryRecord.actorId, actor);
            }
        }
        let repository = null;
        if (uiRepositoryRecord.repositoryId) {
            repository = context.repositoriesById.get(uiRepositoryRecord.repositoryId);
            if (!repository) {
                repository = {
                    id: uiRepositoryRecord.repositoryId,
                };
                context.repositoriesById.set(uiRepositoryRecord.repositoryId, repository);
            }
        }
        return {
            actor,
            actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability,
            repository
        };
    }
}
DI.set(REPOSITORY_RECORD_CONVERTER, RepositoryRecordConverter);
//# sourceMappingURL=RepositoryRecordConverter.js.map