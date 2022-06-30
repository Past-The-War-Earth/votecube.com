import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaRatingGraph, IdeaRatingESelect, QIdeaRatingQRelation } from './qidearating';
import { AgreementGraph, AgreementESelect, QAgreement } from '../agreement/qagreement';
import { IAgreement } from '../agreement/agreement';
import { ReasonGraph, ReasonESelect, QReason } from './qreason';
import { IReason } from './reason';
import { IdeaLabelGraph, IdeaLabelESelect, QIdeaLabel } from './qidealabel';
import { IIdeaLabel } from './idealabel';
import { SituationIdeaGraph, SituationIdeaESelect, QSituationIdea } from './qsituationidea';
import { ISituationIdea } from './situationidea';
import { IdeaTopicGraph, IdeaTopicESelect, QIdeaTopic } from './qideatopic';
import { IIdeaTopic } from './ideatopic';
import { IIdea } from './idea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect extends AirEntityESelect, IdeaEOptionalId {
    name?: string | IQStringField;
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    numberOfReasons?: number | IQNumberField;
    parent?: IdeaESelect;
    children?: IdeaESelect;
    ideaRatings?: IdeaRatingESelect;
    agreements?: AgreementESelect;
    reasons?: ReasonESelect;
    ideaLabels?: IdeaLabelESelect;
    situationIdeas?: SituationIdeaESelect;
    ideaTopics?: IdeaTopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    numberOfReasons?: number | IQNumberField;
    parent?: IdeaEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph extends IdeaEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    numberOfReasons?: number | IQNumberField;
    parent?: IdeaGraph;
    children?: IdeaGraph[];
    ideaRatings?: IdeaRatingGraph;
    agreements?: AgreementGraph[];
    reasons?: ReasonGraph[];
    ideaLabels?: IdeaLabelGraph[];
    situationIdeas?: SituationIdeaGraph[];
    ideaTopics?: IdeaTopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    AGREEMENT_SHARE_TOTAL?: number | IQNumberField;
    NUMBER_OF_AGREEMENTS?: number | IQNumberField;
    URGENCY_TOTAL?: number | IQNumberField;
    NUMBER_OF_URGENCY_RATINGS?: number | IQNumberField;
    NUMBER_OF_REASONS?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaECreateProperties extends Partial<IdeaEId>, IdeaEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaECreateColumns extends IdeaEId, IdeaEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdea extends QAirEntity {
    name: IQStringField;
    agreementShareTotal: IQNumberField;
    numberOfAgreements: IQNumberField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    numberOfReasons: IQNumberField;
    parent: QIdeaQRelation;
    children: IQAirEntityOneToManyRelation<IIdea, QIdea>;
    ideaRatings: QIdeaRatingQRelation;
    agreements: IQAirEntityOneToManyRelation<IAgreement, QAgreement>;
    reasons: IQAirEntityOneToManyRelation<IReason, QReason>;
    ideaLabels: IQAirEntityOneToManyRelation<IIdeaLabel, QIdeaLabel>;
    situationIdeas: IQAirEntityOneToManyRelation<ISituationIdea, QSituationIdea>;
    ideaTopics: IQAirEntityOneToManyRelation<IIdeaTopic, QIdeaTopic>;
}
export interface QIdeaQId extends QAirEntityQId {
}
export interface QIdeaQRelation extends QAirEntityQRelation<IIdea, QIdea>, QIdeaQId {
}
//# sourceMappingURL=qidea.d.ts.map