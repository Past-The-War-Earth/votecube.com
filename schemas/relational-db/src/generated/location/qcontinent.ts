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
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/row/qsystemgeneratedrow';
import {
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
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ContinentESelect
    extends SystemGeneratedRowESelect, ContinentEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	countries?: CountryESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ContinentEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ContinentEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ContinentEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ContinentECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations
	countries?: CountryECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ContinentEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
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
export interface QContinent extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	countries: IQOneToManyRelation<QCountry>;

}


// Entity Id Interface
export interface QContinentQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QContinentQRelation
	extends QSystemGeneratedRowQRelation<QContinent>, QContinentQId {
}

