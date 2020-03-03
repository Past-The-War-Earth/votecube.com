import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionOpinionVersionEOptionalId, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersionQRelation } from '../qpollrevisionopinionversion';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionRatingESelect extends ImmutableActorRowESelect, PollRevisionOpinionVersionRatingEOptionalId {
    isCurrent?: boolean | IQBooleanField;
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionESelect;
    rating?: RatingESelect;
    parent?: PollRevisionOpinionVersionRatingESelect;
    child?: PollRevisionOpinionVersionRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    isCurrent?: boolean | IQBooleanField;
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionEOptionalId;
    rating?: RatingEOptionalId;
    parent?: PollRevisionOpinionVersionRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionRatingECascadeGraph extends ImmutableActorRowECascadeGraph {
    child?: PollRevisionOpinionVersionRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    IS_CURRENT?: boolean | IQBooleanField;
    POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_OPINION_VERSION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionRatingECreateProperties extends Partial<PollRevisionOpinionVersionRatingEId>, PollRevisionOpinionVersionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionRatingECreateColumns extends PollRevisionOpinionVersionRatingEId, PollRevisionOpinionVersionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersionRating extends QImmutableActorRow {
    id: IQNumberField;
    isCurrent: IQBooleanField;
    pollRevisionOpinionVersion: QPollRevisionOpinionVersionQRelation;
    rating: QRatingQRelation;
    parent: QPollRevisionOpinionVersionRatingQRelation;
    child: IQOneToManyRelation<QPollRevisionOpinionVersionRating>;
}
export interface QPollRevisionOpinionVersionRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionVersionRatingQRelation extends QImmutableActorRowQRelation<QPollRevisionOpinionVersionRating>, QPollRevisionOpinionVersionRatingQId {
}
