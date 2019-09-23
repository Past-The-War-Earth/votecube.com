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
	ITown,
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

export interface IPollLTFTown {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	town?: ITown;
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
export interface PollLTFTownESelect
    extends IEntitySelectProperties, PollLTFTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	town?: TownESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollLTFTownEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollLTFTownEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollLTFTownEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	town?: TownEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollLTFTownECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollLTFTownEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	TOWN_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollLTFTownECreateProperties
extends Partial<PollLTFTownEId>, PollLTFTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollLTFTownECreateColumns
extends PollLTFTownEId, PollLTFTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollLTFTown extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	town: QTownQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;

}


// Entity Id Interface
export interface QPollLTFTownQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollLTFTownQRelation
	extends IQRelation<QPollLTFTown>, QPollLTFTownQId {
}

