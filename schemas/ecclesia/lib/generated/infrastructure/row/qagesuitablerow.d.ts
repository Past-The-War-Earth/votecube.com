import { IQNumberField, IQEntity } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from './qimmutableactorrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgeSuitableRowESelect extends ImmutableActorRowESelect, AgeSuitableRowEOptionalId {
    ageSuitability?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgeSuitableRowEId extends ImmutableActorRowEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgeSuitableRowEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgeSuitableRowEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    ageSuitability?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgeSuitableRowGraph extends AgeSuitableRowEOptionalId, ImmutableActorRowGraph {
    ageSuitability?: number | IQNumberField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgeSuitableRowEUpdateColumns extends ImmutableActorRowEUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgeSuitableRowECreateProperties extends Partial<AgeSuitableRowEId>, AgeSuitableRowEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgeSuitableRowECreateColumns extends AgeSuitableRowEId, AgeSuitableRowEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgeSuitableRow<T> extends QImmutableActorRow<T> {
    ageSuitability: IQNumberField;
}
export interface QAgeSuitableRowQId extends QImmutableActorRowQId {
}
export interface QAgeSuitableRowQRelation<SubType, SubQType extends IQEntity<SubType>> extends QImmutableActorRowQRelation<SubType, SubQType>, QAgeSuitableRowQId {
}
//# sourceMappingURL=qagesuitablerow.d.ts.map