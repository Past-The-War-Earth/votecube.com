import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionTranslationEId, PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslationQId, QPollRevisionTranslationQRelation } from './qpollrevisiontranslation';
import { PositionTranslationEId, PositionTranslationEOptionalId, PositionTranslationESelect, QPositionTranslationQId, QPositionTranslationQRelation } from '../../../factor/position/qpositiontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionPositionTranslationESelect extends IEntitySelectProperties, PollRevisionPositionTranslationEOptionalId {
    pollRevisionTranslation?: PollRevisionTranslationESelect;
    positionTranslation?: PositionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionPositionTranslationEId extends IEntityIdProperties {
    pollRevisionTranslation: PollRevisionTranslationEId;
    positionTranslation: PositionTranslationEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionPositionTranslationEOptionalId {
    pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
    positionTranslation?: PositionTranslationEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionPositionTranslationEUpdateProperties extends IEntityUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionPositionTranslationECascadeGraph extends IEntityCascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionPositionTranslationEUpdateColumns extends IEntityUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionPositionTranslationECreateProperties extends Partial<PollRevisionPositionTranslationEId>, PollRevisionPositionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionPositionTranslationECreateColumns extends PollRevisionPositionTranslationEId, PollRevisionPositionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionPositionTranslation extends IQEntity {
    pollRevisionTranslation: QPollRevisionTranslationQRelation;
    positionTranslation: QPositionTranslationQRelation;
}
export interface QPollRevisionPositionTranslationQId {
    pollRevisionTranslation: QPollRevisionTranslationQId;
    positionTranslation: QPositionTranslationQId;
}
export interface QPollRevisionPositionTranslationQRelation extends IQRelation<QPollRevisionPositionTranslation>, QPollRevisionPositionTranslationQId {
}
