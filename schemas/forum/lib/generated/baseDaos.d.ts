import { IForumPost } from './forumpost';
import { ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost } from './qforumpost';
import { IForumThread } from './forumthread';
import { ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread } from './qforumthread';
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseForumPostDao extends IDao<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> {
}
export declare class BaseForumPostDao extends SQDIDao<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> implements IBaseForumPostDao {
    static Find: DaoQueryDecorators<ForumPostESelect>;
    static FindOne: DaoQueryDecorators<ForumPostESelect>;
    static Search: DaoQueryDecorators<ForumPostESelect>;
    static SearchOne: DaoQueryDecorators<ForumPostESelect>;
    static Save(config: ForumPostGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseForumThreadDao extends IDao<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> {
}
export declare class BaseForumThreadDao extends SQDIDao<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> implements IBaseForumThreadDao {
    static Find: DaoQueryDecorators<ForumThreadESelect>;
    static FindOne: DaoQueryDecorators<ForumThreadESelect>;
    static Search: DaoQueryDecorators<ForumThreadESelect>;
    static SearchOne: DaoQueryDecorators<ForumThreadESelect>;
    static Save(config: ForumThreadGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map