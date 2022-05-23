import { airApi } from '@airport/aviation-communication';
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
    return airApi.dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return airApi.ddS(Q.__dbApplication__, dbEntityId);
}
airApi.setQApplication(Q_APPLICATION);
//# sourceMappingURL=qApplication.js.map