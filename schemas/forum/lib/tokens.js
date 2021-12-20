import { app } from '@votecube/dependency-injection';
export const forum = app('forum');
forum.signature = 'forum';
export const FORUM_THREAD_API = forum.token('FORUM_THREAD_API');
//# sourceMappingURL=tokens.js.map