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
	IChildRepoRow,
	ChildRepoRowEId,
	ChildRepoRowEUpdateColumns,
	ChildRepoRowEUpdateProperties,
	ChildRepoRowESelect,
	QChildRepoRowQId,
	QChildRepoRowQRelation,
	QChildRepoRow,
} from '@airport/holding-pattern';
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

export interface IPollCountry extends IChildRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	pollId?: number;

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
    extends ChildRepoRowESelect, PollCountryEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountryESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollCountryEId
    extends ChildRepoRowEId {
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
	extends ChildRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountryEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollCountryEUpdateColumns
	extends ChildRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	POLL_COUNTRY_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	COUNTRY_ID?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;

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
export interface QPollCountry extends QChildRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	pollId: IQNumberField;

	// Non-Id Relations
	country: QCountryQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollCountryQId extends QChildRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollCountryQRelation
	extends QChildRepoRowQRelation<QPollCountry>, QPollCountryQId {
}

