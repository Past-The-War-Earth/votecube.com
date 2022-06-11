import { IUiRepositoryRecord } from "@votecube/model";
import type { IAirEntity } from "@airport/holding-pattern";
export interface IRepositoryRecordConverter {
    dbToUi(dbAirEntity: IAirEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, dbAirEntity: IAirEntity, ageSuitability?: 0 | 7 | 13 | 18): void;
}
export declare class RepositoryRecordConverter implements IRepositoryRecordConverter {
    dbToUi(dbAirEntity: IAirEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, dbAirEntity: IAirEntity, ageSuitability?: 0 | 7 | 13 | 18): void;
}
//# sourceMappingURL=RepositoryRecordConverter.d.ts.map