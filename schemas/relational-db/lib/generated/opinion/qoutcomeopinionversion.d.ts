import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionOpinionVersionEOptionalId, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersionQRelation } from './qpollrevisionopinionversion';
import { OutcomeOpinionVersionTranslationECascadeGraph, OutcomeOpinionVersionTranslationESelect, QOutcomeOpinionVersionTranslation } from './translation/qoutcomeopinionversiontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionESelect extends IEntitySelectProperties, OutcomeOpinionVersionEOptionalId {
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionESelect;
    translations?: OutcomeOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    pollRevisionOpinionVersion?: PollRevisionOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionECascadeGraph extends IEntityCascadeGraph {
    translations?: OutcomeOpinionVersionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionECreateProperties extends Partial<OutcomeOpinionVersionEId>, OutcomeOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionECreateColumns extends OutcomeOpinionVersionEId, OutcomeOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersion extends IQEntity {
    id: IQNumberField;
    pollRevisionOpinionVersion: QPollRevisionOpinionVersionQRelation;
    translations: IQOneToManyRelation<QOutcomeOpinionVersionTranslation>;
}
export interface QOutcomeOpinionVersionQId {
    id: IQNumberField;
}
export interface QOutcomeOpinionVersionQRelation extends IQRelation<QOutcomeOpinionVersion>, QOutcomeOpinionVersionQId {
}
