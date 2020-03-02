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
	UserPollRevisionTranslationRatingECascadeGraph,
	UserPollRevisionTranslationRatingEId,
	UserPollRevisionTranslationRatingEOptionalId,
	UserPollRevisionTranslationRatingEUpdateProperties,
	UserPollRevisionTranslationRatingESelect,
	QUserPollRevisionTranslationRating,
	QUserPollRevisionTranslationRatingQId,
	QUserPollRevisionTranslationRatingQRelation,
} from './quserpollrevisiontranslationrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionTranslationESelect
    extends MutableActorRowESelect, UserPollRevisionTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userPollRevision?: UserPollRevisionESelect;
	revisionTranslation?: PollRevisionTranslationESelect;
	ratings?: UserPollRevisionTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionTranslationEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	userPollRevision?: UserPollRevisionEOptionalId;
	revisionTranslation?: PollRevisionTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionTranslationECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	ratings?: UserPollRevisionTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionTranslationEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_REVISION_ID?: number | IQNumberField;
	POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationECreateProperties
extends Partial<UserPollRevisionTranslationEId>, UserPollRevisionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionTranslationECreateColumns
extends UserPollRevisionTranslationEId, UserPollRevisionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevisionTranslation extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	userPollRevision: QUserPollRevisionQRelation;
	revisionTranslation: QPollRevisionTranslationQRelation;
	ratings: IQOneToManyRelation<QUserPollRevisionTranslationRating>;

}


// Entity Id Interface
export interface QUserPollRevisionTranslationQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollRevisionTranslationQRelation
	extends QMutableActorRowQRelation<QUserPollRevisionTranslation>, QUserPollRevisionTranslationQId {
}

