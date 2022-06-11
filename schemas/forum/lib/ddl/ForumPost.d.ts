import { AirEntity } from "@airport/holding-pattern";
import { ForumThread } from "./ForumThread";
export declare type ForumPost_Text = string;
export declare type ForumPost_CreatedAt = Date;
export declare class ForumPost extends AirEntity {
    text: ForumPost_Text;
    createdAt: ForumPost_CreatedAt;
    thread: ForumThread;
}
//# sourceMappingURL=ForumPost.d.ts.map