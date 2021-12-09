import { container, DI } from '@airport/di';
import { AGE_GROUPS, } from '@votecube/model';
import { SITUATION_CONVERTER, SITUATION_FORM_MANAGER } from '../tokens';
import { RepositoryRecordConverter } from './RepositoryRecordConverter';
export class SituationConverter extends RepositoryRecordConverter {
    dbToUi(dbSituation) {
        let ageGroups = [];
        let labels = [];
        if (dbSituation.situationLabels) {
            ageGroups = dbSituation.situationLabels.filter(situationLabel => AGE_GROUPS.includes(situationLabel.label.name))
                .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
            labels = dbSituation.situationLabels.filter(situationLabel => !AGE_GROUPS.includes(situationLabel.label.name))
                .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
        }
        return Object.assign(Object.assign({}, super.dbToUi(dbSituation)), { ageGroups, factors: {
                '1': this.getUiFactor(1, dbSituation.situationFactorPositions),
                '2': this.getUiFactor(2, dbSituation.situationFactorPositions),
                '3': this.getUiFactor(3, dbSituation.situationFactorPositions)
            }, labels, name: dbSituation.name, outcomes: {
                A: this.getUiOutcome(dbSituation.outcomeA),
                B: this.getUiOutcome(dbSituation.outcomeB)
            }, repository: {
                source: dbSituation.repository.source,
                uuId: dbSituation.repository.uuId
            } });
    }
    uiToDb(uiSituation, dbSituation) {
        if (!dbSituation) {
            dbSituation = {};
        }
        super.uiToDb(uiSituation, dbSituation, uiSituation.ageSuitability);
        if (!dbSituation.outcomeA) {
            dbSituation.outcomeA = {};
        }
        this.outcomeToDb(uiSituation.outcomes.A, dbSituation.outcomeA, uiSituation.ageSuitability);
        if (!dbSituation.outcomeB) {
            dbSituation.outcomeB = {};
        }
        this.outcomeToDb(uiSituation.outcomes.B, dbSituation.outcomeB, uiSituation.ageSuitability);
        const factor1 = this.situationFactorPositionToDb(uiSituation, dbSituation, 1, 'A');
        this.situationFactorPositionToDb(uiSituation, dbSituation, 1, 'B', factor1);
        const factor2 = this.situationFactorPositionToDb(uiSituation, dbSituation, 2, 'A');
        this.situationFactorPositionToDb(uiSituation, dbSituation, 2, 'B', factor2);
        const factor3 = this.situationFactorPositionToDb(uiSituation, dbSituation, 3, 'A');
        this.situationFactorPositionToDb(uiSituation, dbSituation, 3, 'B', factor3);
        dbSituation.name = uiSituation.name;
        this.labelsToDb(uiSituation, dbSituation, uiSituation.ageGroups);
        this.labelsToDb(uiSituation, dbSituation, uiSituation.labels);
        return dbSituation;
    }
    getUiLabel(situationLabel) {
        if (!situationLabel) {
            const situationFormManager = container(this).getSync(SITUATION_FORM_MANAGER);
            return Object.assign(Object.assign({}, situationFormManager.getBlankUiNamedRecord()), { originalDbLabel: situationLabel });
        }
        const label = situationLabel.label;
        return Object.assign(Object.assign({}, super.dbToUi(label)), { name: label.name, originalDbLabel: situationLabel });
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
    getUiPosition(dbSituationFactorPosition) {
        const position = dbSituationFactorPosition.position;
        return Object.assign(Object.assign({}, super.dbToUi(position)), { dir: dbSituationFactorPosition.dir, name: position.name });
    }
    getUiOutcome(outcome) {
        return Object.assign(Object.assign({}, super.dbToUi(outcome)), { name: outcome.name });
    }
    getUiLabels(situationLabels) {
        if (!situationLabels) {
            return [];
        }
        return situationLabels.map(situationLabel => this.getUiLabel(situationLabel));
    }
    labelsToDb(uiSituation, dbSituation, uiLabels) {
        let dbLabels = dbSituation.situationLabels;
        if (!dbLabels) {
            dbLabels = [];
            dbSituation.situationLabels = dbLabels;
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
            super.uiToDb(uiLabel, dbLabel, uiSituation.ageSuitability);
            dbLabel.label = uiLabel.originalDbLabel;
            dbLabels.push(dbLabel);
        }
    }
    outcomeToDb(uiOutcome, outcome, ageSuitability) {
        super.uiToDb(uiOutcome, outcome, ageSuitability);
        outcome.name = uiOutcome.name;
    }
    situationFactorPositionToDb(uiSituation, dbSituation, factorNumber, outcomeOrdinal, dbFactor) {
        let existingFactor = !!dbFactor;
        const uiFactor = uiSituation.factors[factorNumber];
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        if (!dbSituation.situationFactorPositions) {
            dbSituation.situationFactorPositions = [];
        }
        const matchingSituationFactorPositions = dbSituation.
            situationFactorPositions.filter(situationFactorPosition => situationFactorPosition.factorNumber === factorNumber
            && situationFactorPosition.outcomeOrdinal === outcomeOrdinal);
        let dbPosition;
        let dbSituationFactorPosition;
        if (matchingSituationFactorPositions.length) {
            dbSituationFactorPosition = matchingSituationFactorPositions[0];
            dbFactor = dbSituationFactorPosition.factor;
            dbPosition = dbSituationFactorPosition.position;
        }
        else {
            dbSituationFactorPosition = {};
            if (!existingFactor) {
                dbFactor = {};
            }
            dbPosition = {};
            dbSituationFactorPosition.factor = dbFactor;
            dbSituationFactorPosition.position = dbPosition;
            dbSituation.situationFactorPositions
                .push(dbSituationFactorPosition);
        }
        if (!existingFactor) {
            this.factorToDb(uiFactor, dbFactor, uiSituation.ageSuitability);
        }
        this.positionToDb(uiPosition, dbPosition, uiSituation.ageSuitability);
        super.uiToDb({}, dbSituationFactorPosition, uiSituation.ageSuitability);
        dbSituationFactorPosition.axis = uiFactor.axis;
        dbSituationFactorPosition.blue = uiFactor.color.blue;
        dbSituationFactorPosition.dir = uiPosition.dir;
        dbSituationFactorPosition.factorNumber = factorNumber;
        dbSituationFactorPosition.green = uiFactor.color.green;
        dbSituationFactorPosition.outcomeOrdinal = outcomeOrdinal;
        dbSituationFactorPosition.red = uiFactor.color.red;
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
DI.set(SITUATION_CONVERTER, SituationConverter);
//# sourceMappingURL=SituationConverter.js.map