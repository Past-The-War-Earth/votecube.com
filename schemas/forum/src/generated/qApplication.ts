import {
	AIRPORT_DATABASE,
	QApplication as AirportQApplication
}                      from '@airport/air-traffic-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DI}            from '@airport/di'
import {
	DbApplication,
	EntityId,
	getFullApplicationName
}                      from '@airport/ground-control';
import { QForumPost } from './qforumpost';
import { QForumThread } from './qforumthread';
import {
  ForumPost,
  ForumThread
} from '../ddl/ddl';

export interface LocalQApplication extends AirportQApplication {

  db: DbApplication;

	ForumPost: QForumPost;
	ForumThread: QForumThread;

}

const __constructors__ = {
	ForumPost: ForumPost,
	ForumThread: ForumThread
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'votecube.com',
  name: '@votecube/forum'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: EntityId
): boolean {
	return dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return ddS(Q.__dbApplication__, dbEntityId)
}

DI.db().eventuallyGet(AIRPORT_DATABASE).then((
	airDb
) => {
	airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q
})
