import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQRepositoryEntityOneToManyRelation,
	IQRepositoryEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	IdeaGraph,
	IdeaEId,
	IdeaEOptionalId,
	IdeaEUpdateProperties,
	IdeaESelect,
	QIdea,
	QIdeaQId,
	QIdeaQRelation,
} from './qidea';
import {
	IIdea,
} from './idea';
import {
	TopicGraph,
	TopicEId,
	TopicEOptionalId,
	TopicEUpdateProperties,
	TopicESelect,
	QTopic,
	QTopicQId,
	QTopicQRelation,
	ITopic,
} from '@sapoto/core';
import {
	IIdeaTopic,
} from './ideatopic';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaTopicESelect
    extends IEntitySelectProperties, IdeaTopicEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	topic?: TopicESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaTopicEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaTopicEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaTopicEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	idea?: IdeaEOptionalId;
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaTopicGraph
	extends IdeaTopicEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	idea?: IdeaGraph;
	topic?: TopicGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaTopicEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
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
export interface IdeaTopicECreateProperties
extends Partial<IdeaTopicEId>, IdeaTopicEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaTopicECreateColumns
extends IdeaTopicEId, IdeaTopicEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaTopic extends IQEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	idea: QIdeaQRelation;
	topic: QTopicQRelation;

}


// Entity Id Interface
export interface QIdeaTopicQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaTopicQRelation
	extends IQRelation<QIdeaTopic>, QIdeaTopicQId {
}

