import {
	IQEntityInternal,
	IEntityIdProperties,
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
	QEntity,
	QRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IPoll,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../poll/qpoll';
import {
	ITown,
	TownEId,
	TownEOptionalId,
	TownEUpdateProperties,
	TownESelect,
	QTown,
	QTownQId,
	QTownQRelation,
} from './qtown';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollTown {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	poll?: IPoll;
	town?: ITown;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollTownESelect
    extends IEntitySelectProperties, PollTownEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	town?: TownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollTownEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollTownEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollTownEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_STATE_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	TOWN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollTownECreateProperties
extends Partial<PollTownEId>, PollTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollTownECreateColumns
extends PollTownEId, PollTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollTown extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	town: QTownQRelation;

}


// Entity Id Interface
export interface QPollTownQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollTownQRelation
	extends QRelation<QPollTown>, QPollTownQId {
}

