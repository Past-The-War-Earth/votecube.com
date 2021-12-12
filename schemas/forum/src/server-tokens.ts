import { IForumThreadDao } from "./dao/ForumThreadDao";
import { forum } from "./tokens";

export const FORUM_THREAD_DAO = forum.token<IForumThreadDao>('FORUM_THREAD_DAO')
