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
	TownECascadeGraph,
	TownEId,
	TownEOptionalId,
	TownEUpdateProperties,
	TownESelect,
	QTown,
	QTownQId,
	QTownQRelation,
} from '../../../location/qtown';
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
export interface PollRunTownESelect
    extends IEntitySelectProperties, PollRunTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	town?: TownESelect;
	run?: PollRunESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunTownEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunTownEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunTownEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	town?: TownEOptionalId;
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunTownECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunTownEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	TOWN_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunTownECreateProperties
extends Partial<PollRunTownEId>, PollRunTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunTownECreateColumns
extends PollRunTownEId, PollRunTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunTown extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	town: QTownQRelation;
	run: QPollRunQRelation;

}


// Entity Id Interface
export interface QPollRunTownQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunTownQRelation
	extends IQRelation<QPollRunTown>, QPollRunTownQId {
}

