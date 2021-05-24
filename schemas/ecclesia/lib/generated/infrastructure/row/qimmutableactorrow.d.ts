import { IQEntity } from '@airport/air-control';
import { ImmutableRowGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from './qimmutablerow';
import { UserAccountGraph, UserAccountEOptionalId, UserAccountESelect, QUserAccountQRelation } from '../../user/quseraccount';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ImmutableActorRowESelect extends ImmutableRowESelect, ImmutableActorRowEOptionalId {
    userAccount?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ImmutableActorRowEId extends ImmutableRowEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ImmutableActorRowEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ImmutableActorRowEUpdateProperties extends ImmutableRowEUpdateProperties {
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ImmutableActorRowGraph extends ImmutableActorRowEOptionalId, ImmutableRowGraph {
    userAccount?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ImmutableActorRowEUpdateColumns extends ImmutableRowEUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ImmutableActorRowECreateProperties extends Partial<ImmutableActorRowEId>, ImmutableActorRowEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ImmutableActorRowECreateColumns extends ImmutableActorRowEId, ImmutableActorRowEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QImmutableActorRow<T> extends QImmutableRow<T> {
    userAccount: QUserAccountQRelation;
}
export interface QImmutableActorRowQId extends QImmutableRowQId {
}
export interface QImmutableActorRowQRelation<SubType, SubQType extends IQEntity<SubType>> extends QImmutableRowQRelation<SubType, SubQType>, QImmutableActorRowQId {
}
//# sourceMappingURL=qimmutableactorrow.d.ts.map