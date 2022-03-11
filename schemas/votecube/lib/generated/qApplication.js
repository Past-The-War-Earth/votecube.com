import { AIRPORT_DATABASE } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getFullApplicationName } from '@airport/ground-control';
import { Agreement, AgreementFactor, Factor, Idea, IdeaFactorPosition, IdeaLabel, Label, Outcome, Position, UserAccount } from '../ddl/ddl';
const __constructors__ = {
    Agreement: Agreement,
    AgreementFactor: AgreementFactor,
    Factor: Factor,
    Idea: Idea,
    IdeaFactorPosition: IdeaFactorPosition,
    IdeaLabel: IdeaLabel,
    Label: Label,
    Outcome: Outcome,
    Position: Position,
    UserAccount: UserAccount
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
DI.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q;
});
//# sourceMappingURL=qApplication.js.map