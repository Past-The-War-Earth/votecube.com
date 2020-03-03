import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface DesignPatternESelect extends SystemGeneratedRowESelect, DesignPatternEOptionalId {
    name?: string | IQStringField;
    cssClass?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface DesignPatternEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface DesignPatternEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface DesignPatternEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    cssClass?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface DesignPatternECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface DesignPatternEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    DESIGN_PATTERN_NAME?: string | IQStringField;
    DESIGN_PATTERN_CSS_CLASS?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface DesignPatternECreateProperties extends Partial<DesignPatternEId>, DesignPatternEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface DesignPatternECreateColumns extends DesignPatternEId, DesignPatternEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QDesignPattern extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    cssClass: IQStringField;
}
export interface QDesignPatternQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QDesignPatternQRelation extends QSystemGeneratedRowQRelation<QDesignPattern>, QDesignPatternQId {
}
