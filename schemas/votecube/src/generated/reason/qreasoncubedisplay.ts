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
	IReasonCubeDisplay,
} from './reasoncubedisplay';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonCubeDisplayESelect
    extends AirEntityESelect, ReasonCubeDisplayEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReasonCubeDisplayEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReasonCubeDisplayEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReasonCubeDisplayEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonCubeDisplayGraph
	extends ReasonCubeDisplayEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;

	// Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonCubeDisplayEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_NUMBER?: number | IQNumberField;
	COLOR_BLUE?: number | IQNumberField;
	COLOR_GREEN?: number | IQNumberField;
	COLOR_RED?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReasonCubeDisplayECreateProperties
extends Partial<ReasonCubeDisplayEId>, ReasonCubeDisplayEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReasonCubeDisplayECreateColumns
extends ReasonCubeDisplayEId, ReasonCubeDisplayEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QReasonCubeDisplay extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;
	factorNumber: IQNumberField;
	blue: IQNumberField;
	green: IQNumberField;
	red: IQNumberField;

	// Non-Id Relations

}

// Entity Id Interface
export interface QReasonCubeDisplayQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReasonCubeDisplayQRelation
	extends QAirEntityQRelation<IReasonCubeDisplay, QReasonCubeDisplay>, QReasonCubeDisplayQId {
}