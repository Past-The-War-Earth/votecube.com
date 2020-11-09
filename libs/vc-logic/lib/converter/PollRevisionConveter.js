import { DI } from '@airport/di';
import { POLL_REVISION_CONVERTER } from '../tokens';
export class PollRevisionConverter {
    dbToUi(revisionDb) {
        let parent = null;
        if (revisionDb.parent) {
            parent = {
                id: revisionDb.parent.id
            };
        }
        return {
            ageSuitability: revisionDb.ageSuitability,
            createdAt: revisionDb.createdAt,
            depth: revisionDb.depth,
            id: revisionDb.id,
            factors: {
                '1': this.getUiFactor(1, revisionDb.factorPositions),
                '2': this.getUiFactor(2, revisionDb.factorPositions),
                '3': this.getUiFactor(3, revisionDb.factorPositions)
            },
            name: revisionDb.allTranslations[0].name,
            outcomes: {
                A: this.getUiOutcome(revisionDb.outcomeVersionA),
                B: this.getUiOutcome(revisionDb.outcomeVersionB)
            },
            parent,
            pollId: revisionDb.poll.id,
            theme: this.getUiTheme(revisionDb.poll.theme),
            userId: revisionDb.userAccount.id
        };
    }
    uiToDb(revisionDoc) {
        const poll = {
            id: revisionDoc.pollId
        };
        const parentRevision = {
            id: revisionDoc.parent ? revisionDoc.parent.id : null
        };
        const uiPollRevisionTranslation = {
            id: null,
            name: revisionDoc.name,
        };
        const uiPollRevision = {
            // Non-Id Relations
            ageSuitability: revisionDoc.ageSuitability,
            id: revisionDoc.id,
            parent: parentRevision,
            outcomeVersionA: this.getDbOutcome(revisionDoc.outcomes.A),
            outcomeVersionB: this.getDbOutcome(revisionDoc.outcomes.B),
            poll,
            factorPositions: [this.getDbPollFactorPosition(revisionDoc.factors[1], 1, 'A'), this.getDbPollFactorPosition(revisionDoc.factors[1], 1, 'B'), this.getDbPollFactorPosition(revisionDoc.factors[2], 2, 'A'), this.getDbPollFactorPosition(revisionDoc.factors[2], 2, 'B'), this.getDbPollFactorPosition(revisionDoc.factors[3], 3, 'A'), this.getDbPollFactorPosition(revisionDoc.factors[3], 3, 'B')],
            allTranslations: [uiPollRevisionTranslation]
        };
        return uiPollRevision;
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
        const dbFactor = dbFactorPositionA.factorPosition.factor;
        return {
            ageSuitability: dbFactor.ageSuitability,
            axis: dbFactorPositionA.axis,
            color: {
                blue: dbFactorPositionA.blue,
                green: dbFactorPositionA.green,
                red: dbFactorPositionA.red,
            },
            createdAt: dbFactor.createdAt,
            id: dbFactor.id,
            name: dbFactor.parentTranslation.name,
            parentId: dbFactor.parent ? dbFactor.parent.id : null,
            positions: {
                A: this.getUiPosition(dbFactorPositionA),
                B: this.getUiPosition(dbFactorPositionB),
            },
            translationId: dbFactor.parentTranslation.id,
            userId: dbFactor.userAccount.id,
        };
    }
    getUiPosition(prFactorPosition) {
        const position = prFactorPosition.factorPosition.position;
        return {
            ageSuitability: position.ageSuitability,
            createdAt: position.createdAt,
            dir: prFactorPosition.dir,
            id: position.id,
            name: position.parentTranslation.name,
            pollFactorPositionId: prFactorPosition.id,
            pollFactorPositionParentId: prFactorPosition.parent ? prFactorPosition.parent.id : null,
            positionParentId: position.parent ? position.parent.id : null,
            userId: position.userAccount.id,
        };
    }
    getUiOutcome(outcome) {
        return {
            ageSuitability: outcome.ageSuitability,
            createdAt: outcome.createdAt,
            id: outcome.id,
            name: outcome.parentTranslation.name,
            userId: outcome.userAccount.id,
        };
    }
    getUiTheme(theme) {
        // TODO: implement
        return {
            id: theme.id,
            ageSuitability: theme.ageSuitability,
            name: theme.name,
        };
    }
    getDbOutcome(uiOutcome) {
        if (uiOutcome.id) {
            return {
                id: uiOutcome.id
            };
        }
        return {
            ageSuitability: uiOutcome.ageSuitability,
            id: null,
            parentTranslation: {
                id: null,
                name: uiOutcome.name
            }
        };
    }
    getDbPollFactorPosition(uiFactor, factorNumber, outcomeOrdinal) {
        const uiPosition = uiFactor.positions[outcomeOrdinal];
        if (uiPosition.pollFactorPositionId) {
            return {
                id: uiPosition.pollFactorPositionId
            };
        }
        let factorPositionParent = null;
        if (uiPosition.pollFactorPositionParentId) {
            factorPositionParent = {
                id: uiPosition.pollFactorPositionParentId
            };
        }
        let factor = null;
        if (outcomeOrdinal == 'A') {
            factor = this.getDbFactor(uiFactor);
        }
        const position = this.getDbPosition(uiPosition);
        let factorPosition = {
            factor,
            position,
        };
        return {
            id: null,
            axis: uiFactor.axis,
            dir: uiPosition.dir,
            factorNumber,
            factorPosition,
            outcomeOrdinal,
            parent: factorPositionParent,
        };
    }
    getDbFactor(uiFactor) {
        if (uiFactor.id) {
            return {
                id: uiFactor.id
            };
        }
        let parentFactor = null;
        if (uiFactor.parentId != null) {
            parentFactor = {
                id: uiFactor.parentId
            };
        }
        let parentTranslation = {
            id: null,
            name: uiFactor.name,
        };
        return {
            id: null,
            parent: parentFactor,
            parentTranslation
        };
    }
    getDbPosition(uiPosition) {
        if (uiPosition.id) {
            return {
                id: uiPosition.id
            };
        }
        return {
            id: null,
            translations: [{
                    id: null,
                    name: uiPosition.name,
                }]
        };
    }
}
DI.set(POLL_REVISION_CONVERTER, PollRevisionConverter);
//# sourceMappingURL=PollRevisionConveter.js.map