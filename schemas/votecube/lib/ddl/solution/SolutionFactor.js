var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let SolutionFactor = class SolutionFactor extends RepositoryEntity {
};
__decorate([
    ManyToOne()
], SolutionFactor.prototype, "solution", void 0);
__decorate([
    ManyToOne()
], SolutionFactor.prototype, "situationFactorPosition", void 0);
SolutionFactor = __decorate([
    Entity(),
    Table({ name: 'SOLUTION_FACTORS' })
], SolutionFactor);
export { SolutionFactor };
//# sourceMappingURL=SolutionFactor.js.map