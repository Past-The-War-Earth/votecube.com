var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DbDate, DbString, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
let ForumPost = class ForumPost extends AirEntity {
};
__decorate([
    DbString()
], ForumPost.prototype, "text", void 0);
__decorate([
    DbDate()
], ForumPost.prototype, "createdAt", void 0);
__decorate([
    ManyToOne({ mappedBy: "posts" })
], ForumPost.prototype, "thread", void 0);
ForumPost = __decorate([
    Entity(),
    Table({ name: "FORUM_POST" })
], ForumPost);
export { ForumPost };
//# sourceMappingURL=ForumPost.js.map