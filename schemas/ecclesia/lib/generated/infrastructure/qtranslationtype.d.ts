import { IQDateField, IQNumberField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from './row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TranslationTypeESelect extends SystemGeneratedRowESelect, TranslationTypeEOptionalId {
    code?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TranslationTypeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface TranslationTypeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TranslationTypeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    code?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TranslationTypeGraph extends TranslationTypeEOptionalId, SystemGeneratedRowGraph {
    code?: number | IQNumberField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TranslationTypeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    TRANSLATION_TYPE_CODE?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TranslationTypeECreateProperties extends Partial<TranslationTypeEId>, TranslationTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TranslationTypeECreateColumns extends TranslationTypeEId, TranslationTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTranslationType extends QSystemGeneratedRow {
    id: IQNumberField;
    code: IQNumberField;
}
export interface QTranslationTypeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QTranslationTypeQRelation extends QSystemGeneratedRowQRelation<QTranslationType>, QTranslationTypeQId {
}
//# sourceMappingURL=qtranslationtype.d.ts.map