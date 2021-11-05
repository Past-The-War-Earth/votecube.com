import { DeepPartial } from '@airport/pressurization';
import { Situation } from '@votecube/votecube';
import { IUiSituation } from '@votecube/model';
export interface ISituationConverter {
    dbToUi(dbSituation: DeepPartial<Situation>): IUiSituation;
    uiToDb(uiSituation: IUiSituation): DeepPartial<Situation>;
}
export declare class SituationConverter implements ISituationConverter {
    dbToUi(dbSituation: DeepPartial<Situation>): IUiSituation;
    uiToDb(uiSituation: IUiSituation): DeepPartial<Situation>;
    private getUiFactor;
    private getUiPosition;
    private getUiOutcome;
    private getUiCategory;
    private getDbOutcome;
    private getDbSituationFactorPosition;
    private getDbFactor;
    private getDbPosition;
}
//# sourceMappingURL=SituationConveter.d.ts.map