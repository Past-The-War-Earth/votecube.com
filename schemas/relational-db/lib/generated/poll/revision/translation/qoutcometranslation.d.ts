import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../../infrastructure/row/qimmutableactorrow';
import { OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from '../qoutcome';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../../infrastructure/qlanguage';
import { TranslationTypeEOptionalId, TranslationTypeESelect, QTranslationTypeQRelation } from '../../../infrastructure/qtranslationtype';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeTranslationESelect extends ImmutableActorRowESelect, OutcomeTranslationEOptionalId {
    name?: string | IQStringField;
    outcomeVersion?: OutcomeESelect;
    language?: LanguageESelect;
    type?: TranslationTypeESelect;
    parent?: OutcomeTranslationESelect;
    children?: OutcomeTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    outcomeVersion?: OutcomeEOptionalId;
    language?: LanguageEOptionalId;
    type?: TranslationTypeEOptionalId;
    parent?: OutcomeTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeTranslationECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: OutcomeTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    OUTCOME_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    TRANSLATION_TYPE_ID?: number | IQNumberField;
    PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeTranslationECreateProperties extends Partial<OutcomeTranslationEId>, OutcomeTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeTranslationECreateColumns extends OutcomeTranslationEId, OutcomeTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeTranslation extends QImmutableActorRow {
    id: IQNumberField;
    name: IQStringField;
    outcomeVersion: QOutcomeQRelation;
    language: QLanguageQRelation;
    type: QTranslationTypeQRelation;
    parent: QOutcomeTranslationQRelation;
    children: IQOneToManyRelation<QOutcomeTranslation>;
}
export interface QOutcomeTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QOutcomeTranslationQRelation extends QImmutableActorRowQRelation<QOutcomeTranslation>, QOutcomeTranslationQId {
}
