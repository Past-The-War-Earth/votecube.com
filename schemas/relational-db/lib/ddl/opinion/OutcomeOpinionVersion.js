var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
let OutcomeOpinionVersion = class OutcomeOpinionVersion {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'OUTCOME_OPINION_VERSION_ID' })
], OutcomeOpinionVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], OutcomeOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'OUTCOME_ID', nullable: false
    })
], OutcomeOpinionVersion.prototype, "outcome", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_OUTCOME_OPINION_VERSION_ID',
        referencedColumnName: 'OUTCOME_OPINION_VERSION_ID'
    })
], OutcomeOpinionVersion.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], OutcomeOpinionVersion.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'outcomeOpinionVersion' })
], OutcomeOpinionVersion.prototype, "translations", void 0);
OutcomeOpinionVersion = __decorate([
    Entity(),
    Table({ name: 'OUTCOME_OPINION_VERSIONS' })
], OutcomeOpinionVersion);
export { OutcomeOpinionVersion };
//# sourceMappingURL=OutcomeOpinionVersion.js.map