import { ISituation } from '@votecube/votecube';
import { IUiSituation } from '@votecube/model';
import { RepositoryRecordConverter } from './RepositoryRecordConverter';
export interface ISituationConverter {
    dbToUi(dbSituation: ISituation): IUiSituation;
    uiToDb(uiSituation: IUiSituation): ISituation;
}
export declare class SituationConverter extends RepositoryRecordConverter implements ISituationConverter {
    dbToUi(dbSituation: ISituation): IUiSituation;
    uiToDb(uiSituation: IUiSituation): ISituation;
    private getUiLabel;
    private getUiFactor;
    private getUiPosition;
    private getUiOutcome;
    private getUiLabels;
    private getDbLabels;
    private getDbOutcome;
    private getDbSituationFactorPosition;
    private getDbFactor;
    private getDbPosition;
}
//# sourceMappingURL=SituationConverter.d.ts.map