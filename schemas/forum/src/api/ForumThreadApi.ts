import { Api } from "@airport/check-in";
import { container, DI } from "@airport/direction-indicator";
import { FORUM_THREAD_DAO, IForumThread } from "../server";
import { FORUM_THREAD_API } from "../tokens";

export interface IForumThreadApi {

    createNew(): Promise<IForumThread>

}

export class ForumThreadApi
    implements IForumThreadApi {

    @Api()
    async createNew(): Promise<IForumThread> {
        const forumThread: IForumThread = {
            createdAt: new Date(),
        } as IForumThread

        const forumThreadDao = await container(this).get(FORUM_THREAD_DAO)
        await forumThreadDao.save(forumThread)

        return forumThread
    }

}
DI.set(FORUM_THREAD_API, ForumThreadApi)