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
	ISystemGeneratedRow,
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/qsystemgeneratedrow';
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
} from './qtown';
import {
	ICountry,
	CountryECascadeGraph,
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

export interface ICountryTown extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations
	town: ITown;

	// Non-Id Properties

	// Non-Id Relations
	country?: ICountry;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryTownESelect
    extends SystemGeneratedRowESelect, CountryTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	town?: TownESelect;

  // Non-Id relations (including OneToMany's)
	country?: CountryESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryTownEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only
	town: TownEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountryTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryTownEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountryEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryTownECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryTownEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	COUNTRY_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountryTownECreateProperties
extends Partial<CountryTownEId>, CountryTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountryTownECreateColumns
extends CountryTownEId, CountryTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountryTown extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations
	town: QTownQRelation;

	// Non-Id Fields

	// Non-Id Relations
	country: QCountryQRelation;

}


// Entity Id Interface
export interface QCountryTownQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations
	town: QTownQId;


}

// Entity Relation Interface
export interface QCountryTownQRelation
	extends QSystemGeneratedRowQRelation<QCountryTown>, QCountryTownQId {
}

