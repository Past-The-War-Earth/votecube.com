import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionTranslationEId, PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslationQId, QPollRevisionTranslationQRelation } from './qpollrevisiontranslation';
import { FactorTranslationEId, FactorTranslationEOptionalId, FactorTranslationESelect, QFactorTranslationQId, QFactorTranslationQRelation } from '../../../factor/qfactortranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorTranslationESelect extends IEntitySelectProperties, PollRevisionFactorTranslationEOptionalId {
    pollRevisionTranslation?: PollRevisionTranslationESelect;
    factorTranslation?: FactorTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionFactorTranslationEId extends IEntityIdProperties {
    pollRevisionTranslation: PollRevisionTranslationEId;
    factorTranslation: FactorTranslationEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionFactorTranslationEOptionalId {
    pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
    factorTranslation?: FactorTranslationEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionFactorTranslationEUpdateProperties extends IEntityUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorTranslationECascadeGraph extends IEntityCascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorTranslationEUpdateColumns extends IEntityUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionFactorTranslationECreateProperties extends Partial<PollRevisionFactorTranslationEId>, PollRevisionFactorTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionFactorTranslationECreateColumns extends PollRevisionFactorTranslationEId, PollRevisionFactorTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionFactorTranslation extends IQEntity {
    pollRevisionTranslation: QPollRevisionTranslationQRelation;
    factorTranslation: QFactorTranslationQRelation;
}
export interface QPollRevisionFactorTranslationQId {
    pollRevisionTranslation: QPollRevisionTranslationQId;
    factorTranslation: QFactorTranslationQId;
}
export interface QPollRevisionFactorTranslationQRelation extends IQRelation<QPollRevisionFactorTranslation>, QPollRevisionFactorTranslationQId {
}
