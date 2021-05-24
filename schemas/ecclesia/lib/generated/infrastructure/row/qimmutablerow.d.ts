import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQDateField, IQEntity, IQRelation } from '@airport/air-control';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ImmutableRowESelect extends IEntitySelectProperties, ImmutableRowEOptionalId {
    createdAt?: Date | IQDateField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ImmutableRowEId extends IEntityIdProperties {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ImmutableRowEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ImmutableRowEUpdateProperties extends IEntityUpdateProperties {
    createdAt?: Date | IQDateField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ImmutableRowGraph extends ImmutableRowEOptionalId, IEntityCascadeGraph {
    createdAt?: Date | IQDateField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ImmutableRowEUpdateColumns extends IEntityUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ImmutableRowECreateProperties extends Partial<ImmutableRowEId>, ImmutableRowEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ImmutableRowECreateColumns extends ImmutableRowEId, ImmutableRowEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QImmutableRow<T> extends IQEntity<T> {
    createdAt: IQDateField;
}
export interface QImmutableRowQId {
}
export interface QImmutableRowQRelation<SubType, SubQType extends IQEntity<SubType>> extends IQRelation<SubType, SubQType>, QImmutableRowQId {
}
//# sourceMappingURL=qimmutablerow.d.ts.map