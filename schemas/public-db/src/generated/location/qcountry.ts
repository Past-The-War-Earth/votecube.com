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
	IContinent,
	ContinentECascadeGraph,
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
	StateECascadeGraph,
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

export interface ICountry extends IReferenceRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
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
    extends ReferenceRowESelect, CountryEOptionalId {
	// Non-Id Properties
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
    extends ReferenceRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountryEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryEUpdateProperties
	extends ReferenceRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	continent?: ContinentEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryECascadeGraph
	extends ReferenceRowECascadeGraph {
	// Cascading Relations
	states?: StateECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryEUpdateColumns
	extends ReferenceRowEUpdateColumns {
	// Non-Id Columns
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
export interface QCountry extends QReferenceRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	continent: QContinentQRelation;
	states: IQOneToManyRelation<QState>;

}


// Entity Id Interface
export interface QCountryQId extends QReferenceRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QCountryQRelation
	extends QReferenceRowQRelation<QCountry>, QCountryQId {
}

