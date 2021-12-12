var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbDate, Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let ForumThread = class ForumThread extends RepositoryEntity {
};
__decorate([
    Column({ name: "CREATED_AT" }),
    DbDate()
], ForumThread.prototype, "createdAt", void 0);
__decorate([
    ManyToOne({ mappedBy: "children" })
], ForumThread.prototype, "parent", void 0);
__decorate([
    OneToMany()
], ForumThread.prototype, "children", void 0);
__decorate([
    OneToMany()
], ForumThread.prototype, "posts", void 0);
ForumThread = __decorate([
    Entity(),
    Table({ name: "FORUM_THREAD" })
], ForumThread);
export { ForumThread };
//# sourceMappingURL=ForumThread.js.map