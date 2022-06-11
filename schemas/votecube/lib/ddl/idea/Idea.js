var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, OneToMany, Table } from '@airport/air-traffic-control';
import { AirEntity } from '@airport/holding-pattern';
let Idea = class Idea extends AirEntity {
};
__decorate([
    Column({ name: 'NAME', nullable: false })
], Idea.prototype, "name", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Idea.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaLabels", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "situationIdeas", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaTopics", void 0);
Idea = __decorate([
    Entity(),
    Table({ name: 'IDEAS' })
], Idea);
export { Idea };
//# sourceMappingURL=Idea.js.map