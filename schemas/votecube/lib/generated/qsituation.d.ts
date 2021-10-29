import { IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { CategoryGraph, CategoryEOptionalId, CategoryESelect, QCategoryQRelation } from './qcategory';
import { Situation } from '../ddl/Situation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect extends RepositoryEntityESelect, SituationEOptionalId {
    theme?: CategoryESelect;
    parent?: SituationESelect;
    children?: SituationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties extends RepositoryEntityEUpdateProperties {
    theme?: CategoryEOptionalId;
    parent?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph extends SituationEOptionalId, RepositoryEntityGraph {
    theme?: CategoryGraph;
    parent?: SituationGraph;
    children?: SituationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    CATEGORIES_RID?: number | IQNumberField;
    CATEGORIES_AID?: number | IQNumberField;
    CATEGORIES_ARID?: number | IQNumberField;
    SITUATIONS_RID?: number | IQNumberField;
    SITUATIONS_AID?: number | IQNumberField;
    SITUATIONS_ARID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties extends Partial<SituationEId>, SituationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns extends SituationEId, SituationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QRepositoryEntity<Situation> {
    theme: QCategoryQRelation;
    parent: QSituationQRelation;
    children: IQOneToManyRelation<Situation, QSituation>;
}
export interface QSituationQId extends QRepositoryEntityQId {
}
export interface QSituationQRelation extends QRepositoryEntityQRelation<Situation, QSituation>, QSituationQId {
}
//# sourceMappingURL=qsituation.d.ts.map