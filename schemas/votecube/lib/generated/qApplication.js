import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { getFullApplicationName } from '@airport/ground-control';
import { Agreement, AgreementFactor, Factor, Idea, IdeaLabel, IdeaSituation, Label, Outcome, Position, Reason } from '../ddl/ddl';
const __constructors__ = {
    Agreement: Agreement,
    AgreementFactor: AgreementFactor,
    Factor: Factor,
    Idea: Idea,
    IdeaLabel: IdeaLabel,
    IdeaSituation: IdeaSituation,
    Label: Label,
    Outcome: Outcome,
    Position: Position,
    Reason: Reason
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8000',
    name: '@votecube/votecube'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbApplication__, dbEntityId);
}
DEPENDENCY_INJECTION.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q;
});
//# sourceMappingURL=qApplication.js.map