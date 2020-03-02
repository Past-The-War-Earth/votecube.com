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
} from '../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../poll/revision/qpollrevision';
import {
	VoteECascadeGraph,
	VoteEId,
	VoteEOptionalId,
	VoteEUpdateProperties,
	VoteESelect,
	QVote,
	QVoteQId,
	QVoteQRelation,
} from './qvote';
import {
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from '../poll/revision/translation/qpollrevisiontranslation';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../poll/run/qpollrun';
import {
	VoteFactorECascadeGraph,
	VoteFactorEId,
	VoteFactorEOptionalId,
	VoteFactorEUpdateProperties,
	VoteFactorESelect,
	QVoteFactor,
	QVoteFactorQId,
	QVoteFactorQRelation,
} from './qvotefactor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteRevisionESelect
    extends ImmutableActorRowESelect, VoteRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	revision?: PollRevisionESelect;
	vote?: VoteESelect;
	revisionTranslation?: PollRevisionTranslationESelect;
	run?: PollRunESelect;
	factors?: VoteFactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteRevisionEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteRevisionEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	revision?: PollRevisionEOptionalId;
	vote?: VoteEOptionalId;
	revisionTranslation?: PollRevisionTranslationEOptionalId;
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteRevisionECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	factors?: VoteFactorECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteRevisionEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	VOTE_ID?: number | IQNumberField;
	POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteRevisionECreateProperties
extends Partial<VoteRevisionEId>, VoteRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteRevisionECreateColumns
extends VoteRevisionEId, VoteRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteRevision extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	revision: QPollRevisionQRelation;
	vote: QVoteQRelation;
	revisionTranslation: QPollRevisionTranslationQRelation;
	run: QPollRunQRelation;
	factors: IQOneToManyRelation<QVoteFactor>;

}


// Entity Id Interface
export interface QVoteRevisionQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteRevisionQRelation
	extends QImmutableActorRowQRelation<QVoteRevision>, QVoteRevisionQId {
}

