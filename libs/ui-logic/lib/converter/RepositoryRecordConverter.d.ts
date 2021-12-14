import { IUiRepositoryRecord } from "@votecube/model";
import type { IRepositoryEntity } from "@airport/holding-pattern";
export interface IRepositoryRecordConverter {
    dbToUi(dbRepositoryEntity: IRepositoryEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, dbRepositoryEntity: IRepositoryEntity, ageSuitability?: 0 | 7 | 13 | 18): void;
}
export declare class RepositoryRecordConverter implements IRepositoryRecordConverter {
    dbToUi(dbRepositoryEntity: IRepositoryEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, dbRepositoryEntity: IRepositoryEntity, ageSuitability?: 0 | 7 | 13 | 18): void;
}
//# sourceMappingURL=RepositoryRecordConverter.d.ts.map