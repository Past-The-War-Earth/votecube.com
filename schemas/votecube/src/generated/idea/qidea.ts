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
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	IdeaLabelGraph,
	IdeaLabelEId,
	IdeaLabelEOptionalId,
	IdeaLabelEUpdateProperties,
	IdeaLabelESelect,
	QIdeaLabel,
	QIdeaLabelQId,
	QIdeaLabelQRelation,
} from './qidealabel';
import {
	IIdeaLabel,
} from './idealabel';
import {
	SituationIdeaGraph,
	SituationIdeaEId,
	SituationIdeaEOptionalId,
	SituationIdeaEUpdateProperties,
	SituationIdeaESelect,
	QSituationIdea,
	QSituationIdeaQId,
	QSituationIdeaQRelation,
} from './qsituationidea';
import {
	ISituationIdea,
} from './situationidea';
import {
	IdeaTopicGraph,
	IdeaTopicEId,
	IdeaTopicEOptionalId,
	IdeaTopicEUpdateProperties,
	IdeaTopicESelect,
	QIdeaTopic,
	QIdeaTopicQId,
	QIdeaTopicQRelation,
} from './qideatopic';
import {
	IIdeaTopic,
} from './ideatopic';
import {
	IIdea,
} from './idea';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect
    extends AirEntityESelect, IdeaEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	children?: IdeaESelect;
	ideaLabels?: IdeaLabelESelect;
	situationIdeas?: SituationIdeaESelect;
	ideaTopics?: IdeaTopicESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph
	extends IdeaEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	children?: IdeaGraph[];
	ideaLabels?: IdeaLabelGraph[];
	situationIdeas?: SituationIdeaGraph[];
	ideaTopics?: IdeaTopicGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	NAME?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaECreateProperties
extends Partial<IdeaEId>, IdeaEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaECreateColumns
extends IdeaEId, IdeaEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdea extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	children: IQAirEntityOneToManyRelation<IIdea, QIdea>;
	ideaLabels: IQAirEntityOneToManyRelation<IIdeaLabel, QIdeaLabel>;
	situationIdeas: IQAirEntityOneToManyRelation<ISituationIdea, QSituationIdea>;
	ideaTopics: IQAirEntityOneToManyRelation<IIdeaTopic, QIdeaTopic>;

}


// Entity Id Interface
export interface QIdeaQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaQRelation
	extends QAirEntityQRelation<IIdea, QIdea>, QIdeaQId {
}

