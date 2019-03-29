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

export interface IFactor {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	color?: number;
	name?: string;

	// Non-Id Relations
	parent?: IFactor;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect
    extends IEntitySelectProperties, FactorEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	color?: number | IQNumberField;
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: FactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	color?: number | IQNumberField;
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	parent?: FactorEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	FACTOR_ID?: number | IQNumberField;
	COLOR_ID?: number | IQNumberField;
	FACTOR_NAME?: string | IQStringField;
	PARENT_FACTOR_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties
extends Partial<FactorEId>, FactorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns
extends FactorEId, FactorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	color: IQNumberField;
	name: IQStringField;

	// Non-Id Relations
	parent: QFactorQRelation;

}


// Entity Id Interface
export interface QFactorQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QFactorQRelation
	extends QRelation<QFactor>, QFactorQId {
}

