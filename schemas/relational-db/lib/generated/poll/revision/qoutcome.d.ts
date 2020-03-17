import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { AgeSuitableRowECascadeGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../../infrastructure/row/qagesuitablerow';
import { OutcomeTranslationEOptionalId, OutcomeTranslationESelect, QOutcomeTranslationQRelation } from './translation/qoutcometranslation';
import { PollRevisionECascadeGraph, PollRevisionESelect, QPollRevision } from './qpollrevision';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect extends AgeSuitableRowESelect, OutcomeEOptionalId {
    parentTranslation?: OutcomeTranslationESelect;
    parent?: OutcomeESelect;
    children?: OutcomeESelect;
    pollRevisionsA?: PollRevisionESelect;
    pollRevisionsB?: PollRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId extends AgeSuitableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    parentTranslation?: OutcomeTranslationEOptionalId;
    parent?: OutcomeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeECascadeGraph extends AgeSuitableRowECascadeGraph {
    children?: OutcomeECascadeGraph;
    pollRevisionsA?: PollRevisionECascadeGraph;
    pollRevisionsB?: PollRevisionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
    PARENT_OUTCOME_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns extends OutcomeEId, OutcomeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QAgeSuitableRow {
    id: IQNumberField;
    parentTranslation: QOutcomeTranslationQRelation;
    parent: QOutcomeQRelation;
    children: IQOneToManyRelation<QOutcome>;
    pollRevisionsA: IQOneToManyRelation<QPollRevision>;
    pollRevisionsB: IQOneToManyRelation<QPollRevision>;
}
export interface QOutcomeQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QOutcomeQRelation extends QAgeSuitableRowQRelation<QOutcome>, QOutcomeQId {
}
