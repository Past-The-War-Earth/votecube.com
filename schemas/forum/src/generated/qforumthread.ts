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
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ForumPostGraph,
	ForumPostEId,
	ForumPostEOptionalId,
	ForumPostEUpdateProperties,
	ForumPostESelect,
	QForumPost,
	QForumPostQId,
	QForumPostQRelation,
} from './qforumpost';
import {
	ForumPost,
} from '../ddl/ForumPost';
import {
	ForumThread,
} from '../ddl/ForumThread';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ForumThreadESelect
    extends RepositoryEntityESelect, ForumThreadEOptionalId {
	// Non-Id Properties
	createdAt?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: ForumThreadESelect;
	children?: ForumThreadESelect;
	posts?: ForumPostESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ForumThreadEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ForumThreadEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ForumThreadEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	createdAt?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's
	parent?: ForumThreadEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ForumThreadGraph
	extends ForumThreadEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	createdAt?: Date | IQDateField;

	// Relations
	parent?: ForumThreadGraph;
	children?: ForumThreadGraph[];
	posts?: ForumPostGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ForumThreadEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	FORUM_THREAD_RID_1?: number | IQNumberField;
	FORUM_THREAD_AID_1?: number | IQNumberField;
	FORUM_THREAD_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ForumThreadECreateProperties
extends Partial<ForumThreadEId>, ForumThreadEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ForumThreadECreateColumns
extends ForumThreadEId, ForumThreadEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QForumThread extends QRepositoryEntity<ForumThread>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	createdAt: IQDateField;

	// Non-Id Relations
	parent: QForumThreadQRelation;
	children: IQOneToManyRelation<ForumThread, QForumThread>;
	posts: IQOneToManyRelation<ForumPost, QForumPost>;

}


// Entity Id Interface
export interface QForumThreadQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QForumThreadQRelation
	extends QRepositoryEntityQRelation<ForumThread, QForumThread>, QForumThreadQId {
}

