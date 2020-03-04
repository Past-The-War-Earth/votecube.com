import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PositionEOptionalId, PositionESelect, QPositionQRelation } from './qposition';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionTranslationESelect extends ImmutableActorRowESelect, PositionTranslationEOptionalId {
    name?: string | IQStringField;
    position?: PositionESelect;
    language?: LanguageESelect;
    parent?: PositionTranslationESelect;
    children?: PositionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    position?: PositionEOptionalId;
    language?: LanguageEOptionalId;
    parent?: PositionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionTranslationECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: PositionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    POSITION_NAME?: string | IQStringField;
    POSITION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionTranslationECreateProperties extends Partial<PositionTranslationEId>, PositionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionTranslationECreateColumns extends PositionTranslationEId, PositionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionTranslation extends QImmutableActorRow {
    id: IQNumberField;
    name: IQStringField;
    position: QPositionQRelation;
    language: QLanguageQRelation;
    parent: QPositionTranslationQRelation;
    children: IQOneToManyRelation<QPositionTranslation>;
}
export interface QPositionTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPositionTranslationQRelation extends QImmutableActorRowQRelation<QPositionTranslation>, QPositionTranslationQId {
}
