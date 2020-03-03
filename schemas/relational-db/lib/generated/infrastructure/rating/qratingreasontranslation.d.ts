import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
import { RatingReasonEOptionalId, RatingReasonESelect, QRatingReasonQRelation } from './qratingreason';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../qlanguage';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingReasonTranslationESelect extends SystemGeneratedRowESelect, RatingReasonTranslationEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    reason?: RatingReasonESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingReasonTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingReasonTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingReasonTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    reason?: RatingReasonEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingReasonTranslationECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingReasonTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    RATING_REASON_NAME?: string | IQStringField;
    RATING_REASON_DESCRIPTION?: string | IQStringField;
    RATING_REASON_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingReasonTranslationECreateProperties extends Partial<RatingReasonTranslationEId>, RatingReasonTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingReasonTranslationECreateColumns extends RatingReasonTranslationEId, RatingReasonTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingReasonTranslation extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    description: IQStringField;
    reason: QRatingReasonQRelation;
    language: QLanguageQRelation;
}
export interface QRatingReasonTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingReasonTranslationQRelation extends QSystemGeneratedRowQRelation<QRatingReasonTranslation>, QRatingReasonTranslationQId {
}
