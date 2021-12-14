var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { container, DI } from "@airport/di";
import { FORUM_THREAD_DAO } from "../server";
import { FORUM_THREAD_API } from "../tokens";
export class ForumThreadApi {
    async createNew() {
        const forumThread = {
            createdAt: new Date(),
        };
        const forumThreadDao = await container(this).get(FORUM_THREAD_DAO);
        await forumThreadDao.save(forumThread);
        return forumThread;
    }
}
__decorate([
    Api()
], ForumThreadApi.prototype, "createNew", null);
DI.set(FORUM_THREAD_API, ForumThreadApi);
//# sourceMappingURL=ForumThreadApi.js.map