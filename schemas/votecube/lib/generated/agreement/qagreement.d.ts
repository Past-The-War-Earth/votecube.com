import { IQDateField, IQNumberField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '../idea/qsituationidea';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from '../idea/qidea';
import { AgreementReasonGraph, AgreementReasonESelect, QAgreementReason } from './qagreementreason';
import { IAgreementReason } from './agreementreason';
import { IAgreement } from './agreement';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementESelect extends AirEntityESelect, AgreementEOptionalId {
    shareTotal?: number | IQNumberField;
    situationIdea?: SituationIdeaESelect;
    idea?: IdeaESelect;
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
    shareTotal?: number | IQNumberField;
    situationIdea?: SituationIdeaEOptionalId;
    idea?: IdeaEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementGraph extends AgreementEOptionalId, AirEntityGraph {
    shareTotal?: number | IQNumberField;
    situationIdea?: SituationIdeaGraph;
    idea?: IdeaGraph;
    agreementReasons?: AgreementReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    SHARE_TOTAL?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QAgreement extends QAirEntity {
    shareTotal: IQNumberField;
    situationIdea: QSituationIdeaQRelation;
    idea: QIdeaQRelation;
    agreementReasons: IQAirEntityOneToManyRelation<IAgreementReason, QAgreementReason>;
}
export interface QAgreementQId extends QAirEntityQId {
}
export interface QAgreementQRelation extends QAirEntityQRelation<IAgreement, QAgreement>, QAgreementQId {
}
//# sourceMappingURL=qagreement.d.ts.map