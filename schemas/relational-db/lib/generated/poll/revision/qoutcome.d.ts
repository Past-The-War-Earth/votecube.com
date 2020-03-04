import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { OutcomeTranslationEOptionalId, OutcomeTranslationESelect, QOutcomeTranslationQRelation } from './translation/qoutcometranslation';
import { PollRevisionECascadeGraph, PollRevisionESelect, QPollRevision } from './qpollrevision';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect extends IEntitySelectProperties, OutcomeEOptionalId {
    parentTranslation?: OutcomeTranslationESelect;
    parent?: OutcomeESelect;
    children?: OutcomeESelect;
    pollRevisionsA?: PollRevisionESelect;
    pollRevisionsB?: PollRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId extends IEntityIdProperties {
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
export interface OutcomeEUpdateProperties extends IEntityUpdateProperties {
    parentTranslation?: OutcomeTranslationEOptionalId;
    parent?: OutcomeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeECascadeGraph extends IEntityCascadeGraph {
    children?: OutcomeECascadeGraph;
    pollRevisionsA?: PollRevisionECascadeGraph;
    pollRevisionsB?: PollRevisionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns extends IEntityUpdateColumns {
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
export interface QOutcome extends IQEntity {
    id: IQNumberField;
    parentTranslation: QOutcomeTranslationQRelation;
    parent: QOutcomeQRelation;
    children: IQOneToManyRelation<QOutcome>;
    pollRevisionsA: IQOneToManyRelation<QPollRevision>;
    pollRevisionsB: IQOneToManyRelation<QPollRevision>;
}
export interface QOutcomeQId {
    id: IQNumberField;
}
export interface QOutcomeQRelation extends IQRelation<QOutcome>, QOutcomeQId {
}
