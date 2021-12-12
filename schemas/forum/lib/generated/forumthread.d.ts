import { IRepositoryEntity } from '@airport/holding-pattern';
import { IForumPost } from './forumpost';
export interface IForumThread extends IRepositoryEntity {
    createdAt?: Date;
    parent?: IForumThread;
    children?: IForumThread[];
    posts?: IForumPost[];
}
//# sourceMappingURL=forumthread.d.ts.map