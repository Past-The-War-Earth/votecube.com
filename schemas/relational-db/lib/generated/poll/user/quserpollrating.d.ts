import { IQDateField, IQNumberField } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { UserPollEOptionalId, UserPollESelect, QUserPollQRelation } from './quserpoll';
import { PollEOptionalId, PollESelect, QPollQRelation } from '../qpoll';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRatingESelect extends MutableActorRowESelect, UserPollRatingEOptionalId {
    userPoll?: UserPollESelect;
    poll?: PollESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRatingEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRatingEUpdateProperties extends MutableActorRowEUpdateProperties {
    userPoll?: UserPollEOptionalId;
    poll?: PollEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRatingECascadeGraph extends MutableActorRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRatingEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    USER_POLL_ID?: number | IQNumberField;
    POLL_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRatingECreateProperties extends Partial<UserPollRatingEId>, UserPollRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRatingECreateColumns extends UserPollRatingEId, UserPollRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRating extends QMutableActorRow {
    id: IQNumberField;
    userPoll: QUserPollQRelation;
    poll: QPollQRelation;
    rating: QRatingQRelation;
}
export interface QUserPollRatingQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollRatingQRelation extends QMutableActorRowQRelation<QUserPollRating>, QUserPollRatingQId {
}
