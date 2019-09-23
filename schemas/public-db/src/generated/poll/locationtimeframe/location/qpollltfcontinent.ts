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
	IContinent,
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
	IPollLocationTimeFrame,
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../qpolllocationtimeframe';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFContinent {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	continent?: IContinent;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollLTFContinentESelect
    extends IEntitySelectProperties, PollLTFContinentEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	continent?: ContinentESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollLTFContinentEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollLTFContinentEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollLTFContinentEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	continent?: ContinentEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollLTFContinentECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollLTFContinentEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	CONTINENT_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollLTFContinentECreateProperties
extends Partial<PollLTFContinentEId>, PollLTFContinentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollLTFContinentECreateColumns
extends PollLTFContinentEId, PollLTFContinentEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollLTFContinent extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	continent: QContinentQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;

}


// Entity Id Interface
export interface QPollLTFContinentQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollLTFContinentQRelation
	extends IQRelation<QPollLTFContinent>, QPollLTFContinentQId {
}

