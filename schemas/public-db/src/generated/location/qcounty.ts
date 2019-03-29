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
	IState,
	StateEId,
	StateEOptionalId,
	StateEUpdateProperties,
	StateESelect,
	QState,
	QStateQId,
	QStateQRelation,
} from './qstate';
import {
	ITown,
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

export interface ICounty {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	state?: IState;
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
export interface CountyESelect
    extends IEntitySelectProperties, CountyEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	state?: StateESelect;
	states?: TownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountyEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountyEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	state?: StateEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountyEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	COUNTY_ID?: number | IQNumberField;
	COUNTY_NAME?: string | IQStringField;
	STATE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountyECreateProperties
extends Partial<CountyEId>, CountyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountyECreateColumns
extends CountyEId, CountyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCounty extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	state: QStateQRelation;
	states: IQOneToManyRelation<QTown>;

}


// Entity Id Interface
export interface QCountyQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QCountyQRelation
	extends QRelation<QCounty>, QCountyQId {
}

