import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
import { RatingReasonTranslationECascadeGraph, RatingReasonTranslationESelect, QRatingReasonTranslation } from './qratingreasontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingReasonESelect extends SystemGeneratedRowESelect, RatingReasonEOptionalId {
    translations?: RatingReasonTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingReasonEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingReasonEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingReasonEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingReasonECascadeGraph extends SystemGeneratedRowECascadeGraph {
    translations?: RatingReasonTranslationECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingReasonEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingReasonECreateProperties extends Partial<RatingReasonEId>, RatingReasonEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingReasonECreateColumns extends RatingReasonEId, RatingReasonEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingReason extends QSystemGeneratedRow {
    id: IQNumberField;
    translations: IQOneToManyRelation<QRatingReasonTranslation>;
}
export interface QRatingReasonQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingReasonQRelation extends QSystemGeneratedRowQRelation<QRatingReason>, QRatingReasonQId {
}
