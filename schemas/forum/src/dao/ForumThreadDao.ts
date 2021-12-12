import { DI } from "@airport/di";
import { BaseForumThreadDao, IBaseForumThreadDao } from "../server";
import { FORUM_THREAD_DAO } from "../server-tokens";

export interface IForumThreadDao
    extends IBaseForumThreadDao {

}
export class ForumThreadDao
    extends BaseForumThreadDao
    implements IForumThreadDao {

}
DI.set(FORUM_THREAD_DAO, ForumThreadDao)