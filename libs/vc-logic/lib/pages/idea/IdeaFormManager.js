import { DI } from '@airport/di';
import { IDEA_FORM_MANAGER } from '../../tokens';
export class IdeaFormManager {
    fromForm(formIdea, uiIdea) {
        if (!uiIdea) {
            uiIdea = Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { ageGroups: [], labels: [], factors: {
                    1: this.getBlankUiFactor('x'),
                    2: this.getBlankUiFactor('y'),
                    3: this.getBlankUiFactor('z'),
                }, outcomes: {
                    A: this.getBlankUiNamedRecord(),
                    B: this.getBlankUiNamedRecord()
                }, repository: {
                    source: null,
                    uuId: null
                } });
        }
        uiIdea.name = formIdea.name;
        this.transferFactorWithPositions(formIdea.factors[1], uiIdea.factors[1]);
        this.transferFactorWithPositions(formIdea.factors[2], uiIdea.factors[2]);
        this.transferFactorWithPositions(formIdea.factors[3], uiIdea.factors[3]);
        uiIdea.ageGroups = this.formLabelsToUi(formIdea.ageGroups);
        uiIdea.labels = this.formLabelsToUi(formIdea.labels);
        this.transferNameAndId(formIdea.outcomes.A, uiIdea.outcomes.A);
        this.transferNameAndId(formIdea.outcomes.B, uiIdea.outcomes.B);
        return uiIdea;
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
            // uiRepositoryRecord.actorId = null
            // uiRepositoryRecord.actorRecordId = null
            uiRepositoryRecord.ageSuitability = null;
            // uiRepositoryRecord.repositoryId = null
            // uiRepositoryRecord.repositoryUuId = 'unsolved'
        }
        else {
            // uiRepositoryRecord.actorId = formField.id.actorId
            // uiRepositoryRecord.actorRecordId = formField.id.actorRecordId
            uiRepositoryRecord.ageSuitability = formField.id.ageSuitability;
            // uiRepositoryRecord.repositoryId = formField.id.repositoryId
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
        return Object.assign(Object.assign({}, this.getBlankUiNamedRecord()), { originalDbLabel: null });
    }
    getBlankUiRepositoryRecord() {
        return {
            // actorId: null,
            // actorRecordId: null,
            ageSuitability: 0,
            // repositoryId: null,
            // repositoryUuId: '',
        };
    }
    getBlankUiNamedRecord() {
        return Object.assign(Object.assign({}, this.getBlankUiRepositoryRecord()), { name: null });
    }
    toForm(uiIdea) {
        const uiOutcomeA = uiIdea.outcomes.A;
        const uiOutcomeB = uiIdea.outcomes.B;
        const ageGroups = uiIdea.ageGroups.map(uiLabel => this.getFormField(uiLabel));
        const labels = uiIdea.labels.map(uiLabel => this.getFormField(uiLabel));
        return {
            ageGroups,
            factors: {
                1: this.uiToFormFactor(uiIdea.factors[1]),
                2: this.uiToFormFactor(uiIdea.factors[2]),
                3: this.uiToFormFactor(uiIdea.factors[3])
            },
            labels,
            name: uiIdea.name,
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
            // actorId: uiRepositoryRecord.actorId,
            // actorRecordId: uiRepositoryRecord.actorRecordId,
            ageSuitability: uiRepositoryRecord.ageSuitability,
            // repositoryId: uiRepositoryRecord.repositoryId,
            // repositoryUuId: uiRepositoryRecord.repositoryUuId
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
DI.set(IDEA_FORM_MANAGER, IdeaFormManager);
//# sourceMappingURL=IdeaFormManager.js.map