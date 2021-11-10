import { DI } from '@airport/di';
import { SITUATION_CONVERTER } from '../tokens';
import { RepositoryRecordConverter } from './RepositoryRecordConverter';
import { Label } from '@votecube/votecube/lib/server';
export class SituationConverter extends RepositoryRecordConverter {
    dbToUi(dbSituation) {
        let parent = null;
        if (dbSituation.parent) {
            parent = super.dbToUi(dbSituation.parent);
        }
        return Object.assign(Object.assign({}, super.dbToUi(dbSituation.parent)), { factors: {
                '1': this.getUiFactor(1, dbSituation.situationFactorPositions),
                '2': this.getUiFactor(2, dbSituation.situationFactorPositions),
                '3': this.getUiFactor(3, dbSituation.situationFactorPositions)
            }, name: dbSituation.name, outcomes: {
                A: this.getUiOutcome(dbSituation.outcomeA),
                B: this.getUiOutcome(dbSituation.outcomeB)
            }, parent, labels: this.getUiLabels(dbSituation.situationLabels) });
    }
    uiToDb(uiSituation) {
        const uiParent = uiSituation.parent;
        const dbFactors = [];
        return Object.assign(Object.assign({}, super.uiToDb(uiSituation)), { name: uiSituation.name, outcomeA: this.getDbOutcome(uiSituation.outcomes.A, uiSituation.ageSuitability), outcomeB: this.getDbOutcome(uiSituation.outcomes.B, uiSituation.ageSuitability), parent: Object.assign({}, super.uiToDb(uiParent)), situationFactorPositions: [this.getDbSituationFactorPosition(uiSituation, 1, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 1, 'B', dbFactors), this.getDbSituationFactorPosition(uiSituation, 2, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 2, 'B', dbFactors), this.getDbSituationFactorPosition(uiSituation, 3, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 3, 'B', dbFactors)], situationLabels: this.getDbLabels(uiSituation, uiSituation.labels) });
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
        return situationLabels.map(situationLabel => {
            const label = situationLabel.label;
            return Object.assign(Object.assign({}, super.dbToUi(label)), { name: Label.name, situationLabel: super.dbToUi(situationLabel) });
        });
    }
    getDbLabels(uiSituation, uiLabels) {
        if (!uiLabels) {
            return [];
        }
        return uiLabels.map(uiLabel => {
            return Object.assign(Object.assign({}, super.uiToDb(uiLabel)), { label: Object.assign({}, super.uiToDb(uiLabel)), situation: Object.assign({}, super.uiToDb(uiLabel.situationLabel)) });
        });
    }
    getDbOutcome(uiOutcome, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiOutcome, ageSuitability)), { name: uiOutcome.name });
    }
    getDbSituationFactorPosition(uiSituation, factorNumber, outcomeOrdinal, dbFactors) {
        const uiFactor = uiSituation.factors[factorNumber];
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        let factor = dbFactors[factorNumber];
        if (!factor) {
            factor = this.getDbFactor(uiFactor, uiSituation.ageSuitability);
            dbFactors[factorNumber] = factor;
        }
        const position = this.getDbPosition(uiPosition, uiSituation.ageSuitability);
        return Object.assign(Object.assign({}, super.uiToDb(uiSituation, uiSituation.ageSuitability)), { axis: uiFactor.axis, blue: uiFactor.color.blue, dir: uiPosition.dir, factorNumber,
            factor, green: uiFactor.color.green, outcomeOrdinal,
            position, red: uiFactor.color.red });
    }
    getDbFactor(uiFactor, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiFactor, ageSuitability)), { name: uiFactor.name });
    }
    getDbPosition(uiPosition, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiPosition, ageSuitability)), { name: uiPosition.name });
    }
}
DI.set(SITUATION_CONVERTER, SituationConverter);
//# sourceMappingURL=SituationConverter.js.map