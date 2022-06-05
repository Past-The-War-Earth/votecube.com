import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-traffic-control';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from '@sapoto/core';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaTopicESelect extends IEntitySelectProperties, IdeaTopicEOptionalId {
    idea?: IdeaESelect;
    topic?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaTopicEId extends IEntityIdProperties {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaTopicEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaTopicEUpdateProperties extends IEntityUpdateProperties {
    idea?: IdeaEOptionalId;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaTopicGraph extends IdeaTopicEOptionalId, IEntityCascadeGraph {
    idea?: IdeaGraph;
    topic?: TopicGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaTopicEUpdateColumns extends IEntityUpdateColumns {
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaTopicECreateProperties extends Partial<IdeaTopicEId>, IdeaTopicEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaTopicECreateColumns extends IdeaTopicEId, IdeaTopicEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaTopic extends IQEntity {
    idea: QIdeaQRelation;
    topic: QTopicQRelation;
}
export interface QIdeaTopicQId {
}
export interface QIdeaTopicQRelation extends IQRelation<QIdeaTopic>, QIdeaTopicQId {
}
//# sourceMappingURL=qideatopic.d.ts.map