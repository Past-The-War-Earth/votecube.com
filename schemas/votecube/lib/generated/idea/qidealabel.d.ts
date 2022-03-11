import { IQNumberField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { LabelGraph, LabelEOptionalId, LabelESelect, QLabelQRelation } from '../qlabel';
import { IdeaLabel } from '../../ddl/idea/IdeaLabel';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaLabelESelect extends RepositoryEntityESelect, IdeaLabelEOptionalId {
    idea?: IdeaESelect;
    label?: LabelESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaLabelEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaLabelEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaLabelEUpdateProperties extends RepositoryEntityEUpdateProperties {
    idea?: IdeaEOptionalId;
    label?: LabelEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaLabelGraph extends IdeaLabelEOptionalId, RepositoryEntityGraph {
    idea?: IdeaGraph;
    label?: LabelGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaLabelEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    LABELS_RID_1?: number | IQNumberField;
    LABELS_AID_1?: number | IQNumberField;
    LABELS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaLabelECreateProperties extends Partial<IdeaLabelEId>, IdeaLabelEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaLabelECreateColumns extends IdeaLabelEId, IdeaLabelEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaLabel extends QRepositoryEntity<IdeaLabel> {
    idea: QIdeaQRelation;
    label: QLabelQRelation;
}
export interface QIdeaLabelQId extends QRepositoryEntityQId {
}
export interface QIdeaLabelQRelation extends QRepositoryEntityQRelation<IdeaLabel, QIdeaLabel>, QIdeaLabelQId {
}
//# sourceMappingURL=qidealabel.d.ts.map