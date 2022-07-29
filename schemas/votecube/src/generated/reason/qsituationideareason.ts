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
	SituationIdeaGraph,
	SituationIdeaEId,
	SituationIdeaEOptionalId,
	SituationIdeaEUpdateProperties,
	SituationIdeaESelect,
	QSituationIdea,
	QSituationIdeaQId,
	QSituationIdeaQRelation,
} from '../idea/qsituationidea';
import {
	ISituationIdea,
} from '../idea/situationidea';
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
	ISituationIdeaReason,
} from './situationideareason';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationIdeaReasonESelect
    extends AirEntityESelect, SituationIdeaReasonEOptionalId {
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaESelect;
	reason?: ReasonESelect;
	reasonCubeDisplay?: ReasonCubeDisplayESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationIdeaReasonEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationIdeaReasonEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationIdeaReasonEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Non-Id Relations - _localIds only & no OneToMany's
	situationIdea?: SituationIdeaEOptionalId;
	reason?: ReasonEOptionalId;
	reasonCubeDisplay?: ReasonCubeDisplayEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationIdeaReasonGraph
	extends SituationIdeaReasonEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	isPositiveOutcome?: boolean | IQBooleanField;

	// Relations
	situationIdea?: SituationIdeaGraph;
	reason?: ReasonGraph;
	reasonCubeDisplay?: ReasonCubeDisplayGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationIdeaReasonEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	IS_POSITIVE_OUTCOME?: boolean | IQBooleanField;
	SITUATION_IDEAS_RID_1?: number | IQNumberField;
	SITUATION_IDEAS_AID_1?: number | IQNumberField;
	SITUATION_IDEAS_ARID_1?: number | IQNumberField;
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
export interface SituationIdeaReasonECreateProperties
extends Partial<SituationIdeaReasonEId>, SituationIdeaReasonEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationIdeaReasonECreateColumns
extends SituationIdeaReasonEId, SituationIdeaReasonEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationIdeaReason extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	isPositiveOutcome: IQBooleanField;

	// Non-Id Relations
	situationIdea: QSituationIdeaQRelation;
	reason: QReasonQRelation;
	reasonCubeDisplay: QReasonCubeDisplayQRelation;

}

// Entity Id Interface
export interface QSituationIdeaReasonQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationIdeaReasonQRelation
	extends QAirEntityQRelation<ISituationIdeaReason, QSituationIdeaReason>, QSituationIdeaReasonQId {
}