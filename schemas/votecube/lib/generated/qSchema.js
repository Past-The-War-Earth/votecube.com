import { AIRPORT_DATABASE } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getSchemaName } from '@airport/ground-control';
import { Factor, Label, Outcome, Position, Situation, SituationFactorPosition, SituationLabel, Solution, SolutionFactor } from '../ddl/ddl';
const __constructors__ = {
    Factor: Factor,
    Label: Label,
    Outcome: Outcome,
    Position: Position,
    Situation: Situation,
    SituationFactorPosition: SituationFactorPosition,
    SituationLabel: SituationLabel,
    Solution: Solution,
    SolutionFactor: SolutionFactor
};
export const Q_SCHEMA = {
    __constructors__,
    domain: 'votecube.com',
    name: '@votecube/votecube'
};
export const Q = Q_SCHEMA;
export function diSet(dbEntityId) {
    return dS(Q.__dbSchema__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbSchema__, dbEntityId);
}
DI.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getSchemaName(Q_SCHEMA)] = Q;
});
//# sourceMappingURL=qSchema.js.map