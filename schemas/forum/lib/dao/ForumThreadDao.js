import { DI } from "@airport/di";
import { BaseForumThreadDao } from "../server";
import { FORUM_THREAD_DAO } from "../server-tokens";
export class ForumThreadDao extends BaseForumThreadDao {
}
DI.set(FORUM_THREAD_DAO, ForumThreadDao);
//# sourceMappingURL=ForumThreadDao.js.map