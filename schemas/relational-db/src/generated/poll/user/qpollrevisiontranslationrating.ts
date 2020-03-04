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
export interface PollRevisionTranslationRatingESelect
    extends ImmutableActorRowESelect, PollRevisionTranslationRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPollRevisionTranslation?: UserPollRevisionTranslationESelect;
	run?: PollRunESelect;
	rating?: RatingESelect;
	parent?: PollRevisionTranslationRatingESelect;
	child?: PollRevisionTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	userPollRevisionTranslation?: UserPollRevisionTranslationEOptionalId;
	run?: PollRunEOptionalId;
	rating?: RatingEOptionalId;
	parent?: PollRevisionTranslationRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: PollRevisionTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	IS_CURRENT?: boolean | IQBooleanField;
	USER_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingECreateProperties
extends Partial<PollRevisionTranslationRatingEId>, PollRevisionTranslationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationRatingECreateColumns
extends PollRevisionTranslationRatingEId, PollRevisionTranslationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslationRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	userPollRevisionTranslation: QUserPollRevisionTranslationQRelation;
	run: QPollRunQRelation;
	rating: QRatingQRelation;
	parent: QPollRevisionTranslationRatingQRelation;
	child: IQOneToManyRelation<QPollRevisionTranslationRating>;

}


// Entity Id Interface
export interface QPollRevisionTranslationRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionTranslationRatingQRelation
	extends QImmutableActorRowQRelation<QPollRevisionTranslationRating>, QPollRevisionTranslationRatingQId {
}

