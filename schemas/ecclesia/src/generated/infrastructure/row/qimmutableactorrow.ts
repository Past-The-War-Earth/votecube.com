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
	UserAccountGraph,
	UserAccountEId,
	UserAccountEOptionalId,
	UserAccountEUpdateProperties,
	UserAccountESelect,
	QUserAccount,
	QUserAccountQId,
	QUserAccountQRelation,
} from '../../user/quseraccount';
import {
	UserAccount,
} from '../../../ddl/user/UserAccount';
import {
	ImmutableActorRow,
} from '../../../ddl/infrastructure/row/ImmutableActorRow';


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
	userAccount?: UserAccountEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ImmutableActorRowGraph
	extends ImmutableActorRowEOptionalId, ImmutableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
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
export interface QImmutableActorRow<T> extends QImmutableRow<T>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userAccount: QUserAccountQRelation;

}


// Entity Id Interface
export interface QImmutableActorRowQId extends QImmutableRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QImmutableActorRowQRelation<SubType, SubQType extends IQEntity<SubType>>
	extends QImmutableRowQRelation<SubType, SubQType>, QImmutableActorRowQId {
}

