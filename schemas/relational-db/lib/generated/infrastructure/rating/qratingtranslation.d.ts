import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from './qrating';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingTranslationESelect extends SystemGeneratedRowESelect, RatingTranslationEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    rating?: RatingESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    rating?: RatingEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingTranslationECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    RATING_NAME?: string | IQStringField;
    RATING_DESCRIPTION?: string | IQStringField;
    RATING_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingTranslationECreateProperties extends Partial<RatingTranslationEId>, RatingTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingTranslationECreateColumns extends RatingTranslationEId, RatingTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingTranslation extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    description: IQStringField;
    rating: QRatingQRelation;
    language: QLanguageQRelation;
}
export interface QRatingTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingTranslationQRelation extends QSystemGeneratedRowQRelation<QRatingTranslation>, QRatingTranslationQId {
}
