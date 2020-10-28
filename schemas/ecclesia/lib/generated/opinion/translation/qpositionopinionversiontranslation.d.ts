import { IQBooleanField, IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
import { PositionOpinionVersionGraph, PositionOpinionVersionEOptionalId, PositionOpinionVersionESelect, QPositionOpinionVersionQRelation } from '../qpositionopinionversion';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationESelect extends SystemGeneratedRowESelect, PositionOpinionVersionTranslationEOptionalId {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    positionOpinionVersion?: PositionOpinionVersionESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    positionOpinionVersion?: PositionOpinionVersionEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionTranslationGraph extends PositionOpinionVersionTranslationEOptionalId, SystemGeneratedRowGraph {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    positionOpinionVersion?: PositionOpinionVersionGraph;
    language?: LanguageGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    IS_ORIGINAL?: boolean | IQBooleanField;
    TITLE?: string | IQStringField;
    TEXT?: string | IQStringField;
    POSITION_OPINION_VERSION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationECreateProperties extends Partial<PositionOpinionVersionTranslationEId>, PositionOpinionVersionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionTranslationECreateColumns extends PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersionTranslation extends QSystemGeneratedRow {
    id: IQNumberField;
    original: IQBooleanField;
    title: IQStringField;
    text: IQStringField;
    positionOpinionVersion: QPositionOpinionVersionQRelation;
    language: QLanguageQRelation;
}
export interface QPositionOpinionVersionTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QPositionOpinionVersionTranslationQRelation extends QSystemGeneratedRowQRelation<QPositionOpinionVersionTranslation>, QPositionOpinionVersionTranslationQId {
}
//# sourceMappingURL=qpositionopinionversiontranslation.d.ts.map