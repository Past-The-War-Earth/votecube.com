var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
let Agreement = class Agreement extends AirEntity {
};
__decorate([
    Column({ name: "SHARE_TOTAL" })
], Agreement.prototype, "shareTotal", void 0);
__decorate([
    ManyToOne({ optional: true })
], Agreement.prototype, "situationIdea", void 0);
__decorate([
    ManyToOne()
], Agreement.prototype, "idea", void 0);
__decorate([
    OneToMany({ mappedBy: 'agreement' })
], Agreement.prototype, "agreementReasons", void 0);
Agreement = __decorate([
    Entity(),
    Table({ name: 'AGREEMENTS' })
], Agreement);
export { Agreement };
//# sourceMappingURL=Agreement.js.map