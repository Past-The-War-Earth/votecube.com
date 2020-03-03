import { IQDateField, IQNumberField } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { UserPollRevisionEOptionalId, UserPollRevisionESelect, QUserPollRevisionQRelation } from './quserpollrevision';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../revision/qpollrevision';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionRatingESelect extends MutableActorRowESelect, UserPollRevisionRatingEOptionalId {
    userPollRevision?: UserPollRevisionESelect;
    pollRevision?: PollRevisionESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionRatingEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionRatingEUpdateProperties extends MutableActorRowEUpdateProperties {
    userPollRevision?: UserPollRevisionEOptionalId;
    pollRevision?: PollRevisionEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionRatingECascadeGraph extends MutableActorRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionRatingEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    USER_POLL_REVISION_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionRatingECreateProperties extends Partial<UserPollRevisionRatingEId>, UserPollRevisionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionRatingECreateColumns extends UserPollRevisionRatingEId, UserPollRevisionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevisionRating extends QMutableActorRow {
    id: IQNumberField;
    userPollRevision: QUserPollRevisionQRelation;
    pollRevision: QPollRevisionQRelation;
    rating: QRatingQRelation;
}
export interface QUserPollRevisionRatingQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollRevisionRatingQRelation extends QMutableActorRowQRelation<QUserPollRevisionRating>, QUserPollRevisionRatingQId {
}
