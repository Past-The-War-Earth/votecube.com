var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AGE_GROUPS, } from '@votecube/model';
import { RepositoryRecordConverter } from '@votecube/ui-logic';
import { Injected } from '@airport/direction-indicator';
let IdeaConverter = class IdeaConverter extends RepositoryRecordConverter {
    dbToUi(dbIdea) {
        let ageGroups = [];
        let labels = [];
        if (dbIdea.ideaLabels) {
            ageGroups = dbIdea.ideaLabels.filter(ideaLabel => AGE_GROUPS.includes(ideaLabel.label.name))
                .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
            labels = dbIdea.ideaLabels.filter(ideaLabel => !AGE_GROUPS.includes(ideaLabel.label.name))
                .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
        }
        return Object.assign(Object.assign({}, super.dbToUi(dbIdea)), { ageGroups, factors: {
                '1': this.getUiFactor(1, dbIdea.reasons),
                '2': this.getUiFactor(2, dbIdea.reasons),
                '3': this.getUiFactor(3, dbIdea.reasons)
            }, labels, name: dbIdea.name, outcomes: {
                A: this.getUiOutcome(dbIdea.outcomeA),
                B: this.getUiOutcome(dbIdea.outcomeB)
            }, repository: {
                source: dbIdea.repository.source,
                uuId: dbIdea.repository.uuId
            } });
    }
    uiToDb(uiIdea, dbIdea) {
        if (!dbIdea) {
            dbIdea = {};
        }
        super.uiToDb(uiIdea, dbIdea, uiIdea.ageSuitability);
        if (!dbIdea.outcomeA) {
            dbIdea.outcomeA = {};
        }
        this.outcomeToDb(uiIdea.outcomes.A, dbIdea.outcomeA, uiIdea.ageSuitability);
        if (!dbIdea.outcomeB) {
            dbIdea.outcomeB = {};
        }
        this.outcomeToDb(uiIdea.outcomes.B, dbIdea.outcomeB, uiIdea.ageSuitability);
        const factor1 = this.reasonToDb(uiIdea, dbIdea, 1, 'A');
        this.reasonToDb(uiIdea, dbIdea, 1, 'B', factor1);
        const factor2 = this.reasonToDb(uiIdea, dbIdea, 2, 'A');
        this.reasonToDb(uiIdea, dbIdea, 2, 'B', factor2);
        const factor3 = this.reasonToDb(uiIdea, dbIdea, 3, 'A');
        this.reasonToDb(uiIdea, dbIdea, 3, 'B', factor3);
        dbIdea.name = uiIdea.name;
        this.labelsToDb(uiIdea, dbIdea, uiIdea.ageGroups);
        this.labelsToDb(uiIdea, dbIdea, uiIdea.labels);
        return dbIdea;
    }
    getUiLabel(ideaLabel) {
        if (!ideaLabel) {
            return Object.assign(Object.assign({}, this.ideaFormManager.getBlankUiNamedRecord()), { originalDbLabel: ideaLabel });
        }
        const label = ideaLabel.label;
        return Object.assign(Object.assign({}, super.dbToUi(label)), { name: label.name, originalDbLabel: ideaLabel });
    }
    getUiFactor(factorNumber, factorPositions) {
        const matchingFactorPositions = factorPositions.filter(factorPosition => factorPosition.factorNumber === factorNumber);
        let dbFactorPositionA;
        let dbFactorPositionB;
        if (matchingFactorPositions[0].outcomeOrdinal === 'A') {
            dbFactorPositionA = matchingFactorPositions[0];
            dbFactorPositionB = matchingFactorPositions[1];
        }
        else {
            dbFactorPositionA = matchingFactorPositions[1];
            dbFactorPositionB = matchingFactorPositions[0];
        }
        const dbFactor = dbFactorPositionA.factor;
        return Object.assign(Object.assign({}, super.dbToUi(dbFactor)), { axis: dbFactorPositionA.axis, color: {
                blue: dbFactorPositionA.blue,
                green: dbFactorPositionA.green,
                red: dbFactorPositionA.red,
            }, name: dbFactor.name, positions: {
                A: this.getUiPosition(dbFactorPositionA),
                B: this.getUiPosition(dbFactorPositionB),
            } });
    }
    getUiPosition(dbReason) {
        const position = dbReason.position;
        return Object.assign(Object.assign({}, super.dbToUi(position)), { dir: dbReason.dir, name: position.name });
    }
    getUiOutcome(outcome) {
        return Object.assign(Object.assign({}, super.dbToUi(outcome)), { name: outcome.name });
    }
    getUiLabels(ideaLabels) {
        if (!ideaLabels) {
            return [];
        }
        return ideaLabels.map(ideaLabel => this.getUiLabel(ideaLabel));
    }
    labelsToDb(uiIdea, dbIdea, uiLabels) {
        let dbLabels = dbIdea.ideaLabels;
        if (!dbLabels) {
            dbLabels = [];
            dbIdea.ideaLabels = dbLabels;
        }
        for (const uiLabel of uiLabels) {
            const matchingDbLabels = dbLabels.filter(dbLabel => dbLabel.label.name === uiLabel.name);
            let dbLabel;
            if (matchingDbLabels.length) {
                dbLabel = matchingDbLabels[0];
            }
            else {
                dbLabel = {
                    label: uiLabel.originalDbLabel
                };
            }
            super.uiToDb(uiLabel, dbLabel, uiIdea.ageSuitability);
            dbLabel.label = uiLabel.originalDbLabel;
            dbLabels.push(dbLabel);
        }
    }
    outcomeToDb(uiOutcome, outcome, ageSuitability) {
        super.uiToDb(uiOutcome, outcome, ageSuitability);
        outcome.name = uiOutcome.name;
    }
    reasonToDb(uiIdea, dbIdea, factorNumber, outcomeOrdinal, dbFactor) {
        let existingFactor = !!dbFactor;
        const uiFactor = uiIdea.factors[factorNumber];
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        if (!dbIdea.reasons) {
            dbIdea.reasons = [];
        }
        const matchingReasons = dbIdea.
            reasons.filter(reason => reason.factorNumber === factorNumber
            && reason.outcomeOrdinal === outcomeOrdinal);
        let dbPosition;
        let dbReason;
        if (matchingReasons.length) {
            dbReason = matchingReasons[0];
            dbFactor = dbReason.factor;
            dbPosition = dbReason.position;
        }
        else {
            dbReason = {};
            if (!existingFactor) {
                dbFactor = {};
            }
            dbPosition = {};
            dbReason.factor = dbFactor;
            dbReason.position = dbPosition;
            dbIdea.reasons
                .push(dbReason);
        }
        if (!existingFactor) {
            this.factorToDb(uiFactor, dbFactor, uiIdea.ageSuitability);
        }
        this.positionToDb(uiPosition, dbPosition, uiIdea.ageSuitability);
        super.uiToDb({}, dbReason, uiIdea.ageSuitability);
        dbReason.axis = uiFactor.axis;
        dbReason.blue = uiFactor.color.blue;
        dbReason.dir = uiPosition.dir;
        dbReason.factorNumber = factorNumber;
        dbReason.green = uiFactor.color.green;
        dbReason.outcomeOrdinal = outcomeOrdinal;
        dbReason.red = uiFactor.color.red;
        return dbFactor;
    }
    factorToDb(uiFactor, dbFactor, ageSuitability) {
        super.uiToDb(uiFactor, dbFactor, ageSuitability);
        dbFactor.name = uiFactor.name;
    }
    positionToDb(uiPosition, dbPosition, ageSuitability) {
        super.uiToDb(uiPosition, dbPosition, ageSuitability);
        dbPosition.name = uiPosition.name;
    }
};
IdeaConverter = __decorate([
    Injected()
], IdeaConverter);
export { IdeaConverter };
//# sourceMappingURL=IdeaConverter.js.map