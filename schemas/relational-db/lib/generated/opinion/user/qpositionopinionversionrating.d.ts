import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PositionOpinionVersionEOptionalId, PositionOpinionVersionESelect, QPositionOpinionVersionQRelation } from '../qpositionopinionversion';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionRatingESelect extends ImmutableActorRowESelect, PositionOpinionVersionRatingEOptionalId {
    isCurrent?: boolean | IQBooleanField;
    positionOpinionVersion?: PositionOpinionVersionESelect;
    rating?: RatingESelect;
    parent?: PositionOpinionVersionRatingESelect;
    child?: PositionOpinionVersionRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    isCurrent?: boolean | IQBooleanField;
    positionOpinionVersion?: PositionOpinionVersionEOptionalId;
    rating?: RatingEOptionalId;
    parent?: PositionOpinionVersionRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionRatingECascadeGraph extends ImmutableActorRowECascadeGraph {
    child?: PositionOpinionVersionRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    POSITION_OPINION_VERSION_RATING_IS_CURRENT?: boolean | IQBooleanField;
    POSITION_OPINION_VERSION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_POSITION_OPINION_VERSION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingECreateProperties extends Partial<PositionOpinionVersionRatingEId>, PositionOpinionVersionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionRatingECreateColumns extends PositionOpinionVersionRatingEId, PositionOpinionVersionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersionRating extends QImmutableActorRow {
    id: IQNumberField;
    isCurrent: IQBooleanField;
    positionOpinionVersion: QPositionOpinionVersionQRelation;
    rating: QRatingQRelation;
    parent: QPositionOpinionVersionRatingQRelation;
    child: IQOneToManyRelation<QPositionOpinionVersionRating>;
}
export interface QPositionOpinionVersionRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPositionOpinionVersionRatingQRelation extends QImmutableActorRowQRelation<QPositionOpinionVersionRating>, QPositionOpinionVersionRatingQId {
}
