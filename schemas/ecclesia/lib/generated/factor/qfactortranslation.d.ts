import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactor, QFactorQRelation } from './qfactor';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../infrastructure/qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorTranslationESelect extends ImmutableActorRowESelect, FactorTranslationEOptionalId {
    name?: string | IQStringField;
    factor?: FactorESelect;
    language?: LanguageESelect;
    parent?: FactorTranslationESelect;
    children?: FactorTranslationESelect;
    childFactors?: FactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    factor?: FactorEOptionalId;
    language?: LanguageEOptionalId;
    parent?: FactorTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorTranslationGraph extends FactorTranslationEOptionalId, ImmutableActorRowGraph {
    name?: string | IQStringField;
    factor?: FactorGraph;
    language?: LanguageGraph;
    parent?: FactorTranslationGraph;
    children?: FactorTranslationGraph[];
    childFactors?: FactorGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    FACTOR_NAME?: string | IQStringField;
    FACTOR_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorTranslationECreateProperties extends Partial<FactorTranslationEId>, FactorTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorTranslationECreateColumns extends FactorTranslationEId, FactorTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorTranslation extends QImmutableActorRow {
    id: IQNumberField;
    name: IQStringField;
    factor: QFactorQRelation;
    language: QLanguageQRelation;
    parent: QFactorTranslationQRelation;
    children: IQOneToManyRelation<QFactorTranslation>;
    childFactors: IQOneToManyRelation<QFactor>;
}
export interface QFactorTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorTranslationQRelation extends QImmutableActorRowQRelation<QFactorTranslation>, QFactorTranslationQId {
}
//# sourceMappingURL=qfactortranslation.d.ts.map