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
	IImmutableActorRow,
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from './qimmutableactorrow';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IMutableActorRow extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	updatedAt?: Date;

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
export interface MutableActorRowESelect
    extends ImmutableActorRowESelect, MutableActorRowEOptionalId {
	// Non-Id Properties
	updatedAt?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface MutableActorRowEId
    extends ImmutableActorRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface MutableActorRowEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface MutableActorRowEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	updatedAt?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface MutableActorRowECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface MutableActorRowEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface MutableActorRowECreateProperties
extends Partial<MutableActorRowEId>, MutableActorRowEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface MutableActorRowECreateColumns
extends MutableActorRowEId, MutableActorRowEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QMutableActorRow extends QImmutableActorRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	updatedAt: IQDateField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QMutableActorRowQId extends QImmutableActorRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QMutableActorRowQRelation<SubType extends IQEntity>
	extends QImmutableActorRowQRelation<QMutableActorRow>, QMutableActorRowQId {
}

