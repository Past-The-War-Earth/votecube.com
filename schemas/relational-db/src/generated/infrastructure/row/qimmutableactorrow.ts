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
	ActorGraph,
	ActorEId,
	ActorEOptionalId,
	ActorEUpdateProperties,
	ActorESelect,
	QActor,
	QActorQId,
	QActorQRelation,
} from '../../user/qactor';
import {
	UserAccountGraph,
	UserAccountEId,
	UserAccountEOptionalId,
	UserAccountEUpdateProperties,
	UserAccountESelect,
	QUserAccount,
	QUserAccountQId,
	QUserAccountQRelation,
} from '../../user/quseraccount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ImmutableActorRowESelect
    extends ImmutableRowESelect, ImmutableActorRowEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	actor?: ActorESelect;
	userAccount?: UserAccountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ImmutableActorRowEId
    extends ImmutableRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ImmutableActorRowEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ImmutableActorRowEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	actor?: ActorEOptionalId;
	userAccount?: UserAccountEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ImmutableActorRowGraph
	extends ImmutableRowESelect, ImmutableActorRowEOptionalId, ImmutableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	actor?: ActorGraph;
	userAccount?: UserAccountGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ImmutableActorRowEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ImmutableActorRowECreateProperties
extends Partial<ImmutableActorRowEId>, ImmutableActorRowEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ImmutableActorRowECreateColumns
extends ImmutableActorRowEId, ImmutableActorRowEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QImmutableActorRow extends QImmutableRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	actor: QActorQRelation;
	userAccount: QUserAccountQRelation;

}


// Entity Id Interface
export interface QImmutableActorRowQId extends QImmutableRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QImmutableActorRowQRelation<SubType extends IQEntity>
	extends QImmutableRowQRelation<SubType>, QImmutableActorRowQId {
}

