import { AIRPORT_DATABASE } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getSchemaName } from '@airport/ground-control';
import { Category, Factor, Outcome, Position, Situation, SituationFactorPosition } from '../ddl/ddl';
const __constructors__ = {
    Category: Category,
    Factor: Factor,
    Outcome: Outcome,
    Position: Position,
    Situation: Situation,
    SituationFactorPosition: SituationFactorPosition
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