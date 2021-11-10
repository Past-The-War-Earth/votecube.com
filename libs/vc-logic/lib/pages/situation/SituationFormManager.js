import { DI } from '@airport/di';
import { SITUATION_FORM_MANAGER } from '../../tokens';
export class SituationFormManager {
    fromForm(formSituation, uiSituation) {
        if (!uiSituation) {
            uiSituation = Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { ageGroups: [], labels: [], factors: {
                    1: this.getBlankUiFactor('x'),
                    2: this.getBlankUiFactor('y'),
                    3: this.getBlankUiFactor('z'),
                }, outcomes: {
                    A: this.getBlankUiNamedRecord(),
                    B: this.getBlankUiNamedRecord()
                }, parent: null });
        }
        uiSituation.name = formSituation.name;
        this.transferFactorWithPositions(formSituation.factors[1], uiSituation.factors[1]);
        this.transferFactorWithPositions(formSituation.factors[2], uiSituation.factors[2]);
        this.transferFactorWithPositions(formSituation.factors[3], uiSituation.factors[3]);
        this.transferNameAndId(formSituation.ageGroup, uiSituation.ageGroup);
        uiSituation.ageGroups = this.formLabelsToUi(formSituation.labels);
        uiSituation.labels = this.formLabelsToUi(formSituation.labels);
        this.transferNameAndId(formSituation.outcomes.A, uiSituation.outcomes.A);
        this.transferNameAndId(formSituation.outcomes.B, uiSituation.outcomes.B);
        return uiSituation;
    }
    transferFactorWithPositions(formFactor, uiFactor) {
        this.transferNameAndId(formFactor.name, uiFactor);
        uiFactor.color = {
            blue: parseInt(formFactor.color.blue),
            green: parseInt(formFactor.color.green),
            red: parseInt(formFactor.color.red),
        };
        const uiPositionA = uiFactor.positions.A;
        this.transferNameAndId(formFactor.positions.A, uiPositionA);
        const uiPositionB = uiFactor.positions.B;
        this.transferNameAndId(formFactor.positions.B, uiPositionB);
    }
    transferNameAndId(formField, uiNamedRecord) {
        this.transferId(formField, uiNamedRecord);
        uiNamedRecord.name = formField.text;
    }
    transferId(formField, uiRepositoryRecord) {
        if (!formField.id) {
            uiRepositoryRecord.actorId = null;
            uiRepositoryRecord.actorRecordId = null;
            uiRepositoryRecord.ageSuitability = null;
            uiRepositoryRecord.repositoryId = null;
            // uiRepositoryRecord.repositoryUuId = 'unsolved'
        }
        else {
            uiRepositoryRecord.actorId = formField.id.actorId;
            uiRepositoryRecord.actorRecordId = formField.id.actorRecordId;
            uiRepositoryRecord.ageSuitability = formField.id.ageSuitability;
            uiRepositoryRecord.repositoryId = formField.id.repositoryId;
            // uiRepositoryRecord.repositoryUuId = formField.id.repositoryUuId
        }
    }
    getBlankUiFactor(axis) {
        return Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { axis, color: {
                blue: 0,
                green: 0,
                red: 0
            }, positions: {
                A: Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { dir: 1 }),
                B: Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { dir: -1 })
            } });
    }
    formLabelsToUi(labels) {
        return labels.map(formLabel => {
            const uiLabel = this.getBlankUiLabel();
            this.transferNameAndId(formLabel, uiLabel);
            return uiLabel;
        });
    }
    getBlankUiLabel() {
        return Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { situationLabel: this.getBlankUiRepositoryRecord() });
    }
    getBlankUiRepositoryRecord() {
        return {
            actorId: null,
            actorRecordId: null,
            ageSuitability: null,
            repositoryId: null,
        };
    }
    getBlankUiNamedRecord() {
        return Object.assign(Object.assign({}, this.getBlankUiRepositoryRecord()), { name: null });
    }
    toForm(uiSituation) {
        const uiOutcomeA = uiSituation.outcomes.A;
        const uiOutcomeB = uiSituation.outcomes.B;
        const ageGroups = uiSituation.ageGroups.map(uiLabel => this.getFormField(uiLabel));
        const labels = uiSituation.labels.map(uiLabel => this.getFormField(uiLabel));
        return {
            ageGroups,
            factors: {
                1: this.uiToFormFactor(uiSituation.factors[1]),
                2: this.uiToFormFactor(uiSituation.factors[2]),
                3: this.uiToFormFactor(uiSituation.factors[3])
            },
            labels,
            name: uiSituation.name,
            outcomes: {
                A: this.getFormField(uiOutcomeA),
                B: this.getFormField(uiOutcomeB),
            },
        };
    }
    getFormField(uiRepositoryRecord) {
        return {
            id: this.copyId(uiRepositoryRecord),
            text: uiRepositoryRecord.name
        };
    }
    copyId(uiRepositoryRecord) {
        return {
            actorId: uiRepositoryRecord.actorId,
            actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability: uiRepositoryRecord.ageSuitability,
            repositoryId: uiRepositoryRecord.repositoryId,
        };
    }
    uiToFormFactor(factorData) {
        return {
            color: factorData.color,
            name: this.getFormField(factorData),
            positions: {
                A: this.getFormField(factorData.positions.A),
                B: this.getFormField(factorData.positions.B)
            }
        };
    }
}
DI.set(SITUATION_FORM_MANAGER, SituationFormManager);
//# sourceMappingURL=SituationFormManager.js.map