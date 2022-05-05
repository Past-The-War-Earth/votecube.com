import { container, DI } from "@airport/direction-indicator";
import { REPOSITORY_RECORD_CONVERTER } from '@votecube/ui-logic';
import { AGREEMENT_CONVERTER } from "../tokens";
export class AgreementConverter {
    dbToUi(dbAgreement) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        let agreementFactor1;
        let agreementFactor2;
        let agreementFactor3;
        for (const dbAgreementFactor of dbAgreement.factors) {
            switch (dbAgreementFactor.axis) {
                case 'x':
                    agreementFactor1 = dbAgreementFactor;
                    break;
                case 'y':
                    agreementFactor2 = dbAgreementFactor;
                    break;
                case 'z':
                    agreementFactor3 = dbAgreementFactor;
                    break;
            }
        }
        return Object.assign(Object.assign({}, repositoryRecordConverter.dbToUi(dbAgreement)), { "1": this.agreementFactorDbToUi(agreementFactor1), "2": this.agreementFactorDbToUi(agreementFactor2), "3": this.agreementFactorDbToUi(agreementFactor3) });
    }
    agreementFactorDbToUi(dbAgreementFactor) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        return Object.assign(Object.assign({}, repositoryRecordConverter.dbToUi(dbAgreementFactor)), { factorNumber: this.getFactorNumber(dbAgreementFactor.axis), outcome: dbAgreementFactor.ideaFactorPosition.outcomeOrdinal, value: dbAgreementFactor.share });
    }
    getFactorNumber(axis) {
        switch (axis) {
            case 'x':
                return 1;
            case 'y':
                return 2;
            case 'z':
                return 3;
            default:
                throw new Error(`Unsupported axis value: ${axis}`);
        }
    }
    uiToDb(uiAgreement, ageSuitability = 0, idea) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        let factors = [];
        const dbAgreement = {
            idea,
            factors
        };
        repositoryRecordConverter.uiToDb(uiAgreement, dbAgreement, ageSuitability);
        for (const ideaFactorPosition of idea.ideaFactorPositions) {
            const uiAgreementFactor = uiAgreement[this.getFactorNumber(ideaFactorPosition.axis)];
            factors.push(this.agreementFactorUiToDb(uiAgreementFactor, ageSuitability, dbAgreement, ideaFactorPosition));
        }
        return dbAgreement;
    }
    agreementFactorUiToDb(uiAgreementFactor, ageSuitability = 0, agreement, ideaFactorPosition) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        const dbAgreementFactor = {
            agreement,
            ideaFactorPosition
        };
        repositoryRecordConverter.uiToDb(uiAgreementFactor, dbAgreementFactor, ageSuitability);
        return dbAgreementFactor;
    }
}
DI.set(AGREEMENT_CONVERTER, AgreementConverter);
//# sourceMappingURL=AgreementConverter.js.map