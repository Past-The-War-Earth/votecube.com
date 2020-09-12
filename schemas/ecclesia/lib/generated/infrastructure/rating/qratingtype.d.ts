import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingTypeESelect extends SystemGeneratedRowESelect, RatingTypeEOptionalId {
    code?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingTypeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface RatingTypeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingTypeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    code?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingTypeGraph extends SystemGeneratedRowESelect, RatingTypeEOptionalId, SystemGeneratedRowGraph {
    code?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingTypeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    RATING_TYPE_CODE?: string | IQStringField;
    RATING_TYPE_DESCRIPTION?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingTypeECreateProperties extends Partial<RatingTypeEId>, RatingTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingTypeECreateColumns extends RatingTypeEId, RatingTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingType extends QSystemGeneratedRow {
    id: IQNumberField;
    code: IQStringField;
    description: IQStringField;
}
export interface QRatingTypeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QRatingTypeQRelation extends QSystemGeneratedRowQRelation<QRatingType>, QRatingTypeQId {
}
