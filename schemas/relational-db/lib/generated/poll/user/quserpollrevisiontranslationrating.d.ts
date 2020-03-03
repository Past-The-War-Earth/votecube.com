import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { UserPollRevisionTranslationEOptionalId, UserPollRevisionTranslationESelect, QUserPollRevisionTranslationQRelation } from './quserpollrevisiontranslation';
import { PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslationQRelation } from '../revision/translation/qpollrevisiontranslation';
import { PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../run/qpollrun';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionTranslationRatingESelect extends ImmutableActorRowESelect, UserPollRevisionTranslationRatingEOptionalId {
    isCurrent?: boolean | IQBooleanField;
    userPollRevisionTranslation?: UserPollRevisionTranslationESelect;
    pollRevisionTranslation?: PollRevisionTranslationESelect;
    run?: PollRunESelect;
    rating?: RatingESelect;
    parent?: UserPollRevisionTranslationRatingESelect;
    child?: UserPollRevisionTranslationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionTranslationRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionTranslationRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    isCurrent?: boolean | IQBooleanField;
    userPollRevisionTranslation?: UserPollRevisionTranslationEOptionalId;
    pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
    run?: PollRunEOptionalId;
    rating?: RatingEOptionalId;
    parent?: UserPollRevisionTranslationRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionTranslationRatingECascadeGraph extends ImmutableActorRowECascadeGraph {
    child?: UserPollRevisionTranslationRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionTranslationRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_POLL_REVISION_TRANSLATION_RATING_IS_CURRENT?: boolean | IQBooleanField;
    USER_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
    POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_USER_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationRatingECreateProperties extends Partial<UserPollRevisionTranslationRatingEId>, UserPollRevisionTranslationRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionTranslationRatingECreateColumns extends UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevisionTranslationRating extends QImmutableActorRow {
    id: IQNumberField;
    isCurrent: IQBooleanField;
    userPollRevisionTranslation: QUserPollRevisionTranslationQRelation;
    pollRevisionTranslation: QPollRevisionTranslationQRelation;
    run: QPollRunQRelation;
    rating: QRatingQRelation;
    parent: QUserPollRevisionTranslationRatingQRelation;
    child: IQOneToManyRelation<QUserPollRevisionTranslationRating>;
}
export interface QUserPollRevisionTranslationRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollRevisionTranslationRatingQRelation extends QImmutableActorRowQRelation<QUserPollRevisionTranslationRating>, QUserPollRevisionTranslationRatingQId {
}
