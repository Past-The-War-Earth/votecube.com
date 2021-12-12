import { IRepositoryEntity } from '@airport/holding-pattern';
import { IForumThread } from './forumthread';
export interface IForumPost extends IRepositoryEntity {
    text?: string;
    createdAt?: Date;
    thread?: IForumThread;
}
//# sourceMappingURL=forumpost.d.ts.map