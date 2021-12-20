import { app } from '@votecube/dependency-injection'
import { IForumThreadApi } from "./api/ForumThreadApi";

export const forum = app('forum')

export const FORUM_THREAD_API = forum.token<IForumThreadApi>('FORUM_THREAD_API')