import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from '@sapoto/core';
import { IIdeaTopic } from './ideatopic';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaTopicESelect extends AirEntityESelect, IdeaTopicEOptionalId {
    idea?: IdeaESelect;
    topic?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaTopicEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaTopicEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaTopicEUpdateProperties extends AirEntityEUpdateProperties {
    idea?: IdeaEOptionalId;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaTopicGraph extends IdeaTopicEOptionalId, AirEntityGraph {
    idea?: IdeaGraph;
    topic?: TopicGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaTopicEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaTopic extends QAirEntity {
    idea: QIdeaQRelation;
    topic: QTopicQRelation;
}
export interface QIdeaTopicQId extends QAirEntityQId {
}
export interface QIdeaTopicQRelation extends QAirEntityQRelation<IIdeaTopic, QIdeaTopic>, QIdeaTopicQId {
}
//# sourceMappingURL=qideatopic.d.ts.map