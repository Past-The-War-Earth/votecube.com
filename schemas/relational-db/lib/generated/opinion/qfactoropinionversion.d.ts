import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionOpinionVersionEOptionalId, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersionQRelation } from './qpollrevisionopinionversion';
import { FactorOpinionVersionRatingECascadeGraph, FactorOpinionVersionRatingESelect, QFactorOpinionVersionRating } from './user/qfactoropinionversionrating';
import { FactorOpinionVersionTranslationECascadeGraph, FactorOpinionVersionTranslationESelect, QFactorOpinionVersionTranslation } from './translation/qfactoropinionversiontranslation';
import { PositionOpinionVersionECascadeGraph, PositionOpinionVersionESelect, QPositionOpinionVersion } from './qpositionopinionversion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionESelect extends IEntitySelectProperties, FactorOpinionVersionEOptionalId {
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionESelect;
    ratings?: FactorOpinionVersionRatingESelect;
    translations?: FactorOpinionVersionTranslationESelect;
    positionOpinionVersions?: PositionOpinionVersionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionECascadeGraph extends IEntityCascadeGraph {
    ratings?: FactorOpinionVersionRatingECascadeGraph;
    translations?: FactorOpinionVersionTranslationECascadeGraph;
    positionOpinionVersions?: PositionOpinionVersionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionECreateProperties extends Partial<FactorOpinionVersionEId>, FactorOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionECreateColumns extends FactorOpinionVersionEId, FactorOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersion extends IQEntity {
    id: IQNumberField;
    pollRevisionOpinionVersion: QPollRevisionOpinionVersionQRelation;
    ratings: IQOneToManyRelation<QFactorOpinionVersionRating>;
    translations: IQOneToManyRelation<QFactorOpinionVersionTranslation>;
    positionOpinionVersions: IQOneToManyRelation<QPositionOpinionVersion>;
}
export interface QFactorOpinionVersionQId {
    id: IQNumberField;
}
export interface QFactorOpinionVersionQRelation extends IQRelation<QFactorOpinionVersion>, QFactorOpinionVersionQId {
}
