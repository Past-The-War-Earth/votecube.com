import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { UserPollRevisionTranslationEOptionalId, UserPollRevisionTranslationESelect, QUserPollRevisionTranslationQRelation } from './quserpollrevisiontranslation';
import { PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../run/qpollrun';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationRatingESelect extends ImmutableActorRowESelect, PollRevisionTranslationRatingEOptionalId {
    isCurrent?: boolean | IQBooleanField;
    userPollRevisionTranslation?: UserPollRevisionTranslationESelect;
    run?: PollRunESelect;
    rating?: RatingESelect;
    parent?: PollRevisionTranslationRatingESelect;
    child?: PollRevisionTranslationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    isCurrent?: boolean | IQBooleanField;
    userPollRevisionTranslation?: UserPollRevisionTranslationEOptionalId;
    run?: PollRunEOptionalId;
    rating?: RatingEOptionalId;
    parent?: PollRevisionTranslationRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationRatingECascadeGraph extends ImmutableActorRowECascadeGraph {
    child?: PollRevisionTranslationRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    IS_CURRENT?: boolean | IQBooleanField;
    USER_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingECreateProperties extends Partial<PollRevisionTranslationRatingEId>, PollRevisionTranslationRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationRatingECreateColumns extends PollRevisionTranslationRatingEId, PollRevisionTranslationRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslationRating extends QImmutableActorRow {
    id: IQNumberField;
    isCurrent: IQBooleanField;
    userPollRevisionTranslation: QUserPollRevisionTranslationQRelation;
    run: QPollRunQRelation;
    rating: QRatingQRelation;
    parent: QPollRevisionTranslationRatingQRelation;
    child: IQOneToManyRelation<QPollRevisionTranslationRating>;
}
export interface QPollRevisionTranslationRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionTranslationRatingQRelation extends QImmutableActorRowQRelation<QPollRevisionTranslationRating>, QPollRevisionTranslationRatingQId {
}
