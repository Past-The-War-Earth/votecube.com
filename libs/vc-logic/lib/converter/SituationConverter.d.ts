import { ISituation } from '@votecube/votecube';
import { IUiSituation } from '@votecube/model';
import { RepositoryRecordConverter } from '@votecube/ui-logic';
export interface ISituationConverter {
    dbToUi(dbSituation: ISituation): IUiSituation;
    uiToDb(uiSituation: IUiSituation, dbSituation: ISituation): ISituation;
}
export declare class SituationConverter extends RepositoryRecordConverter implements ISituationConverter {
    dbToUi(dbSituation: ISituation): IUiSituation;
    uiToDb(uiSituation: IUiSituation, dbSituation: ISituation): ISituation;
    private getUiLabel;
    private getUiFactor;
    private getUiPosition;
    private getUiOutcome;
    private getUiLabels;
    private labelsToDb;
    private outcomeToDb;
    private situationFactorPositionToDb;
    private factorToDb;
    private positionToDb;
}
//# sourceMappingURL=SituationConverter.d.ts.map