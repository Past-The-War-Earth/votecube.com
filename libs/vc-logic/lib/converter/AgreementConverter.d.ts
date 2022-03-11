import { IUiAgreement } from "@votecube/model";
import { IIdea, IAgreement } from "@votecube/votecube";
export interface IAgreementConverter {
    dbToUi(dbAgreement: IAgreement): IUiAgreement;
    uiToDb(uiAgreement: IUiAgreement, ageSuitability: 0 | 7 | 13 | 18, idea: IIdea): IAgreement;
}
export declare class AgreementConverter implements IAgreementConverter {
    dbToUi(dbAgreement: IAgreement): IUiAgreement;
    private agreementFactorDbToUi;
    private getFactorNumber;
    uiToDb(uiAgreement: IUiAgreement, ageSuitability: 0 | 7 | 13 | 18, idea: IIdea): IAgreement;
    private agreementFactorUiToDb;
}
//# sourceMappingURL=AgreementConverter.d.ts.map