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
	IReferenceRow,
	ReferenceRowECascadeGraph,
	ReferenceRowEId,
	ReferenceRowEUpdateColumns,
	ReferenceRowEUpdateProperties,
	ReferenceRowESelect,
	QReferenceRowQId,
	QReferenceRowQRelation,
	QReferenceRow,
} from '@airport/holding-pattern';
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

export interface IContinent extends IReferenceRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
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
    extends ReferenceRowESelect, ContinentEOptionalId {
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
    extends ReferenceRowEId {
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
	extends ReferenceRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ContinentECascadeGraph
	extends ReferenceRowECascadeGraph {
	// Cascading Relations
	countries?: CountryECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ContinentEUpdateColumns
	extends ReferenceRowEUpdateColumns {
	// Non-Id Columns
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
export interface QContinent extends QReferenceRow
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
export interface QContinentQId extends QReferenceRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QContinentQRelation
	extends QReferenceRowQRelation<QContinent>, QContinentQId {
}

