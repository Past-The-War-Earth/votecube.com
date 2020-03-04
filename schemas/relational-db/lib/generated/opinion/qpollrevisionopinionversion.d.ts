import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableRowECascadeGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from '../infrastructure/row/qimmutablerow';
import { PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from './qpollrevisionopinion';
import { PollRevisionOpinionVersionTranslationECascadeGraph, PollRevisionOpinionVersionTranslationESelect, QPollRevisionOpinionVersionTranslation } from './translation/qpollrevisionopinionversiontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionESelect extends ImmutableRowESelect, PollRevisionOpinionVersionEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    parent?: PollRevisionOpinionVersionESelect;
    children?: PollRevisionOpinionVersionESelect;
    translations?: PollRevisionOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionEId extends ImmutableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionEUpdateProperties extends ImmutableRowEUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    parent?: PollRevisionOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionECascadeGraph extends ImmutableRowECascadeGraph {
    children?: PollRevisionOpinionVersionECascadeGraph;
    translations?: PollRevisionOpinionVersionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionEUpdateColumns extends ImmutableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionECreateProperties extends Partial<PollRevisionOpinionVersionEId>, PollRevisionOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionECreateColumns extends PollRevisionOpinionVersionEId, PollRevisionOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersion extends QImmutableRow {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    parent: QPollRevisionOpinionVersionQRelation;
    children: IQOneToManyRelation<QPollRevisionOpinionVersion>;
    translations: IQOneToManyRelation<QPollRevisionOpinionVersionTranslation>;
}
export interface QPollRevisionOpinionVersionQId extends QImmutableRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionVersionQRelation extends QImmutableRowQRelation<QPollRevisionOpinionVersion>, QPollRevisionOpinionVersionQId {
}
