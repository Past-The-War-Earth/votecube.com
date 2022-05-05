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
} from '@airport/air-traffic-control';
import {
	CountyGraph,
	CountyEId,
	CountyEOptionalId,
	CountyEUpdateProperties,
	CountyESelect,
	QCounty,
	QCountyQId,
	QCountyQRelation,
} from '../../../location/qcounty';
import {
	County,
} from '../../../../ddl/location/County';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../qpollrun';
import {
	PollRun,
} from '../../../../ddl/poll/run/PollRun';
import {
	PollRunCounty,
} from '../../../../ddl/poll/run/location/PollRunCounty';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunCountyESelect
    extends IEntitySelectProperties, PollRunCountyEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountyESelect;
	run?: PollRunESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunCountyEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunCountyEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunCountyEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountyEOptionalId;
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunCountyGraph
	extends PollRunCountyEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	country?: CountyGraph;
	run?: PollRunGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunCountyEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	COUNTY_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunCountyECreateProperties
extends Partial<PollRunCountyEId>, PollRunCountyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunCountyECreateColumns
extends PollRunCountyEId, PollRunCountyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunCounty extends IQEntity<PollRunCounty>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	country: QCountyQRelation;
	run: QPollRunQRelation;

}


// Entity Id Interface
export interface QPollRunCountyQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunCountyQRelation
	extends IQRelation<PollRunCounty, QPollRunCounty>, QPollRunCountyQId {
}

