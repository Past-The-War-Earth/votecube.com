import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { Category } from '../ddl/Category';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CategoryESelect extends RepositoryEntityESelect, CategoryEOptionalId {
    name?: string | IQStringField;
    childCategories?: CategoryESelect;
    parentCategory?: CategoryESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CategoryEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface CategoryEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CategoryEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
    parentCategory?: CategoryEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CategoryGraph extends CategoryEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    childCategories?: CategoryGraph[];
    parentCategory?: CategoryGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CategoryEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    CATEGORIES_RID_1?: number | IQNumberField;
    CATEGORIES_AID_1?: number | IQNumberField;
    CATEGORIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CategoryECreateProperties extends Partial<CategoryEId>, CategoryEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CategoryECreateColumns extends CategoryEId, CategoryEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCategory extends QRepositoryEntity<Category> {
    name: IQStringField;
    childCategories: IQOneToManyRelation<Category, QCategory>;
    parentCategory: QCategoryQRelation;
}
export interface QCategoryQId extends QRepositoryEntityQId {
}
export interface QCategoryQRelation extends QRepositoryEntityQRelation<Category, QCategory>, QCategoryQId {
}
//# sourceMappingURL=qcategory.d.ts.map