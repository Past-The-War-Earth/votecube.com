import { DI } from '@airport/di';
import { SITUATION_CONVERTER } from '../tokens';
export class SituationConverter {
    dbToUi(dbSituation) {
        let parent = null;
        if (dbSituation.parent) {
            parent = {
                actorId: dbSituation.parent.actor.id,
                actorRecordId: dbSituation.parent.actorRecordId,
                ageSuitability: dbSituation.parent.ageSuitability,
                repositoryId: dbSituation.parent.repository.id,
            };
        }
        return {
            ageSuitability: dbSituation.ageSuitability,
            actorId: dbSituation.actor.id,
            actorRecordId: dbSituation.actorRecordId,
            category: this.getUiCategory(dbSituation.category),
            factors: {
                '1': this.getUiFactor(1, dbSituation.situationFactorPositions),
                '2': this.getUiFactor(2, dbSituation.situationFactorPositions),
                '3': this.getUiFactor(3, dbSituation.situationFactorPositions)
            },
            name: dbSituation.name,
            outcomes: {
                A: this.getUiOutcome(dbSituation.outcomeA),
                B: this.getUiOutcome(dbSituation.outcomeB)
            },
            parent,
            repositoryId: dbSituation.repository.id,
        };
    }
    uiToDb(uiSituation) {
        const uiCategory = uiSituation.category;
        const uiParent = uiSituation.parent;
        const dbFactors = [];
        return {
            actor: {
                id: uiSituation.actorId
            },
            actorRecordId: uiSituation.actorRecordId,
            ageSuitability: uiSituation.ageSuitability,
            category: {
                actor: {
                    id: uiCategory.actorId,
                },
                actorRecordId: uiCategory.actorRecordId,
                ageSuitability: uiCategory.ageSuitability,
                repository: {
                    id: uiCategory.repositoryId
                }
            },
            name: uiSituation.name,
            outcomeA: this.getDbOutcome(uiSituation.outcomes.A, uiSituation.ageSuitability),
            outcomeB: this.getDbOutcome(uiSituation.outcomes.B, uiSituation.ageSuitability),
            parent: {
                actor: {
                    id: uiParent.actorId
                },
                actorRecordId: uiParent.actorRecordId,
                repository: {
                    id: uiParent.repositoryId
                }
            },
            repository: {
                id: uiSituation.repositoryId
            },
            situationFactorPositions: [this.getDbSituationFactorPosition(uiSituation, 1, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 1, 'B', dbFactors), this.getDbSituationFactorPosition(uiSituation, 2, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 2, 'B', dbFactors), this.getDbSituationFactorPosition(uiSituation, 3, 'A', dbFactors), this.getDbSituationFactorPosition(uiSituation, 3, 'B', dbFactors)],
        };
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
        return {
            actorId: dbFactor.actor.id,
            actorRecordId: dbFactor.actorRecordId,
            ageSuitability: dbFactor.ageSuitability,
            axis: dbFactorPositionA.axis,
            color: {
                blue: dbFactorPositionA.blue,
                green: dbFactorPositionA.green,
                red: dbFactorPositionA.red,
            },
            name: dbFactor.name,
            positions: {
                A: this.getUiPosition(dbFactorPositionA),
                B: this.getUiPosition(dbFactorPositionB),
            },
            repositoryId: dbFactor.repository.id,
        };
    }
    getUiPosition(dbSituationFactorPosition) {
        const position = dbSituationFactorPosition.position;
        return {
            actorId: position.actor.id,
            actorRecordId: position.actorRecordId,
            ageSuitability: position.ageSuitability,
            dir: dbSituationFactorPosition.dir,
            name: position.name,
            repositoryId: position.repository.id,
        };
    }
    getUiOutcome(outcome) {
        return {
            ageSuitability: outcome.ageSuitability,
            actorId: outcome.actor.id,
            actorRecordId: outcome.actorRecordId,
            name: outcome.name,
            repositoryId: outcome.repository.id,
        };
    }
    getUiCategory(category) {
        return {
            actorId: category.actor.id,
            actorRecordId: category.actorRecordId,
            ageSuitability: category.ageSuitability,
            name: category.name,
            repositoryId: category.repository.id
        };
    }
    getDbOutcome(uiOutcome, ageSuitability) {
        if (uiOutcome.ageSuitability || uiOutcome.ageSuitability === 0) {
            ageSuitability = uiOutcome.ageSuitability;
        }
        return {
            actor: {
                id: uiOutcome.actorId
            },
            actorRecordId: uiOutcome.actorRecordId,
            ageSuitability: ageSuitability,
            name: uiOutcome.name,
            repository: {
                id: uiOutcome.repositoryId
            }
        };
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
        return {
            actor: {
                id: uiSituation.actorId,
            },
            actorRecordId: null,
            axis: uiFactor.axis,
            blue: uiFactor.color.blue,
            dir: uiPosition.dir,
            factorNumber,
            factor,
            green: uiFactor.color.green,
            outcomeOrdinal,
            position,
            red: uiFactor.color.red,
            repository: {
                id: uiSituation.repositoryId
            }
        };
    }
    getDbFactor(uiFactor, ageSuitability) {
        if (uiFactor.ageSuitability || uiFactor.ageSuitability === 0) {
            ageSuitability = uiFactor.ageSuitability;
        }
        return {
            actorRecordId: uiFactor.actorRecordId,
            actor: {
                id: uiFactor.actorId
            },
            ageSuitability,
            name: uiFactor.name,
            repository: {
                id: uiFactor.repositoryId
            }
        };
    }
    getDbPosition(uiPosition, ageSuitability) {
        if (uiPosition.ageSuitability || uiPosition.ageSuitability === 0) {
            ageSuitability = uiPosition.ageSuitability;
        }
        return {
            actorRecordId: uiPosition.actorRecordId,
            actor: {
                id: uiPosition.actorId
            },
            ageSuitability,
            name: uiPosition.name,
            repository: {
                id: uiPosition.repositoryId
            }
        };
    }
}
DI.set(SITUATION_CONVERTER, SituationConverter);
//# sourceMappingURL=SituationConveter.js.map