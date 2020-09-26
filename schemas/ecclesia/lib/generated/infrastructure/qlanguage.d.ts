import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQStringField, IQEntity, IQRelation } from '@airport/air-control';
/**
 * SELECT - All fields and relations (optional).
 */
export interface LanguageESelect extends IEntitySelectProperties, LanguageEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LanguageEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface LanguageEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LanguageEUpdateProperties extends IEntityUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface LanguageGraph extends IEntitySelectProperties, LanguageEOptionalId, IEntityCascadeGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface LanguageEUpdateColumns extends IEntityUpdateColumns {
    LANGUAGE_NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LanguageECreateProperties extends Partial<LanguageEId>, LanguageEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LanguageECreateColumns extends LanguageEId, LanguageEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QLanguage extends IQEntity {
    id: IQNumberField;
    name: IQStringField;
}
export interface QLanguageQId {
    id: IQNumberField;
}
export interface QLanguageQRelation extends IQRelation<QLanguage>, QLanguageQId {
}
//# sourceMappingURL=qlanguage.d.ts.map