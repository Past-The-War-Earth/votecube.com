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
	IImmutableActorRow,
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/qimmutableactorrow';
import {
	IUserPollVariationTranslation,
	UserPollVariationTranslationECascadeGraph,
	UserPollVariationTranslationEId,
	UserPollVariationTranslationEOptionalId,
	UserPollVariationTranslationEUpdateProperties,
	UserPollVariationTranslationESelect,
	QUserPollVariationTranslation,
	QUserPollVariationTranslationQId,
	QUserPollVariationTranslationQRelation,
} from './quserpollvariationtranslation';
import {
	IPollVariationTranslation,
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from '../variation/translation/qpollvariationtranslation';
import {
	IPollLocationTimeFrame,
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../locationtimeframe/qpolllocationtimeframe';
import {
	IRating,
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
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollVariationTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	userPollVariationTranslation?: IUserPollVariationTranslation;
	pollVariationTranslation?: IPollVariationTranslation;
	locationTimeFrame?: IPollLocationTimeFrame;
	rating?: IRating;
	parent?: IUserPollVariationTranslationRating;
	child?: IUserPollVariationTranslationRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollVariationTranslationRatingESelect
    extends ImmutableActorRowESelect, UserPollVariationTranslationRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPollVariationTranslation?: UserPollVariationTranslationESelect;
	pollVariationTranslation?: PollVariationTranslationESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;
	rating?: RatingESelect;
	parent?: UserPollVariationTranslationRatingESelect;
	child?: UserPollVariationTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollVariationTranslationRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollVariationTranslationRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollVariationTranslationRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	userPollVariationTranslation?: UserPollVariationTranslationEOptionalId;
	pollVariationTranslation?: PollVariationTranslationEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;
	rating?: RatingEOptionalId;
	parent?: UserPollVariationTranslationRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollVariationTranslationRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: UserPollVariationTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollVariationTranslationRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	USER_POLL_VARIATION_TRANSLATION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	USER_POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;
	POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_USER_POLL_VARIATION_TRANSLATION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollVariationTranslationRatingECreateProperties
extends Partial<UserPollVariationTranslationRatingEId>, UserPollVariationTranslationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollVariationTranslationRatingECreateColumns
extends UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollVariationTranslationRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	userPollVariationTranslation: QUserPollVariationTranslationQRelation;
	pollVariationTranslation: QPollVariationTranslationQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;
	rating: QRatingQRelation;
	parent: QUserPollVariationTranslationRatingQRelation;
	child: IQOneToManyRelation<QUserPollVariationTranslationRating>;

}


// Entity Id Interface
export interface QUserPollVariationTranslationRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollVariationTranslationRatingQRelation
	extends QImmutableActorRowQRelation<QUserPollVariationTranslationRating>, QUserPollVariationTranslationRatingQId {
}

