import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../../poll/revision/qpollrevision';
import { PositionTranslationECascadeGraph, PositionTranslationEOptionalId, PositionTranslationESelect, QPositionTranslation, QPositionTranslationQRelation } from './qpositiontranslation';
import { FactorPositionECascadeGraph, FactorPositionESelect, QFactorPosition } from './qfactorposition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect extends ImmutableActorRowESelect, PositionEOptionalId {
    createdAtPollRevision?: PollRevisionESelect;
    parentTranslation?: PositionTranslationESelect;
    parent?: PositionESelect;
    children?: PositionESelect;
    factorPositions?: FactorPositionESelect;
    translations?: PositionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    createdAtPollRevision?: PollRevisionEOptionalId;
    parentTranslation?: PositionTranslationEOptionalId;
    parent?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: PositionECascadeGraph;
    factorPositions?: FactorPositionECascadeGraph;
    translations?: PositionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;
    PARENT_POSITION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionECreateProperties extends Partial<PositionEId>, PositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionECreateColumns extends PositionEId, PositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPosition extends QImmutableActorRow {
    id: IQNumberField;
    createdAtPollRevision: QPollRevisionQRelation;
    parentTranslation: QPositionTranslationQRelation;
    parent: QPositionQRelation;
    children: IQOneToManyRelation<QPosition>;
    factorPositions: IQOneToManyRelation<QFactorPosition>;
    translations: IQOneToManyRelation<QPositionTranslation>;
}
export interface QPositionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPositionQRelation extends QImmutableActorRowQRelation<QPosition>, QPositionQId {
}
