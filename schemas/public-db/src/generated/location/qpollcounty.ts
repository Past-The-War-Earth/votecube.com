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
	ICounty,
	CountyEId,
	CountyEOptionalId,
	CountyEUpdateProperties,
	CountyESelect,
	QCounty,
	QCountyQId,
	QCountyQRelation,
} from './qcounty';
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


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollCounty {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	country?: ICounty;
	poll?: IPoll;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollCountyESelect
    extends IEntitySelectProperties, PollCountyEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountyESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollCountyEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollCountyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollCountyEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountyEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollCountyEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_COUNTY_ID?: number | IQNumberField;
	COUNTY_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollCountyECreateProperties
extends Partial<PollCountyEId>, PollCountyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollCountyECreateColumns
extends PollCountyEId, PollCountyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollCounty extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	country: QCountyQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollCountyQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollCountyQRelation
	extends QRelation<QPollCounty>, QPollCountyQId {
}

