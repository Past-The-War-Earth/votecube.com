import { system } from "@airport/di";
export const forum = system('votecube').lib('forum');
forum.signature = 'forum';
export const FORUM_THREAD_API = forum.token('FORUM_THREAD_API');
//# sourceMappingURL=tokens.js.map