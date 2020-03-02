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
	MutableActorRowECascadeGraph,
	MutableActorRowEId,
	MutableActorRowEUpdateColumns,
	MutableActorRowEUpdateProperties,
	MutableActorRowESelect,
	QMutableActorRowQId,
	QMutableActorRowQRelation,
	QMutableActorRow,
} from '../../infrastructure/row/qmutableactorrow';
import {
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../revision/qpollrevision';
import {
	UserPollRevisionECascadeGraph,
	UserPollRevisionEId,
	UserPollRevisionEOptionalId,
	UserPollRevisionEUpdateProperties,
	UserPollRevisionESelect,
	QUserPollRevision,
	QUserPollRevisionQId,
	QUserPollRevisionQRelation,
} from './quserpollrevision';
import {
	UserPollRatingECascadeGraph,
	UserPollRatingEId,
	UserPollRatingEOptionalId,
	UserPollRatingEUpdateProperties,
	UserPollRatingESelect,
	QUserPollRating,
	QUserPollRatingQId,
	QUserPollRatingQRelation,
} from './quserpollrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollESelect
    extends MutableActorRowESelect, UserPollEOptionalId {
	// Non-Id Properties
	pinnedExplicitly?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	pinnedRevision?: PollRevisionESelect;
	userPollRevisions?: UserPollRevisionESelect;
	ratings?: UserPollRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties
	pinnedExplicitly?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	pinnedRevision?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	userPollRevisions?: UserPollRevisionECascadeGraph;
	ratings?: UserPollRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_PINNED_EXPLICITLY?: boolean | IQBooleanField;
	POLL_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollECreateProperties
extends Partial<UserPollEId>, UserPollEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollECreateColumns
extends UserPollEId, UserPollEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPoll extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	pinnedExplicitly: IQBooleanField;

	// Non-Id Relations
	poll: QPollQRelation;
	pinnedRevision: QPollRevisionQRelation;
	userPollRevisions: IQOneToManyRelation<QUserPollRevision>;
	ratings: IQOneToManyRelation<QUserPollRating>;

}


// Entity Id Interface
export interface QUserPollQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollQRelation
	extends QMutableActorRowQRelation<QUserPoll>, QUserPollQId {
}

