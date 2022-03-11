import { container, DI } from '@airport/di';
import { AGE_GROUPS, } from '@votecube/model';
import { RepositoryRecordConverter } from '@votecube/ui-logic';
import { IDEA_CONVERTER, IDEA_FORM_MANAGER } from '../tokens';
export class IdeaConverter extends RepositoryRecordConverter {
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
                '1': this.getUiFactor(1, dbIdea.ideaFactorPositions),
                '2': this.getUiFactor(2, dbIdea.ideaFactorPositions),
                '3': this.getUiFactor(3, dbIdea.ideaFactorPositions)
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
        const factor1 = this.ideaFactorPositionToDb(uiIdea, dbIdea, 1, 'A');
        this.ideaFactorPositionToDb(uiIdea, dbIdea, 1, 'B', factor1);
        const factor2 = this.ideaFactorPositionToDb(uiIdea, dbIdea, 2, 'A');
        this.ideaFactorPositionToDb(uiIdea, dbIdea, 2, 'B', factor2);
        const factor3 = this.ideaFactorPositionToDb(uiIdea, dbIdea, 3, 'A');
        this.ideaFactorPositionToDb(uiIdea, dbIdea, 3, 'B', factor3);
        dbIdea.name = uiIdea.name;
        this.labelsToDb(uiIdea, dbIdea, uiIdea.ageGroups);
        this.labelsToDb(uiIdea, dbIdea, uiIdea.labels);
        return dbIdea;
    }
    getUiLabel(ideaLabel) {
        if (!ideaLabel) {
            const ideaFormManager = container(this).getSync(IDEA_FORM_MANAGER);
            return Object.assign(Object.assign({}, ideaFormManager.getBlankUiNamedRecord()), { originalDbLabel: ideaLabel });
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
    getUiPosition(dbIdeaFactorPosition) {
        const position = dbIdeaFactorPosition.position;
        return Object.assign(Object.assign({}, super.dbToUi(position)), { dir: dbIdeaFactorPosition.dir, name: position.name });
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
    ideaFactorPositionToDb(uiIdea, dbIdea, factorNumber, outcomeOrdinal, dbFactor) {
        let existingFactor = !!dbFactor;
        const uiFactor = uiIdea.factors[factorNumber];
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        if (!dbIdea.ideaFactorPositions) {
            dbIdea.ideaFactorPositions = [];
        }
        const matchingIdeaFactorPositions = dbIdea.
            ideaFactorPositions.filter(ideaFactorPosition => ideaFactorPosition.factorNumber === factorNumber
            && ideaFactorPosition.outcomeOrdinal === outcomeOrdinal);
        let dbPosition;
        let dbIdeaFactorPosition;
        if (matchingIdeaFactorPositions.length) {
            dbIdeaFactorPosition = matchingIdeaFactorPositions[0];
            dbFactor = dbIdeaFactorPosition.factor;
            dbPosition = dbIdeaFactorPosition.position;
        }
        else {
            dbIdeaFactorPosition = {};
            if (!existingFactor) {
                dbFactor = {};
            }
            dbPosition = {};
            dbIdeaFactorPosition.factor = dbFactor;
            dbIdeaFactorPosition.position = dbPosition;
            dbIdea.ideaFactorPositions
                .push(dbIdeaFactorPosition);
        }
        if (!existingFactor) {
            this.factorToDb(uiFactor, dbFactor, uiIdea.ageSuitability);
        }
        this.positionToDb(uiPosition, dbPosition, uiIdea.ageSuitability);
        super.uiToDb({}, dbIdeaFactorPosition, uiIdea.ageSuitability);
        dbIdeaFactorPosition.axis = uiFactor.axis;
        dbIdeaFactorPosition.blue = uiFactor.color.blue;
        dbIdeaFactorPosition.dir = uiPosition.dir;
        dbIdeaFactorPosition.factorNumber = factorNumber;
        dbIdeaFactorPosition.green = uiFactor.color.green;
        dbIdeaFactorPosition.outcomeOrdinal = outcomeOrdinal;
        dbIdeaFactorPosition.red = uiFactor.color.red;
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
}
DI.set(IDEA_CONVERTER, IdeaConverter);
//# sourceMappingURL=IdeaConverter.js.map