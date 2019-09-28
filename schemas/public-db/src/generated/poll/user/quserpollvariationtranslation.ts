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
} from '../../infrastructure/qmutableactorrow';
import {
	UserPollVariationECascadeGraph,
	UserPollVariationEId,
	UserPollVariationEOptionalId,
	UserPollVariationEUpdateProperties,
	UserPollVariationESelect,
	QUserPollVariation,
	QUserPollVariationQId,
	QUserPollVariationQRelation,
} from './quserpollvariation';
import {
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
	UserPollVariationTranslationRatingECascadeGraph,
	UserPollVariationTranslationRatingEId,
	UserPollVariationTranslationRatingEOptionalId,
	UserPollVariationTranslationRatingEUpdateProperties,
	UserPollVariationTranslationRatingESelect,
	QUserPollVariationTranslationRating,
	QUserPollVariationTranslationRatingQId,
	QUserPollVariationTranslationRatingQRelation,
} from './quserpollvariationtranslationrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollVariationTranslationESelect
    extends MutableActorRowESelect, UserPollVariationTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPollVariation?: UserPollVariationESelect;
	variationTranslation?: PollVariationTranslationESelect;
	ratings?: UserPollVariationTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollVariationTranslationEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollVariationTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollVariationTranslationEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	userPollVariation?: UserPollVariationEOptionalId;
	variationTranslation?: PollVariationTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollVariationTranslationECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	ratings?: UserPollVariationTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollVariationTranslationEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_VARIATION_ID?: number | IQNumberField;
	POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollVariationTranslationECreateProperties
extends Partial<UserPollVariationTranslationEId>, UserPollVariationTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollVariationTranslationECreateColumns
extends UserPollVariationTranslationEId, UserPollVariationTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollVariationTranslation extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userPollVariation: QUserPollVariationQRelation;
	variationTranslation: QPollVariationTranslationQRelation;
	ratings: IQOneToManyRelation<QUserPollVariationTranslationRating>;

}


// Entity Id Interface
export interface QUserPollVariationTranslationQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollVariationTranslationQRelation
	extends QMutableActorRowQRelation<QUserPollVariationTranslation>, QUserPollVariationTranslationQId {
}

