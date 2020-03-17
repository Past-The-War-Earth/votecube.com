import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ThemeESelect extends SystemGeneratedRowESelect, ThemeEOptionalId {
    name?: string | IQStringField;
    ageSuitability?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ThemeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface ThemeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ThemeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    ageSuitability?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ThemeECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ThemeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    NAME?: string | IQStringField;
    AGE_SUITABILITY?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ThemeECreateProperties extends Partial<ThemeEId>, ThemeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ThemeECreateColumns extends ThemeEId, ThemeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTheme extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    ageSuitability: IQNumberField;
}
export interface QThemeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QThemeQRelation extends QSystemGeneratedRowQRelation<QTheme>, QThemeQId {
}
