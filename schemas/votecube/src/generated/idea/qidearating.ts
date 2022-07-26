import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
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
} from '@airport/tarmaq-query';
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
	IIdeaRating,
} from './idearating';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaRatingESelect
    extends AirEntityESelect, IdeaRatingEOptionalId {
	// Non-Id Properties
	urgencyRating?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	situationIdea?: SituationIdeaESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaRatingEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaRatingEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaRatingEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	urgencyRating?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	idea?: IdeaEOptionalId;
	situationIdea?: SituationIdeaEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaRatingGraph
	extends IdeaRatingEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	urgencyRating?: number | IQNumberField;

	// Relations
	idea?: IdeaGraph;
	situationIdea?: SituationIdeaGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaRatingEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	URGENCY_RATING?: number | IQNumberField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;
	SITUATION_IDEAS_RID_1?: number | IQNumberField;
	SITUATION_IDEAS_AID_1?: number | IQNumberField;
	SITUATION_IDEAS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaRatingECreateProperties
extends Partial<IdeaRatingEId>, IdeaRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaRatingECreateColumns
extends IdeaRatingEId, IdeaRatingEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaRating extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	urgencyRating: IQNumberField;

	// Non-Id Relations
	idea: QIdeaQRelation;
	situationIdea: QSituationIdeaQRelation;

}

// Entity Id Interface
export interface QIdeaRatingQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaRatingQRelation
	extends QAirEntityQRelation<IIdeaRating, QIdeaRating>, QIdeaRatingQId {
}