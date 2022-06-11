import { IAirEntity } from '@airport/holding-pattern';
import { IForumPost } from './forumpost';
export interface IForumThread extends IAirEntity {
    createdAt?: Date;
    parent?: IForumThread;
    children?: IForumThread[];
    posts?: IForumPost[];
}
//# sourceMappingURL=forumthread.d.ts.map