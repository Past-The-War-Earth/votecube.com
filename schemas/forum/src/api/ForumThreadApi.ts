import { DI } from "@airport/di";
import { FORUM_THREAD_API } from "../tokens";

export interface IForumThreadApi {

}

export class ForumThreadApi
    implements IForumThreadApi {

}
DI.set(FORUM_THREAD_API, ForumThreadApi)