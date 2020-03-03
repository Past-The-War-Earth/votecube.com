import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionECascadeGraph, PollRevisionESelect, QPollRevision } from './qpollrevision';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeVersionESelect extends IEntitySelectProperties, OutcomeVersionEOptionalId {
    parent?: OutcomeVersionESelect;
    children?: OutcomeVersionESelect;
    pollRevisionsA?: PollRevisionESelect;
    pollRevisionsB?: PollRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeVersionEUpdateProperties extends IEntityUpdateProperties {
    parent?: OutcomeVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeVersionECascadeGraph extends IEntityCascadeGraph {
    children?: OutcomeVersionECascadeGraph;
    pollRevisionsA?: PollRevisionECascadeGraph;
    pollRevisionsB?: PollRevisionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeVersionEUpdateColumns extends IEntityUpdateColumns {
    PARENT_OUTCOME_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeVersionECreateProperties extends Partial<OutcomeVersionEId>, OutcomeVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeVersionECreateColumns extends OutcomeVersionEId, OutcomeVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeVersion extends IQEntity {
    id: IQNumberField;
    parent: QOutcomeVersionQRelation;
    children: IQOneToManyRelation<QOutcomeVersion>;
    pollRevisionsA: IQOneToManyRelation<QPollRevision>;
    pollRevisionsB: IQOneToManyRelation<QPollRevision>;
}
export interface QOutcomeVersionQId {
    id: IQNumberField;
}
export interface QOutcomeVersionQRelation extends IQRelation<QOutcomeVersion>, QOutcomeVersionQId {
}
