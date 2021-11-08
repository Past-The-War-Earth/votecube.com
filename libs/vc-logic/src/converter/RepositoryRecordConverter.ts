import { IUiRepositoryRecord } from "@votecube/model";
import type { RepositoryEntity } from "@airport/holding-pattern";
import { DeepPartial } from "@airport/pressurization";

export class RepositoryRecordConverter {

    dbToUi(
        dbRepositoryEntity: DeepPartial<RepositoryEntity>
    ): IUiRepositoryRecord {
        return {
            actorId: dbRepositoryEntity.actor.id,
            actorUuId: dbRepositoryEntity.actor.uuId,
            actorRecordId: dbRepositoryEntity.actorRecordId,
            ageSuitability: dbRepositoryEntity.ageSuitability as 0 | 7 | 13 | 18,
            repositoryId: dbRepositoryEntity.repository.id,
            repositoryUuId: dbRepositoryEntity.repository.uuId,
        }
    }

    uiToDb(
        uiRepositoryRecord: IUiRepositoryRecord,
        ageSuitability: 0 | 7 | 13 | 18 = null
    ): DeepPartial<DeepPartial<RepositoryEntity>> {
        if (uiRepositoryRecord.ageSuitability || uiRepositoryRecord.ageSuitability === 0) {
			ageSuitability = uiRepositoryRecord.ageSuitability
		}
        return {
            actor: {
                id: uiRepositoryRecord.actorId,
                uuId: uiRepositoryRecord.actorUuId
            },
            actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability,
            repository: {
                id: uiRepositoryRecord.repositoryId,
                uuId: uiRepositoryRecord.repositoryUuId
            }
        }
    }

}
