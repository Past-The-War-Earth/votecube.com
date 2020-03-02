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
export interface ChosenPollRevisionTypeESelect
    extends SystemGeneratedRowESelect, ChosenPollRevisionTypeEOptionalId {
	// Non-Id Properties
	code?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ChosenPollRevisionTypeEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ChosenPollRevisionTypeEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ChosenPollRevisionTypeEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	code?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenPollRevisionTypeECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenPollRevisionTypeEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	CODE?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ChosenPollRevisionTypeECreateProperties
extends Partial<ChosenPollRevisionTypeEId>, ChosenPollRevisionTypeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ChosenPollRevisionTypeECreateColumns
extends ChosenPollRevisionTypeEId, ChosenPollRevisionTypeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QChosenPollRevisionType extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	code: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QChosenPollRevisionTypeQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QChosenPollRevisionTypeQRelation
	extends QSystemGeneratedRowQRelation<QChosenPollRevisionType>, QChosenPollRevisionTypeQId {
}

