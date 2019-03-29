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
	IContinent,
	ContinentEId,
	ContinentEOptionalId,
	ContinentEUpdateProperties,
	ContinentESelect,
	QContinent,
	QContinentQId,
	QContinentQRelation,
} from './qcontinent';
import {
	IState,
	StateEId,
	StateEOptionalId,
	StateEUpdateProperties,
	StateESelect,
	QState,
	QStateQId,
	QStateQRelation,
} from './qstate';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICountry {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	continent?: IContinent;
	states?: IState[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryESelect
    extends IEntitySelectProperties, CountryEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	continent?: ContinentESelect;
	states?: StateESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountryEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	continent?: ContinentEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	COUNTRY_ID?: number | IQNumberField;
	COUNTRY_NAME?: string | IQStringField;
	CONTINENT_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountryECreateProperties
extends Partial<CountryEId>, CountryEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountryECreateColumns
extends CountryEId, CountryEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountry extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	continent: QContinentQRelation;
	states: IQOneToManyRelation<QState>;

}


// Entity Id Interface
export interface QCountryQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QCountryQRelation
	extends QRelation<QCountry>, QCountryQId {
}

