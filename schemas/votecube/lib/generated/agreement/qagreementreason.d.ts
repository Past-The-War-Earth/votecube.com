import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { AgreementGraph, AgreementEOptionalId, AgreementESelect, QAgreementQRelation } from './qagreement';
import { ReasonGraph, ReasonEOptionalId, ReasonESelect, QReasonQRelation } from '../idea/qreason';
import { IAgreementReason } from './agreementreason';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementReasonESelect extends AirEntityESelect, AgreementReasonEOptionalId {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementESelect;
    reason?: ReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementReasonEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgreementReasonEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementReasonEUpdateProperties extends AirEntityEUpdateProperties {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementEOptionalId;
    reason?: ReasonEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementReasonGraph extends AgreementReasonEOptionalId, AirEntityGraph {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementGraph;
    reason?: ReasonGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementReasonEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    THREED_COORDINATE_AXIS?: string | IQStringField;
    SHARE?: number | IQNumberField;
    AGREEMENTS_RID_1?: number | IQNumberField;
    AGREEMENTS_AID_1?: number | IQNumberField;
    AGREEMENTS_ARID_1?: number | IQNumberField;
    REASONS_RID_1?: number | IQNumberField;
    REASONS_AID_1?: number | IQNumberField;
    REASONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementReasonECreateProperties extends Partial<AgreementReasonEId>, AgreementReasonEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementReasonECreateColumns extends AgreementReasonEId, AgreementReasonEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QAgreementReason extends QAirEntity {
    axis: IQStringField;
    share: IQNumberField;
    agreement: QAgreementQRelation;
    reason: QReasonQRelation;
}
export interface QAgreementReasonQId extends QAirEntityQId {
}
export interface QAgreementReasonQRelation extends QAirEntityQRelation<IAgreementReason, QAgreementReason>, QAgreementReasonQId {
}
//# sourceMappingURL=qagreementreason.d.ts.map