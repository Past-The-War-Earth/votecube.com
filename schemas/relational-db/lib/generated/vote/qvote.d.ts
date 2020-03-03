import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { ActorEOptionalId, ActorESelect, QActorQRelation } from '../user/qactor';
import { PollEOptionalId, PollESelect, QPollQRelation } from '../poll/qpoll';
import { VoteRevisionECascadeGraph, VoteRevisionESelect, QVoteRevision } from './qvoterevision';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteESelect extends ImmutableActorRowESelect, VoteEOptionalId {
    type?: number | IQNumberField;
    actor?: ActorESelect;
    poll?: PollESelect;
    revisions?: VoteRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    type?: number | IQNumberField;
    actor?: ActorEOptionalId;
    poll?: PollEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteECascadeGraph extends ImmutableActorRowECascadeGraph {
    revisions?: VoteRevisionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    VOTE_TYPE_ID?: number | IQNumberField;
    POLL_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteECreateProperties extends Partial<VoteEId>, VoteEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteECreateColumns extends VoteEId, VoteEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVote extends QImmutableActorRow {
    id: IQNumberField;
    type: IQNumberField;
    actor: QActorQRelation;
    poll: QPollQRelation;
    revisions: IQOneToManyRelation<QVoteRevision>;
}
export interface QVoteQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QVoteQRelation extends QImmutableActorRowQRelation<QVote>, QVoteQId {
}
