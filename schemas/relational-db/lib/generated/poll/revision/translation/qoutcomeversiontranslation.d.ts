import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../../infrastructure/row/qimmutableactorrow';
import { OutcomeVersionEOptionalId, OutcomeVersionESelect, QOutcomeVersionQRelation } from '../qoutcomeversion';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../../infrastructure/qlanguage';
import { TranslationTypeEOptionalId, TranslationTypeESelect, QTranslationTypeQRelation } from '../../../infrastructure/qtranslationtype';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeVersionTranslationESelect extends ImmutableActorRowESelect, OutcomeVersionTranslationEOptionalId {
    name?: string | IQStringField;
    outcomeVersion?: OutcomeVersionESelect;
    language?: LanguageESelect;
    type?: TranslationTypeESelect;
    parent?: OutcomeVersionTranslationESelect;
    children?: OutcomeVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeVersionTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeVersionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeVersionTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    outcomeVersion?: OutcomeVersionEOptionalId;
    language?: LanguageEOptionalId;
    type?: TranslationTypeEOptionalId;
    parent?: OutcomeVersionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeVersionTranslationECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: OutcomeVersionTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeVersionTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    OUTCOME_VERSION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    TRANSLATION_TYPE_ID?: number | IQNumberField;
    PARENT_OUTCOME_VERSION_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeVersionTranslationECreateProperties extends Partial<OutcomeVersionTranslationEId>, OutcomeVersionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeVersionTranslationECreateColumns extends OutcomeVersionTranslationEId, OutcomeVersionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeVersionTranslation extends QImmutableActorRow {
    id: IQNumberField;
    name: IQStringField;
    outcomeVersion: QOutcomeVersionQRelation;
    language: QLanguageQRelation;
    type: QTranslationTypeQRelation;
    parent: QOutcomeVersionTranslationQRelation;
    children: IQOneToManyRelation<QOutcomeVersionTranslation>;
}
export interface QOutcomeVersionTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QOutcomeVersionTranslationQRelation extends QImmutableActorRowQRelation<QOutcomeVersionTranslation>, QOutcomeVersionTranslationQId {
}
