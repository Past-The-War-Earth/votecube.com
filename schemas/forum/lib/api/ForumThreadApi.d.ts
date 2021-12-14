import { IForumThread } from "../server";
export interface IForumThreadApi {
    createNew(): Promise<IForumThread>;
}
export declare class ForumThreadApi implements IForumThreadApi {
    createNew(): Promise<IForumThread>;
}
//# sourceMappingURL=ForumThreadApi.d.ts.map