import { system } from "@airport/di";
import { IForumThreadApi } from "./api/ForumThreadApi";

export const forum = system('votecube').lib('forum')
forum.signature = 'forum'

export const FORUM_THREAD_API = forum.token<IForumThreadApi>('FORUM_THREAD_API')