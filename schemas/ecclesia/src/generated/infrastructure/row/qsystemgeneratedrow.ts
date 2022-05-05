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
} from '@airport/air-traffic-control';
import {
	ImmutableRowGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from './qimmutablerow';
import {
	SystemGeneratedRow,
} from '../../../ddl/infrastructure/row/SystemGeneratedRow';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SystemGeneratedRowESelect
    extends ImmutableRowESelect, SystemGeneratedRowEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SystemGeneratedRowEId
    extends ImmutableRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SystemGeneratedRowEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SystemGeneratedRowEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SystemGeneratedRowGraph
	extends SystemGeneratedRowEOptionalId, ImmutableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SystemGeneratedRowEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SystemGeneratedRowECreateProperties
extends Partial<SystemGeneratedRowEId>, SystemGeneratedRowEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SystemGeneratedRowECreateColumns
extends SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSystemGeneratedRow<T> extends QImmutableRow<T>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QSystemGeneratedRowQId extends QImmutableRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSystemGeneratedRowQRelation<SubType, SubQType extends IQEntity<SubType>>
	extends QImmutableRowQRelation<SubType, SubQType>, QSystemGeneratedRowQId {
}

