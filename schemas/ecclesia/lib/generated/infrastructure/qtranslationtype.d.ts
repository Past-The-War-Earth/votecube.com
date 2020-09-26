import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-control';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TranslationTypeESelect extends IEntitySelectProperties, TranslationTypeEOptionalId {
    code?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TranslationTypeEId extends IEntityIdProperties {
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
export interface TranslationTypeEUpdateProperties extends IEntityUpdateProperties {
    code?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TranslationTypeGraph extends IEntitySelectProperties, TranslationTypeEOptionalId, IEntityCascadeGraph {
    code?: number | IQNumberField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TranslationTypeEUpdateColumns extends IEntityUpdateColumns {
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
export interface QTranslationType extends IQEntity {
    id: IQNumberField;
    code: IQNumberField;
}
export interface QTranslationTypeQId {
    id: IQNumberField;
}
export interface QTranslationTypeQRelation extends IQRelation<QTranslationType>, QTranslationTypeQId {
}
//# sourceMappingURL=qtranslationtype.d.ts.map