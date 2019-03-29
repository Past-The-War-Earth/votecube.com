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


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITown {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	state?: IState;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TownESelect
    extends IEntitySelectProperties, TownEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	state?: StateESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TownEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TownEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TownEUpdateProperties
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
export interface TownEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	TOWN_ID?: number | IQNumberField;
	TOWN_NAME?: string | IQStringField;
	STATE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TownECreateProperties
extends Partial<TownEId>, TownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TownECreateColumns
extends TownEId, TownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTown extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	state: QStateQRelation;

}


// Entity Id Interface
export interface QTownQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTownQRelation
	extends QRelation<QTown>, QTownQId {
}

