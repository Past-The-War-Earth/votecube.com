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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../infrastructure/qimmutableactorrow';
import {
	ActorECascadeGraph,
	ActorEId,
	ActorEOptionalId,
	ActorEUpdateProperties,
	ActorESelect,
	QActor,
	QActorQId,
	QActorQRelation,
} from '../user/qactor';
import {
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../poll/qpoll';
import {
	ChosenVoteVariationECascadeGraph,
	ChosenVoteVariationEId,
	ChosenVoteVariationEOptionalId,
	ChosenVoteVariationEUpdateProperties,
	ChosenVoteVariationESelect,
	QChosenVoteVariation,
	QChosenVoteVariationQId,
	QChosenVoteVariationQRelation,
} from './qchosenvotevariation';
import {
	VoteVariationECascadeGraph,
	VoteVariationEId,
	VoteVariationEOptionalId,
	VoteVariationEUpdateProperties,
	VoteVariationESelect,
	QVoteVariation,
	QVoteVariationQId,
	QVoteVariationQRelation,
} from './qvotevariation';


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
	actor?: ActorESelect;
	poll?: PollESelect;
	chosenVariations?: ChosenVoteVariationESelect;
	variations?: VoteVariationESelect;

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
	actor?: ActorEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	chosenVariations?: ChosenVoteVariationECascadeGraph;
	variations?: VoteVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	VOTE_TYPE_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;

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
	actor: QActorQRelation;
	poll: QPollQRelation;
	chosenVariations: IQOneToManyRelation<QChosenVoteVariation>;
	variations: IQOneToManyRelation<QVoteVariation>;

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

