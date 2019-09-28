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
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../variation/qpollvariation';
import {
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
	UserPollVariationRatingECascadeGraph,
	UserPollVariationRatingEId,
	UserPollVariationRatingEOptionalId,
	UserPollVariationRatingEUpdateProperties,
	UserPollVariationRatingESelect,
	QUserPollVariationRating,
	QUserPollVariationRatingQId,
	QUserPollVariationRatingQRelation,
} from './quserpollvariationrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollVariationESelect
    extends MutableActorRowESelect, UserPollVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPoll?: UserPollESelect;
	variation?: PollVariationESelect;
	translations?: UserPollVariationTranslationESelect;
	ratings?: UserPollVariationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollVariationEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollVariationEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	userPoll?: UserPollEOptionalId;
	variation?: PollVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollVariationECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	translations?: UserPollVariationTranslationECascadeGraph;
	ratings?: UserPollVariationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollVariationEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollVariationECreateProperties
extends Partial<UserPollVariationEId>, UserPollVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollVariationECreateColumns
extends UserPollVariationEId, UserPollVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollVariation extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userPoll: QUserPollQRelation;
	variation: QPollVariationQRelation;
	translations: IQOneToManyRelation<QUserPollVariationTranslation>;
	ratings: IQOneToManyRelation<QUserPollVariationRating>;

}


// Entity Id Interface
export interface QUserPollVariationQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollVariationQRelation
	extends QMutableActorRowQRelation<QUserPollVariation>, QUserPollVariationQId {
}

