import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { ForumThreadGraph, ForumThreadEOptionalId, ForumThreadESelect, QForumThreadQRelation } from './qforumthread';
import { ForumPost } from '../ddl/ForumPost';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ForumPostESelect extends RepositoryEntityESelect, ForumPostEOptionalId {
    text?: string | IQStringField;
    createdAt?: Date | IQDateField;
    thread?: ForumThreadESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ForumPostEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ForumPostEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ForumPostEUpdateProperties extends RepositoryEntityEUpdateProperties {
    text?: string | IQStringField;
    createdAt?: Date | IQDateField;
    thread?: ForumThreadEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ForumPostGraph extends ForumPostEOptionalId, RepositoryEntityGraph {
    text?: string | IQStringField;
    createdAt?: Date | IQDateField;
    thread?: ForumThreadGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ForumPostEUpdateColumns extends RepositoryEntityEUpdateColumns {
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
export interface ForumPostECreateProperties extends Partial<ForumPostEId>, ForumPostEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ForumPostECreateColumns extends ForumPostEId, ForumPostEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QForumPost extends QRepositoryEntity<ForumPost> {
    text: IQStringField;
    createdAt: IQDateField;
    thread: QForumThreadQRelation;
}
export interface QForumPostQId extends QRepositoryEntityQId {
}
export interface QForumPostQRelation extends QRepositoryEntityQRelation<ForumPost, QForumPost>, QForumPostQId {
}
//# sourceMappingURL=qforumpost.d.ts.map