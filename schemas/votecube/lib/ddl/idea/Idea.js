var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { RepositoryEntity } from '@airport/holding-pattern';
let Idea = class Idea extends RepositoryEntity {
};
__decorate([
    Column({ name: 'NAME', nullable: false })
], Idea.prototype, "name", void 0);
__decorate([
    ManyToOne()
], Idea.prototype, "outcomeA", void 0);
__decorate([
    ManyToOne()
], Idea.prototype, "outcomeB", void 0);
__decorate([
    ManyToOne()
], Idea.prototype, "thread", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Idea.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaLabels", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaFactorPositions", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "agreements", void 0);
Idea = __decorate([
    Entity(),
    Table({ name: 'IDEAS' })
], Idea);
export { Idea };
//# sourceMappingURL=Idea.js.map