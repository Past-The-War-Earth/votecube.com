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
} from '../../infrastructure/row/qimmutableactorrow';
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
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from '../revision/translation/qpollrevisiontranslation';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../run/qpollrun';
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
export interface UserPollRevisionTranslationRatingESelect
    extends ImmutableActorRowESelect, UserPollRevisionTranslationRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPollRevisionTranslation?: UserPollRevisionTranslationESelect;
	pollRevisionTranslation?: PollRevisionTranslationESelect;
	run?: PollRunESelect;
	rating?: RatingESelect;
	parent?: UserPollRevisionTranslationRatingESelect;
	child?: UserPollRevisionTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionTranslationRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionTranslationRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	userPollRevisionTranslation?: UserPollRevisionTranslationEOptionalId;
	pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
	run?: PollRunEOptionalId;
	rating?: RatingEOptionalId;
	parent?: UserPollRevisionTranslationRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionTranslationRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: UserPollRevisionTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionTranslationRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	USER_POLL_REVISION_TRANSLATION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	USER_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
	POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_USER_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationRatingECreateProperties
extends Partial<UserPollRevisionTranslationRatingEId>, UserPollRevisionTranslationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionTranslationRatingECreateColumns
extends UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevisionTranslationRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	userPollRevisionTranslation: QUserPollRevisionTranslationQRelation;
	pollRevisionTranslation: QPollRevisionTranslationQRelation;
	run: QPollRunQRelation;
	rating: QRatingQRelation;
	parent: QUserPollRevisionTranslationRatingQRelation;
	child: IQOneToManyRelation<QUserPollRevisionTranslationRating>;

}


// Entity Id Interface
export interface QUserPollRevisionTranslationRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollRevisionTranslationRatingQRelation
	extends QImmutableActorRowQRelation<QUserPollRevisionTranslationRating>, QUserPollRevisionTranslationRatingQId {
}

