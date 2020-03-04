import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { VoteEOptionalId, VoteESelect, QVoteQRelation } from './qvote';
import { VoteFactorECascadeGraph, VoteFactorESelect, QVoteFactor } from './qvotefactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteVersionESelect extends ImmutableActorRowESelect, VoteVersionEOptionalId {
    vote?: VoteESelect;
    factors?: VoteFactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteVersionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteVersionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    vote?: VoteEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteVersionECascadeGraph extends ImmutableActorRowECascadeGraph {
    factors?: VoteFactorECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteVersionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    VOTE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteVersionECreateProperties extends Partial<VoteVersionEId>, VoteVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteVersionECreateColumns extends VoteVersionEId, VoteVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteVersion extends QImmutableActorRow {
    id: IQNumberField;
    vote: QVoteQRelation;
    factors: IQOneToManyRelation<QVoteFactor>;
}
export interface QVoteVersionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QVoteVersionQRelation extends QImmutableActorRowQRelation<QVoteVersion>, QVoteVersionQId {
}
