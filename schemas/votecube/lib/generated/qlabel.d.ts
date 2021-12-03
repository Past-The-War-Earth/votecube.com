import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { Label } from '../ddl/Label';
/**
 * SELECT - All fields and relations (optional).
 */
export interface LabelESelect extends RepositoryEntityESelect, LabelEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LabelEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface LabelEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LabelEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface LabelGraph extends LabelEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface LabelEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LabelECreateProperties extends Partial<LabelEId>, LabelEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LabelECreateColumns extends LabelEId, LabelEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QLabel extends QRepositoryEntity<Label> {
    name: IQStringField;
}
export interface QLabelQId extends QRepositoryEntityQId {
}
export interface QLabelQRelation extends QRepositoryEntityQRelation<Label, QLabel>, QLabelQId {
}
//# sourceMappingURL=qlabel.d.ts.map