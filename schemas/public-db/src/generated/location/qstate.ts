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


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IState extends IReferenceRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	country?: ICountry;
	states?: ITown[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface StateESelect
    extends ReferenceRowESelect, StateEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountryESelect;
	states?: TownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface StateEId
    extends ReferenceRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface StateEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface StateEUpdateProperties
	extends ReferenceRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountryEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface StateECascadeGraph
	extends ReferenceRowECascadeGraph {
	// Cascading Relations
	states?: TownECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface StateEUpdateColumns
	extends ReferenceRowEUpdateColumns {
	// Non-Id Columns
	STATE_NAME?: string | IQStringField;
	COUNTRY_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface StateECreateProperties
extends Partial<StateEId>, StateEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface StateECreateColumns
extends StateEId, StateEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QState extends QReferenceRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	country: QCountryQRelation;
	states: IQOneToManyRelation<QTown>;

}


// Entity Id Interface
export interface QStateQId extends QReferenceRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QStateQRelation
	extends QReferenceRowQRelation<QState>, QStateQId {
}

