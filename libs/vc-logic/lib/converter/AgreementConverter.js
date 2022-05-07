export class AgreementConverter {
    dbToUi(dbAgreement) {
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
        return Object.assign(Object.assign({}, this.repositoryRecordConverter.dbToUi(dbAgreement)), { "1": this.agreementFactorDbToUi(agreementFactor1), "2": this.agreementFactorDbToUi(agreementFactor2), "3": this.agreementFactorDbToUi(agreementFactor3) });
    }
    agreementFactorDbToUi(dbAgreementFactor) {
        return Object.assign(Object.assign({}, this.repositoryRecordConverter.dbToUi(dbAgreementFactor)), { factorNumber: this.getFactorNumber(dbAgreementFactor.axis), outcome: dbAgreementFactor.reason.outcomeOrdinal, value: dbAgreementFactor.share });
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
        let factors = [];
        const dbAgreement = {
            idea,
            factors
        };
        this.repositoryRecordConverter.uiToDb(uiAgreement, dbAgreement, ageSuitability);
        for (const reason of idea.reasons) {
            const uiAgreementFactor = uiAgreement[this.getFactorNumber(reason.axis)];
            factors.push(this.agreementFactorUiToDb(uiAgreementFactor, ageSuitability, dbAgreement, reason));
        }
        return dbAgreement;
    }
    agreementFactorUiToDb(uiAgreementFactor, ageSuitability = 0, agreement, reason) {
        const dbAgreementFactor = {
            agreement,
            reason
        };
        this.repositoryRecordConverter.uiToDb(uiAgreementFactor, dbAgreementFactor, ageSuitability);
        return dbAgreementFactor;
    }
}
//# sourceMappingURL=AgreementConverter.js.map