import { AirEntity } from "@airport/holding-pattern";
import { ForumPost } from "./ForumPost";
export declare type ForumThread_CreatedAt = Date;
export declare class ForumThread extends AirEntity {
    createdAt: ForumThread_CreatedAt;
    parent: ForumThread;
    children: ForumThread[];
    posts: ForumPost[];
}
//# sourceMappingURL=ForumThread.d.ts.map