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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/row/qsystemgeneratedrow';
import {
	CountryGraph,
	CountryEId,
	CountryEOptionalId,
	CountryEUpdateProperties,
	CountryESelect,
	QCountry,
	QCountryQId,
	QCountryQRelation,
} from './qcountry';
import {
	TownGraph,
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
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryTownESelect
    extends SystemGeneratedRowESelect, CountryTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	country?: CountryESelect;
	town?: TownESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryTownEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only
	country: CountryEId;
	town: TownEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountryTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	country?: CountryEOptionalId;
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryTownEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryTownGraph
	extends CountryTownEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	country?: CountryGraph;
	town?: TownGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryTownEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;

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
	country: QCountryQRelation;
	town: QTownQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QCountryTownQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations
	country: QCountryQId;
	town: QTownQId;


}

// Entity Relation Interface
export interface QCountryTownQRelation
	extends QSystemGeneratedRowQRelation<QCountryTown>, QCountryTownQId {
}

