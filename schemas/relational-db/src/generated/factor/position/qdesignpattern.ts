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
} from '../../infrastructure/row/qsystemgeneratedrow';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface DesignPatternESelect
    extends SystemGeneratedRowESelect, DesignPatternEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	cssClass?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface DesignPatternEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface DesignPatternEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface DesignPatternEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	cssClass?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface DesignPatternECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface DesignPatternEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	DESIGN_PATTERN_NAME?: string | IQStringField;
	DESIGN_PATTERN_CSS_CLASS?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface DesignPatternECreateProperties
extends Partial<DesignPatternEId>, DesignPatternEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface DesignPatternECreateColumns
extends DesignPatternEId, DesignPatternEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QDesignPattern extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	cssClass: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QDesignPatternQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QDesignPatternQRelation
	extends QSystemGeneratedRowQRelation<QDesignPattern>, QDesignPatternQId {
}

