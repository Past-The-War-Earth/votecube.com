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
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../../infrastructure/row/qsystemgeneratedrow';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../qpollrun';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunVoteCountESelect
    extends SystemGeneratedRowESelect, PollRunVoteCountEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	run?: PollRunESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunVoteCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunVoteCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunVoteCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunVoteCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunVoteCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_RUN_VOTE_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunVoteCountECreateProperties
extends Partial<PollRunVoteCountEId>, PollRunVoteCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunVoteCountECreateColumns
extends PollRunVoteCountEId, PollRunVoteCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunVoteCount extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	count: IQNumberField;

	// Non-Id Relations
	run: QPollRunQRelation;

}


// Entity Id Interface
export interface QPollRunVoteCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunVoteCountQRelation
	extends QSystemGeneratedRowQRelation<QPollRunVoteCount>, QPollRunVoteCountQId {
}

