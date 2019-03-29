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


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IContinent {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	countries?: ICountry[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ContinentESelect
    extends IEntitySelectProperties, ContinentEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	countries?: CountryESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ContinentEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ContinentEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ContinentEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ContinentEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	CONTINENT_ID?: number | IQNumberField;
	CONTINENT_NAME?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ContinentECreateProperties
extends Partial<ContinentEId>, ContinentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ContinentECreateColumns
extends ContinentEId, ContinentEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QContinent extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	countries: IQOneToManyRelation<QCountry>;

}


// Entity Id Interface
export interface QContinentQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QContinentQRelation
	extends QRelation<QContinent>, QContinentQId {
}

