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
	ICountry,
	CountryEId,
	CountryEOptionalId,
	CountryEUpdateProperties,
	CountryESelect,
	QCountry,
	QCountryQId,
	QCountryQRelation,
} from './qcountry';
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

export interface IPollCountry {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	country?: ICountry;
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
export interface PollCountryESelect
    extends IEntitySelectProperties, PollCountryEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountryESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollCountryEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollCountryEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollCountryEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountryEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollCountryEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_COUNTRY_ID?: number | IQNumberField;
	COUNTRY_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollCountryECreateProperties
extends Partial<PollCountryEId>, PollCountryEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollCountryECreateColumns
extends PollCountryEId, PollCountryEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollCountry extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	country: QCountryQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollCountryQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollCountryQRelation
	extends QRelation<QPollCountry>, QPollCountryQId {
}

