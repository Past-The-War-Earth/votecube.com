import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { PollEOptionalId, PollESelect, QPollQRelation } from '../qpoll';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../revision/qpollrevision';
import { UserPollRevisionECascadeGraph, UserPollRevisionESelect, QUserPollRevision } from './quserpollrevision';
import { UserPollRatingECascadeGraph, UserPollRatingESelect, QUserPollRating } from './quserpollrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollESelect extends MutableActorRowESelect, UserPollEOptionalId {
    pinnedExplicitly?: boolean | IQBooleanField;
    poll?: PollESelect;
    pinnedRevision?: PollRevisionESelect;
    userPollRevisions?: UserPollRevisionESelect;
    ratings?: UserPollRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollEUpdateProperties extends MutableActorRowEUpdateProperties {
    pinnedExplicitly?: boolean | IQBooleanField;
    poll?: PollEOptionalId;
    pinnedRevision?: PollRevisionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollECascadeGraph extends MutableActorRowECascadeGraph {
    userPollRevisions?: UserPollRevisionECascadeGraph;
    ratings?: UserPollRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    USER_POLL_PINNED_EXPLICITLY?: boolean | IQBooleanField;
    POLL_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollECreateProperties extends Partial<UserPollEId>, UserPollEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollECreateColumns extends UserPollEId, UserPollEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPoll extends QMutableActorRow {
    id: IQNumberField;
    pinnedExplicitly: IQBooleanField;
    poll: QPollQRelation;
    pinnedRevision: QPollRevisionQRelation;
    userPollRevisions: IQOneToManyRelation<QUserPollRevision>;
    ratings: IQOneToManyRelation<QUserPollRating>;
}
export interface QUserPollQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollQRelation extends QMutableActorRowQRelation<QUserPoll>, QUserPollQId {
}
