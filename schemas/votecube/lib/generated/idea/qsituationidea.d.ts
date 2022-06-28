import { IQDateField, IQNumberField, IQAirEntityOneToManyRelation } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '@sapoto/core';
import { IdeaRatingGraph, IdeaRatingESelect, QIdeaRatingQRelation } from './qidearating';
import { AgreementGraph, AgreementESelect, QAgreement } from '../agreement/qagreement';
import { IAgreement } from '../agreement/agreement';
import { ReasonGraph, ReasonESelect, QReason } from './qreason';
import { IReason } from './reason';
import { ISituationIdea } from './situationidea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationIdeaESelect extends AirEntityESelect, SituationIdeaEOptionalId {
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    idea?: IdeaESelect;
    situation?: SituationESelect;
    ideaRatings?: IdeaRatingESelect;
    agreements?: AgreementESelect;
    reasons?: ReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationIdeaEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationIdeaEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationIdeaEUpdateProperties extends AirEntityEUpdateProperties {
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    idea?: IdeaEOptionalId;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationIdeaGraph extends SituationIdeaEOptionalId, AirEntityGraph {
    agreementShareTotal?: number | IQNumberField;
    numberOfAgreements?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    idea?: IdeaGraph;
    situation?: SituationGraph;
    ideaRatings?: IdeaRatingGraph;
    agreements?: AgreementGraph[];
    reasons?: ReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationIdeaEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    AGREEMENT_SHARE_TOTAL?: number | IQNumberField;
    NUMBER_OF_AGREEMENTS?: number | IQNumberField;
    URGENCY_TOTAL?: number | IQNumberField;
    NUMBER_OF_URGENCY_RATINGS?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationIdeaECreateProperties extends Partial<SituationIdeaEId>, SituationIdeaEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationIdeaECreateColumns extends SituationIdeaEId, SituationIdeaEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationIdea extends QAirEntity {
    agreementShareTotal: IQNumberField;
    numberOfAgreements: IQNumberField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    idea: QIdeaQRelation;
    situation: QSituationQRelation;
    ideaRatings: QIdeaRatingQRelation;
    agreements: IQAirEntityOneToManyRelation<IAgreement, QAgreement>;
    reasons: IQAirEntityOneToManyRelation<IReason, QReason>;
}
export interface QSituationIdeaQId extends QAirEntityQId {
}
export interface QSituationIdeaQRelation extends QAirEntityQRelation<ISituationIdea, QSituationIdea>, QSituationIdeaQId {
}
//# sourceMappingURL=qsituationidea.d.ts.map