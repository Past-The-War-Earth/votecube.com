import { IForumPost } from './forumpost';
import { ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost } from './qforumpost';
import { IForumThread } from './forumthread';
import { ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread } from './qforumthread';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseForumPostDuo extends IDuo<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> {
}
export declare class BaseForumPostDuo extends SQDIDuo<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> implements IBaseForumPostDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseForumThreadDuo extends IDuo<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> {
}
export declare class BaseForumThreadDuo extends SQDIDuo<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> implements IBaseForumThreadDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map