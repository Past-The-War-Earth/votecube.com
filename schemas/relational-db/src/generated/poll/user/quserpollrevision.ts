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
	UserPollRevisionTranslationECascadeGraph,
	UserPollRevisionTranslationEId,
	UserPollRevisionTranslationEOptionalId,
	UserPollRevisionTranslationEUpdateProperties,
	UserPollRevisionTranslationESelect,
	QUserPollRevisionTranslation,
	QUserPollRevisionTranslationQId,
	QUserPollRevisionTranslationQRelation,
} from './quserpollrevisiontranslation';
import {
	UserPollRevisionRatingECascadeGraph,
	UserPollRevisionRatingEId,
	UserPollRevisionRatingEOptionalId,
	UserPollRevisionRatingEUpdateProperties,
	UserPollRevisionRatingESelect,
	QUserPollRevisionRating,
	QUserPollRevisionRatingQId,
	QUserPollRevisionRatingQRelation,
} from './quserpollrevisionrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionESelect
    extends MutableActorRowESelect, UserPollRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPoll?: UserPollESelect;
	revision?: PollRevisionESelect;
	translations?: UserPollRevisionTranslationESelect;
	ratings?: UserPollRevisionRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	userPoll?: UserPollEOptionalId;
	revision?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	translations?: UserPollRevisionTranslationECascadeGraph;
	ratings?: UserPollRevisionRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionECreateProperties
extends Partial<UserPollRevisionEId>, UserPollRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionECreateColumns
extends UserPollRevisionEId, UserPollRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevision extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userPoll: QUserPollQRelation;
	revision: QPollRevisionQRelation;
	translations: IQOneToManyRelation<QUserPollRevisionTranslation>;
	ratings: IQOneToManyRelation<QUserPollRevisionRating>;

}


// Entity Id Interface
export interface QUserPollRevisionQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollRevisionQRelation
	extends QMutableActorRowQRelation<QUserPollRevision>, QUserPollRevisionQId {
}

