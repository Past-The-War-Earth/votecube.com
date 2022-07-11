import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ILabel } from './label';
/**
 * SELECT - All fields and relations (optional).
 */
export interface LabelESelect extends AirEntityESelect, LabelEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LabelEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface LabelEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LabelEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface LabelGraph extends LabelEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface LabelEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LabelECreateProperties extends Partial<LabelEId>, LabelEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LabelECreateColumns extends LabelEId, LabelEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QLabel extends QAirEntity {
    name: IQStringField;
}
export interface QLabelQId extends QAirEntityQId {
}
export interface QLabelQRelation extends QAirEntityQRelation<ILabel, QLabel>, QLabelQId {
}
//# sourceMappingURL=qlabel.d.ts.map