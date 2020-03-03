import { IQEntity } from '@airport/air-control';
import { ImmutableRowECascadeGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from './qimmutablerow';
import { ActorEOptionalId, ActorESelect, QActorQRelation } from '../../user/qactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ImmutableActorRowESelect extends ImmutableRowESelect, ImmutableActorRowEOptionalId {
    actor?: ActorESelect;
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
    actor?: ActorEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ImmutableActorRowECascadeGraph extends ImmutableRowECascadeGraph {
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
export interface QImmutableActorRow extends QImmutableRow {
    actor: QActorQRelation;
}
export interface QImmutableActorRowQId extends QImmutableRowQId {
}
export interface QImmutableActorRowQRelation<SubType extends IQEntity> extends QImmutableRowQRelation<QImmutableActorRow>, QImmutableActorRowQId {
}
