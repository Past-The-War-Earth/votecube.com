import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { LabelGraph, LabelEOptionalId, LabelESelect, QLabelQRelation } from '../qlabel';
import { IIdeaLabel } from './idealabel';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaLabelESelect extends AirEntityESelect, IdeaLabelEOptionalId {
    idea?: IdeaESelect;
    label?: LabelESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaLabelEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaLabelEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaLabelEUpdateProperties extends AirEntityEUpdateProperties {
    idea?: IdeaEOptionalId;
    label?: LabelEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaLabelGraph extends IdeaLabelEOptionalId, AirEntityGraph {
    idea?: IdeaGraph;
    label?: LabelGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaLabelEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaLabel extends QAirEntity {
    idea: QIdeaQRelation;
    label: QLabelQRelation;
}
export interface QIdeaLabelQId extends QAirEntityQId {
}
export interface QIdeaLabelQRelation extends QAirEntityQRelation<IIdeaLabel, QIdeaLabel>, QIdeaLabelQId {
}
//# sourceMappingURL=qidealabel.d.ts.map