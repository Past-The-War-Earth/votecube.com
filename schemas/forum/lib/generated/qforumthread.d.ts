import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { ForumPostGraph, ForumPostESelect, QForumPost } from './qforumpost';
import { ForumPost } from '../ddl/ForumPost';
import { ForumThread } from '../ddl/ForumThread';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ForumThreadESelect extends RepositoryEntityESelect, ForumThreadEOptionalId {
    createdAt?: Date | IQDateField;
    parent?: ForumThreadESelect;
    children?: ForumThreadESelect;
    posts?: ForumPostESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ForumThreadEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ForumThreadEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ForumThreadEUpdateProperties extends RepositoryEntityEUpdateProperties {
    createdAt?: Date | IQDateField;
    parent?: ForumThreadEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ForumThreadGraph extends ForumThreadEOptionalId, RepositoryEntityGraph {
    createdAt?: Date | IQDateField;
    parent?: ForumThreadGraph;
    children?: ForumThreadGraph[];
    posts?: ForumPostGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ForumThreadEUpdateColumns extends RepositoryEntityEUpdateColumns {
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
export interface ForumThreadECreateProperties extends Partial<ForumThreadEId>, ForumThreadEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ForumThreadECreateColumns extends ForumThreadEId, ForumThreadEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QForumThread extends QRepositoryEntity<ForumThread> {
    createdAt: IQDateField;
    parent: QForumThreadQRelation;
    children: IQOneToManyRelation<ForumThread, QForumThread>;
    posts: IQOneToManyRelation<ForumPost, QForumPost>;
}
export interface QForumThreadQId extends QRepositoryEntityQId {
}
export interface QForumThreadQRelation extends QRepositoryEntityQRelation<ForumThread, QForumThread>, QForumThreadQId {
}
//# sourceMappingURL=qforumthread.d.ts.map