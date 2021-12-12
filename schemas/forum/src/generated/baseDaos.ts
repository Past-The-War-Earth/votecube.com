/* eslint-disable */
import {
	IForumPost,
} from './forumpost';
import {
	ForumPostESelect,
	ForumPostECreateColumns,
	ForumPostECreateProperties,
	ForumPostEUpdateColumns,
	ForumPostEUpdateProperties,
	ForumPostEId,
	ForumPostGraph,
	QForumPost,
} from './qforumpost';
import {
	IForumThread,
} from './forumthread';
import {
	ForumThreadESelect,
	ForumThreadECreateColumns,
	ForumThreadECreateProperties,
	ForumThreadEUpdateColumns,
	ForumThreadEUpdateProperties,
	ForumThreadEId,
	ForumThreadGraph,
	QForumThread,
} from './qforumthread';
import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Dao,
	DaoQueryDecorators,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Dao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseForumPostDao
  extends IDao<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> {
}

export class BaseForumPostDao
  extends SQDIDao<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost>
	implements IBaseForumPostDao {
	
	static Find      = new DaoQueryDecorators<ForumPostESelect>();
	static FindOne   = new DaoQueryDecorators<ForumPostESelect>();
	static Search    = new DaoQueryDecorators<ForumPostESelect>();
	static SearchOne = new DaoQueryDecorators<ForumPostESelect>();
	static Save(
		config: ForumPostGraph
	): PropertyDecorator {
		return Dao.BaseSave<ForumPostGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseForumThreadDao
  extends IDao<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> {
}

export class BaseForumThreadDao
  extends SQDIDao<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread>
	implements IBaseForumThreadDao {
	
	static Find      = new DaoQueryDecorators<ForumThreadESelect>();
	static FindOne   = new DaoQueryDecorators<ForumThreadESelect>();
	static Search    = new DaoQueryDecorators<ForumThreadESelect>();
	static SearchOne = new DaoQueryDecorators<ForumThreadESelect>();
	static Save(
		config: ForumThreadGraph
	): PropertyDecorator {
		return Dao.BaseSave<ForumThreadGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}
