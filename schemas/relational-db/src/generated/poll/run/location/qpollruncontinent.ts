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
	ContinentECascadeGraph,
	ContinentEId,
	ContinentEOptionalId,
	ContinentEUpdateProperties,
	ContinentESelect,
	QContinent,
	QContinentQId,
	QContinentQRelation,
} from '../../../location/qcontinent';
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
export interface PollRunContinentESelect
    extends IEntitySelectProperties, PollRunContinentEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	continent?: ContinentESelect;
	run?: PollRunESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunContinentEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunContinentEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunContinentEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	continent?: ContinentEOptionalId;
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunContinentECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunContinentEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	CONTINENT_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunContinentECreateProperties
extends Partial<PollRunContinentEId>, PollRunContinentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunContinentECreateColumns
extends PollRunContinentEId, PollRunContinentEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunContinent extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	continent: QContinentQRelation;
	run: QPollRunQRelation;

}


// Entity Id Interface
export interface QPollRunContinentQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunContinentQRelation
	extends IQRelation<QPollRunContinent>, QPollRunContinentQId {
}

