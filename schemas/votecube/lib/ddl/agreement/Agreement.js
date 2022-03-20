var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let Agreement = class Agreement extends RepositoryEntity {
};
__decorate([
    ManyToOne()
], Agreement.prototype, "ideaSituation", void 0);
__decorate([
    OneToMany({ mappedBy: 'agreement' })
], Agreement.prototype, "factors", void 0);
Agreement = __decorate([
    Entity(),
    Table({ name: 'AGREEMENTS' })
], Agreement);
export { Agreement };
//# sourceMappingURL=Agreement.js.map