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


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPosition {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	parent?: IPosition;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect
    extends IEntitySelectProperties, PositionEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	parent?: PositionEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POSITION_ID?: number | IQNumberField;
	POSITION_DESCRIPTION?: string | IQStringField;
	PARENT_POSITION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionECreateProperties
extends Partial<PositionEId>, PositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionECreateColumns
extends PositionEId, PositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPosition extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	parent: QPositionQRelation;

}


// Entity Id Interface
export interface QPositionQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPositionQRelation
	extends QRelation<QPosition>, QPositionQId {
}

