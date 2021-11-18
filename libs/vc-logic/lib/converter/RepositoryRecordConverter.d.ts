import { IUiRepositoryRecord } from "@votecube/model";
import type { IRepositoryEntity } from "@airport/holding-pattern";
export interface IToDbConversionContext {
    actorsById: Map<number, {
        id: number;
    }>;
    repositoriesById: Map<number, {
        id: number;
    }>;
}
export declare function getToDbConversionContext(): IToDbConversionContext;
export interface IRepositoryRecordConverter {
    dbToUi(dbRepositoryEntity: IRepositoryEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, context?: IToDbConversionContext, ageSuitability?: 0 | 7 | 13 | 18): IRepositoryEntity;
}
export declare class RepositoryRecordConverter implements IRepositoryRecordConverter {
    dbToUi(dbRepositoryEntity: IRepositoryEntity): IUiRepositoryRecord;
    uiToDb(uiRepositoryRecord: IUiRepositoryRecord, context: IToDbConversionContext, ageSuitability?: 0 | 7 | 13 | 18): IRepositoryEntity;
}
//# sourceMappingURL=RepositoryRecordConverter.d.ts.map