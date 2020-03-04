var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
/**
 * Belongs to PollOpinionVersion - does not need user or creation tracking.
 */
let FactorOpinionVersion = class FactorOpinionVersion {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'FACTOR_OPINION_VERSION_ID' })
], FactorOpinionVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], FactorOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'FACTOR_ID', nullable: false
    })
], FactorOpinionVersion.prototype, "factor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_FACTOR_OPINION_VERSION_ID',
        referencedColumnName: 'FACTOR_OPINION_VERSION_ID'
    })
], FactorOpinionVersion.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], FactorOpinionVersion.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'factorOpinionVersion' })
], FactorOpinionVersion.prototype, "translations", void 0);
FactorOpinionVersion = __decorate([
    Entity(),
    Table({ name: 'FACTOR_OPINION_VERSIONS' })
], FactorOpinionVersion);
export { FactorOpinionVersion };
//# sourceMappingURL=FactorOpinionVersion.js.map