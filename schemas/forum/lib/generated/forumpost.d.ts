import { IAirEntity } from '@airport/holding-pattern';
import { IForumThread } from './forumthread';
export interface IForumPost extends IAirEntity {
    text?: string;
    createdAt?: Date;
    thread?: IForumThread;
}
//# sourceMappingURL=forumpost.d.ts.map