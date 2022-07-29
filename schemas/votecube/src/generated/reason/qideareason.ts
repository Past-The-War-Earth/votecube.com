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
} from '../idea/qidea';
import {
	IIdea,
} from '../idea/idea';
import {
	ReasonGraph,
	ReasonEId,
	ReasonEOptionalId,
	ReasonEUpdateProperties,
	ReasonESelect,
	QReason,
	QReasonQId,
	QReasonQRelation,
} from './qreason';
import {
	IReason,
} from './reason';
import {
	ReasonCubeDisplayGraph,
	ReasonCubeDisplayEId,
	ReasonCubeDisplayEOptionalId,
	ReasonCubeDisplayEUpdateProperties,
	ReasonCubeDisplayESelect,
	QReasonCubeDisplay,
	QReasonCubeDisplayQId,
	QReasonCubeDisplayQRelation,
} from './qreasoncubedisplay';
import {
	IReasonCubeDisplay,
} from './reasoncubedisplay';
import {
	IIdeaReason,
} from './ideareason';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaReasonESelect
    extends AirEntityESelect, IdeaReasonEOptionalId {
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	reason?: ReasonESelect;
	reasonCubeDisplay?: ReasonCubeDisplayESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaReasonEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaReasonEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaReasonEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Non-Id Relations - _localIds only & no OneToMany's
	idea?: IdeaEOptionalId;
	reason?: ReasonEOptionalId;
	reasonCubeDisplay?: ReasonCubeDisplayEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaReasonGraph
	extends IdeaReasonEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Relations
	idea?: IdeaGraph;
	reason?: ReasonGraph;
	reasonCubeDisplay?: ReasonCubeDisplayGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaReasonEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	IS_POSITIVE_OUTCOME?: boolean | IQBooleanField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;
	REASONS_RID_1?: number | IQNumberField;
	REASONS_AID_1?: number | IQNumberField;
	REASONS_ARID_1?: number | IQNumberField;
	REASONS_CUBE_DISPLAYS_RID_1?: number | IQNumberField;
	REASONS_CUBE_DISPLAYS_AID_1?: number | IQNumberField;
	REASONS_CUBE_DISPLAYS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaReasonECreateProperties
extends Partial<IdeaReasonEId>, IdeaReasonEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaReasonECreateColumns
extends IdeaReasonEId, IdeaReasonEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaReason extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	isPositiveOutcome: IQBooleanField;

	// Non-Id Relations
	idea: QIdeaQRelation;
	reason: QReasonQRelation;
	reasonCubeDisplay: QReasonCubeDisplayQRelation;

}

// Entity Id Interface
export interface QIdeaReasonQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaReasonQRelation
	extends QAirEntityQRelation<IIdeaReason, QIdeaReason>, QIdeaReasonQId {
}