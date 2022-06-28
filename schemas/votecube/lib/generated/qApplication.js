import { airApi } from '@airport/aviation-communication';
import { Agreement, AgreementReason, Factor, Idea, IdeaLabel, IdeaRating, IdeaTopic, Label, Position, Reason, SituationIdea } from '../ddl/ddl';
const __constructors__ = {
    Agreement: Agreement,
    AgreementReason: AgreementReason,
    Factor: Factor,
    Idea: Idea,
    IdeaLabel: IdeaLabel,
    IdeaRating: IdeaRating,
    IdeaTopic: IdeaTopic,
    Label: Label,
    Position: Position,
    Reason: Reason,
    SituationIdea: SituationIdea
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