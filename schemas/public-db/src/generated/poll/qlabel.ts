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

export interface ILabel {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface LabelESelect
    extends IEntitySelectProperties, LabelEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LabelEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface LabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LabelEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface LabelEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	LABEL_ID?: number | IQNumberField;
	NAME?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LabelECreateProperties
extends Partial<LabelEId>, LabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LabelECreateColumns
extends LabelEId, LabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QLabel extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	name: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QLabelQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QLabelQRelation
	extends QRelation<QLabel>, QLabelQId {
}

