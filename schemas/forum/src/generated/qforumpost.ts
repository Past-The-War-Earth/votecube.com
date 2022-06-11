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
} from '@airport/air-traffic-control';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	ForumThreadGraph,
	ForumThreadEId,
	ForumThreadEOptionalId,
	ForumThreadEUpdateProperties,
	ForumThreadESelect,
	QForumThread,
	QForumThreadQId,
	QForumThreadQRelation,
} from './qforumthread';
import {
	ForumThread,
} from '../ddl/ForumThread';
import {
	ForumPost,
} from '../ddl/ForumPost';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ForumPostESelect
    extends AirEntityESelect, ForumPostEOptionalId {
	// Non-Id Properties
	text?: string | IQStringField;
	createdAt?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	thread?: ForumThreadESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ForumPostEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ForumPostEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ForumPostEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	text?: string | IQStringField;
	createdAt?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's
	thread?: ForumThreadEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ForumPostGraph
	extends ForumPostEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	text?: string | IQStringField;
	createdAt?: Date | IQDateField;

	// Relations
	thread?: ForumThreadGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ForumPostEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	TEXT?: string | IQStringField;
	CREATEDAT?: Date | IQDateField;
	FORUM_THREAD_RID_1?: number | IQNumberField;
	FORUM_THREAD_AID_1?: number | IQNumberField;
	FORUM_THREAD_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ForumPostECreateProperties
extends Partial<ForumPostEId>, ForumPostEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ForumPostECreateColumns
extends ForumPostEId, ForumPostEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QForumPost extends QAirEntity<ForumPost>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	text: IQStringField;
	createdAt: IQDateField;

	// Non-Id Relations
	thread: QForumThreadQRelation;

}


// Entity Id Interface
export interface QForumPostQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QForumPostQRelation
	extends QAirEntityQRelation<ForumPost, QForumPost>, QForumPostQId {
}

