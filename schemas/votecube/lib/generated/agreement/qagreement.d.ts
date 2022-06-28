import { IQDateField, IQNumberField, IQAirEntityOneToManyRelation } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '../idea/qsituationidea';
import { IdeaRatingGraph, IdeaRatingEOptionalId, IdeaRatingESelect, QIdeaRatingQRelation } from '../idea/qidearating';
import { AgreementReasonGraph, AgreementReasonESelect, QAgreementReason } from './qagreementreason';
import { IAgreementReason } from './agreementreason';
import { IAgreement } from './agreement';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementESelect extends AirEntityESelect, AgreementEOptionalId {
    situationIdea?: SituationIdeaESelect;
    idea?: IdeaRatingESelect;
    agreementReasons?: AgreementReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgreementEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementEUpdateProperties extends AirEntityEUpdateProperties {
    situationIdea?: SituationIdeaEOptionalId;
    idea?: IdeaRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementGraph extends AgreementEOptionalId, AirEntityGraph {
    situationIdea?: SituationIdeaGraph;
    idea?: IdeaRatingGraph;
    agreementReasons?: AgreementReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
    IDEA_RATINGS_RID_1?: number | IQNumberField;
    IDEA_RATINGS_AID_1?: number | IQNumberField;
    IDEA_RATINGS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementECreateProperties extends Partial<AgreementEId>, AgreementEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementECreateColumns extends AgreementEId, AgreementEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreement extends QAirEntity {
    situationIdea: QSituationIdeaQRelation;
    idea: QIdeaRatingQRelation;
    agreementReasons: IQAirEntityOneToManyRelation<IAgreementReason, QAgreementReason>;
}
export interface QAgreementQId extends QAirEntityQId {
}
export interface QAgreementQRelation extends QAirEntityQRelation<IAgreement, QAgreement>, QAgreementQId {
}
//# sourceMappingURL=qagreement.d.ts.map