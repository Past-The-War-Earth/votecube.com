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
	ImmutableActorRowGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../infrastructure/row/qimmutableactorrow';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../poll/run/qpollrun';
import {
	VoteVersionGraph,
	VoteVersionEId,
	VoteVersionEOptionalId,
	VoteVersionEUpdateProperties,
	VoteVersionESelect,
	QVoteVersion,
	QVoteVersionQId,
	QVoteVersionQRelation,
} from './qvoteversion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteESelect
    extends ImmutableActorRowESelect, VoteEOptionalId {
	// Non-Id Properties
	type?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	run?: PollRunESelect;
	revisions?: VoteVersionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	type?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteGraph
	extends ImmutableActorRowESelect, VoteEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	type?: number | IQNumberField;

	// Relations
	run?: PollRunGraph;
	revisions?: VoteVersionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	VOTE_TYPE_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteECreateProperties
extends Partial<VoteEId>, VoteEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteECreateColumns
extends VoteEId, VoteEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVote extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	type: IQNumberField;

	// Non-Id Relations
	run: QPollRunQRelation;
	revisions: IQOneToManyRelation<QVoteVersion>;

}


// Entity Id Interface
export interface QVoteQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteQRelation
	extends QImmutableActorRowQRelation<QVote>, QVoteQId {
}

