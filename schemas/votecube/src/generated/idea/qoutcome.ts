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
	IOutcome,
} from './outcome';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect
    extends AirEntityESelect, OutcomeEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeGraph
	extends OutcomeEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	NAME?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties
extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns
extends OutcomeEId, OutcomeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QOutcomeQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeQRelation
	extends QAirEntityQRelation<IOutcome, QOutcome>, QOutcomeQId {
}

