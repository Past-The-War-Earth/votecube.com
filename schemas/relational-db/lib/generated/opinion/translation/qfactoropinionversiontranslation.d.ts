import { IQBooleanField, IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
import { FactorOpinionVersionEOptionalId, FactorOpinionVersionESelect, QFactorOpinionVersionQRelation } from '../qfactoropinionversion';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionTranslationESelect extends SystemGeneratedRowESelect, FactorOpinionVersionTranslationEOptionalId {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    factorOpinionVersion?: FactorOpinionVersionESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    factorOpinionVersion?: FactorOpinionVersionEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionTranslationECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    IS_ORIGINAL?: boolean | IQBooleanField;
    TITLE?: string | IQStringField;
    TEXT?: string | IQStringField;
    FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionTranslationECreateProperties extends Partial<FactorOpinionVersionTranslationEId>, FactorOpinionVersionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionTranslationECreateColumns extends FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersionTranslation extends QSystemGeneratedRow {
    id: IQNumberField;
    original: IQBooleanField;
    title: IQStringField;
    text: IQStringField;
    factorOpinionVersion: QFactorOpinionVersionQRelation;
    language: QLanguageQRelation;
}
export interface QFactorOpinionVersionTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QFactorOpinionVersionTranslationQRelation extends QSystemGeneratedRowQRelation<QFactorOpinionVersionTranslation>, QFactorOpinionVersionTranslationQId {
}
