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
	UserPollECascadeGraph,
	UserPollEId,
	UserPollEOptionalId,
	UserPollEUpdateProperties,
	UserPollESelect,
	QUserPoll,
	QUserPollQId,
	QUserPollQRelation,
} from './quserpoll';
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
	RatingECascadeGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from '../../infrastructure/rating/qrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRatingESelect
    extends MutableActorRowESelect, UserPollRatingEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPoll?: UserPollESelect;
	poll?: PollESelect;
	rating?: RatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRatingEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRatingEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	userPoll?: UserPollEOptionalId;
	poll?: PollEOptionalId;
	rating?: RatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRatingECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRatingEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRatingECreateProperties
extends Partial<UserPollRatingEId>, UserPollRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRatingECreateColumns
extends UserPollRatingEId, UserPollRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRating extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userPoll: QUserPollQRelation;
	poll: QPollQRelation;
	rating: QRatingQRelation;

}


// Entity Id Interface
export interface QUserPollRatingQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollRatingQRelation
	extends QMutableActorRowQRelation<QUserPollRating>, QUserPollRatingQId {
}

