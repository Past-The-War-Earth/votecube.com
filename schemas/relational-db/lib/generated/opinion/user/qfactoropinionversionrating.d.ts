import { IQBooleanField, IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { FactorOpinionVersionEOptionalId, FactorOpinionVersionESelect, QFactorOpinionVersionQRelation } from '../qfactoropinionversion';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionRatingESelect extends ImmutableActorRowESelect, FactorOpinionVersionRatingEOptionalId {
    isCurrent?: boolean | IQBooleanField;
    factorOpinionVersion?: FactorOpinionVersionESelect;
    rating?: RatingESelect;
    parent?: FactorOpinionVersionRatingESelect;
    child?: FactorOpinionVersionRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    isCurrent?: boolean | IQBooleanField;
    factorOpinionVersion?: FactorOpinionVersionEOptionalId;
    rating?: RatingEOptionalId;
    parent?: FactorOpinionVersionRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionRatingECascadeGraph extends ImmutableActorRowECascadeGraph {
    child?: FactorOpinionVersionRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    FACTOR_OPINION_VERSION_RATING_IS_CURRENT?: boolean | IQBooleanField;
    FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_FACTOR_OPINION_VERSION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingECreateProperties extends Partial<FactorOpinionVersionRatingEId>, FactorOpinionVersionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionRatingECreateColumns extends FactorOpinionVersionRatingEId, FactorOpinionVersionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersionRating extends QImmutableActorRow {
    id: IQNumberField;
    isCurrent: IQBooleanField;
    factorOpinionVersion: QFactorOpinionVersionQRelation;
    rating: QRatingQRelation;
    parent: QFactorOpinionVersionRatingQRelation;
    child: IQOneToManyRelation<QFactorOpinionVersionRating>;
}
export interface QFactorOpinionVersionRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorOpinionVersionRatingQRelation extends QImmutableActorRowQRelation<QFactorOpinionVersionRating>, QFactorOpinionVersionRatingQId {
}
