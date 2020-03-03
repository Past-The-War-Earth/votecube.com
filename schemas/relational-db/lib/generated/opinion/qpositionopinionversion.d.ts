import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { FactorOpinionVersionEOptionalId, FactorOpinionVersionESelect, QFactorOpinionVersionQRelation } from './qfactoropinionversion';
import { PositionOpinionVersionRatingECascadeGraph, PositionOpinionVersionRatingESelect, QPositionOpinionVersionRating } from './user/qpositionopinionversionrating';
import { PositionOpinionVersionTranslationECascadeGraph, PositionOpinionVersionTranslationESelect, QPositionOpinionVersionTranslation } from './translation/qpositionopinionversiontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionESelect extends IEntitySelectProperties, PositionOpinionVersionEOptionalId {
    factorOpinionVersion?: FactorOpinionVersionESelect;
    ratings?: PositionOpinionVersionRatingESelect;
    translations?: PositionOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    factorOpinionVersion?: FactorOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionECascadeGraph extends IEntityCascadeGraph {
    ratings?: PositionOpinionVersionRatingECascadeGraph;
    translations?: PositionOpinionVersionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionECreateProperties extends Partial<PositionOpinionVersionEId>, PositionOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionECreateColumns extends PositionOpinionVersionEId, PositionOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersion extends IQEntity {
    id: IQNumberField;
    factorOpinionVersion: QFactorOpinionVersionQRelation;
    ratings: IQOneToManyRelation<QPositionOpinionVersionRating>;
    translations: IQOneToManyRelation<QPositionOpinionVersionTranslation>;
}
export interface QPositionOpinionVersionQId {
    id: IQNumberField;
}
export interface QPositionOpinionVersionQRelation extends IQRelation<QPositionOpinionVersion>, QPositionOpinionVersionQId {
}
