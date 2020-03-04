import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { FactorTranslationEOptionalId, FactorTranslationESelect, QFactorTranslationQRelation } from './qfactortranslation';
import { FactorPositionECascadeGraph, FactorPositionESelect, QFactorPosition } from './position/qfactorposition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect extends ImmutableActorRowESelect, FactorEOptionalId {
    createdAtPollRevision?: PollRevisionESelect;
    parentTranslation?: FactorTranslationESelect;
    parent?: FactorESelect;
    children?: FactorESelect;
    factorPositions?: FactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    createdAtPollRevision?: PollRevisionEOptionalId;
    parentTranslation?: FactorTranslationEOptionalId;
    parent?: FactorEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: FactorECascadeGraph;
    factorPositions?: FactorPositionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;
    PARENT_FACTOR_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties extends Partial<FactorEId>, FactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns extends FactorEId, FactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QImmutableActorRow {
    id: IQNumberField;
    createdAtPollRevision: QPollRevisionQRelation;
    parentTranslation: QFactorTranslationQRelation;
    parent: QFactorQRelation;
    children: IQOneToManyRelation<QFactor>;
    factorPositions: IQOneToManyRelation<QFactorPosition>;
}
export interface QFactorQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorQRelation extends QImmutableActorRowQRelation<QFactor>, QFactorQId {
}
