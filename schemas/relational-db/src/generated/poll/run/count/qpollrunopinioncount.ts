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
export interface PollRunOpinionCountESelect
    extends SystemGeneratedRowESelect, PollRunOpinionCountEOptionalId {
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
export interface PollRunOpinionCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunOpinionCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunOpinionCountEUpdateProperties
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
export interface PollRunOpinionCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunOpinionCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_RUN_OPINION_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunOpinionCountECreateProperties
extends Partial<PollRunOpinionCountEId>, PollRunOpinionCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunOpinionCountECreateColumns
extends PollRunOpinionCountEId, PollRunOpinionCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunOpinionCount extends QSystemGeneratedRow
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
export interface QPollRunOpinionCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunOpinionCountQRelation
	extends QSystemGeneratedRowQRelation<QPollRunOpinionCount>, QPollRunOpinionCountQId {
}

