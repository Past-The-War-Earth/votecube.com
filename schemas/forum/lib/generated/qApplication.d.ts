import { QApplication as AirportQApplication } from '@airport/air-control';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QForumPost } from './qforumpost';
import { QForumThread } from './qforumthread';
export interface LocalQApplication extends AirportQApplication {
    db: DbApplication;
    ForumPost: QForumPost;
    ForumThread: QForumThread;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qApplication.d.ts.map