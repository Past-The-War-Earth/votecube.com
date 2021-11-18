import { container, DI } from '@airport/di';
import { AGE_GROUPS, } from '@votecube/model';
import { SITUATION_CONVERTER } from '../tokens';
import { getToDbConversionContext, RepositoryRecordConverter } from './RepositoryRecordConverter';
import { SITUATION_FORM_MANAGER } from '..';
export class SituationConverter extends RepositoryRecordConverter {
    dbToUi(dbSituation) {
        let parent = null;
        if (dbSituation.parent) {
            parent = super.dbToUi(dbSituation.parent);
        }
        const ageGroups = dbSituation.situationLabels.filter(situationLabel => AGE_GROUPS.includes(situationLabel.label.name))
            .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
        const labels = dbSituation.situationLabels.filter(situationLabel => !AGE_GROUPS.includes(situationLabel.label.name))
            .map(ageGroupLabel => this.getUiLabel(ageGroupLabel));
        return Object.assign(Object.assign({}, super.dbToUi(dbSituation.parent)), { ageGroups, factors: {
                '1': this.getUiFactor(1, dbSituation.situationFactorPositions),
                '2': this.getUiFactor(2, dbSituation.situationFactorPositions),
                '3': this.getUiFactor(3, dbSituation.situationFactorPositions)
            }, name: dbSituation.name, outcomes: {
                A: this.getUiOutcome(dbSituation.outcomeA),
                B: this.getUiOutcome(dbSituation.outcomeB)
            }, parent,
            labels });
    }
    uiToDb(uiSituation) {
        const context = getToDbConversionContext();
        const uiParent = uiSituation.parent;
        const dbFactors = [];
        return Object.assign(Object.assign({}, super.uiToDb(uiSituation, context)), { name: uiSituation.name, outcomeA: this.getDbOutcome(uiSituation.outcomes.A, context, uiSituation.ageSuitability), outcomeB: this.getDbOutcome(uiSituation.outcomes.B, context, uiSituation.ageSuitability), parent: uiParent ? Object.assign({}, super.uiToDb(uiParent, context)) : null, situationFactorPositions: [this.getDbSituationFactorPosition(uiSituation, 1, 'A', dbFactors, context), this.getDbSituationFactorPosition(uiSituation, 1, 'B', dbFactors, context), this.getDbSituationFactorPosition(uiSituation, 2, 'A', dbFactors, context), this.getDbSituationFactorPosition(uiSituation, 2, 'B', dbFactors, context), this.getDbSituationFactorPosition(uiSituation, 3, 'A', dbFactors, context), this.getDbSituationFactorPosition(uiSituation, 3, 'B', dbFactors, context)], situationLabels: this.getDbLabels(uiSituation, uiSituation.ageGroups.concat(uiSituation.labels), context) });
    }
    getUiLabel(situationLabel) {
        if (!situationLabel) {
            const situationFormManager = container(this).getSync(SITUATION_FORM_MANAGER);
            return Object.assign(Object.assign({}, situationFormManager.getBlankUiNamedRecord()), { situationLabel: situationFormManager.getBlankUiRepositoryRecord() });
        }
        const label = situationLabel.label;
        return Object.assign(Object.assign({}, super.dbToUi(label)), { name: label.name, situationLabel: super.dbToUi(situationLabel) });
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
    getDbLabels(uiSituation, uiLabels, context) {
        if (!uiLabels) {
            return [];
        }
        return uiLabels.map(uiLabel => {
            return Object.assign(Object.assign({}, super.uiToDb(uiLabel.situationLabel, context, uiSituation.ageSuitability)), { label: Object.assign(Object.assign({}, super.uiToDb(uiLabel, context, uiSituation.ageSuitability)), { name: uiLabel.name }), situation: Object.assign({}, super.uiToDb(uiSituation, context)) });
        });
    }
    getDbOutcome(uiOutcome, context, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiOutcome, context, ageSuitability)), { name: uiOutcome.name });
    }
    getDbSituationFactorPosition(uiSituation, factorNumber, outcomeOrdinal, dbFactors, context) {
        const uiFactor = uiSituation.factors[factorNumber];
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        let factor = dbFactors[factorNumber];
        if (!factor) {
            factor = this.getDbFactor(uiFactor, context, uiSituation.ageSuitability);
            dbFactors[factorNumber] = factor;
        }
        const position = this.getDbPosition(uiPosition, context, uiSituation.ageSuitability);
        return Object.assign(Object.assign({}, super.uiToDb(uiSituation, context, uiSituation.ageSuitability)), { axis: uiFactor.axis, blue: uiFactor.color.blue, dir: uiPosition.dir, factorNumber,
            factor, green: uiFactor.color.green, outcomeOrdinal,
            position, red: uiFactor.color.red });
    }
    getDbFactor(uiFactor, context, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiFactor, context, ageSuitability)), { name: uiFactor.name });
    }
    getDbPosition(uiPosition, context, ageSuitability) {
        return Object.assign(Object.assign({}, super.uiToDb(uiPosition, context, ageSuitability)), { name: uiPosition.name });
    }
}
DI.set(SITUATION_CONVERTER, SituationConverter);
//# sourceMappingURL=SituationConverter.js.map