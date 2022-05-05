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
	IDuo,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-traffic-control';
import {
	Duo,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Duo
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Duo<Entity,
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


export interface IBaseForumPostDuo
  extends IDuo<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost> {
}

export class BaseForumPostDuo
  extends SQDIDuo<IForumPost, ForumPostESelect, ForumPostECreateProperties, ForumPostEUpdateColumns, ForumPostEUpdateProperties, ForumPostEId, ForumPostGraph, QForumPost>
	implements IBaseForumPostDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseForumThreadDuo
  extends IDuo<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread> {
}

export class BaseForumThreadDuo
  extends SQDIDuo<IForumThread, ForumThreadESelect, ForumThreadECreateProperties, ForumThreadEUpdateColumns, ForumThreadEUpdateProperties, ForumThreadEId, ForumThreadGraph, QForumThread>
	implements IBaseForumThreadDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}
