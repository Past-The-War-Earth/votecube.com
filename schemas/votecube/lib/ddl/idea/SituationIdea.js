var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let SituationIdea = class SituationIdea extends RepositoryEntity {
};
__decorate([
    ManyToOne()
], SituationIdea.prototype, "idea", void 0);
__decorate([
    ManyToOne()
], SituationIdea.prototype, "situation", void 0);
__decorate([
    OneToMany({ mappedBy: 'situationIdea' })
], SituationIdea.prototype, "agreements", void 0);
__decorate([
    OneToMany({ mappedBy: 'situationIdea' })
], SituationIdea.prototype, "reasons", void 0);
__decorate([
    Column({ name: 'AGREEMENT_SHARE_TOTAL' })
], SituationIdea.prototype, "agreementShareTotal", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_AGREEMENTS' })
], SituationIdea.prototype, "numberOfAgreements", void 0);
SituationIdea = __decorate([
    Entity(),
    Table({ name: 'SITUATION_IDEAS' })
], SituationIdea);
export { SituationIdea };
//# sourceMappingURL=SituationIdea.js.map