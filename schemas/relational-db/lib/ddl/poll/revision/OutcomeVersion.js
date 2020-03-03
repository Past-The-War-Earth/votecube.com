var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
let OutcomeVersion = class OutcomeVersion {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'OUTCOME_VERSION_ID' })
], OutcomeVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_OUTCOME_VERSION_ID',
        referencedColumnName: 'OUTCOME_VERSION_ID'
    })
], OutcomeVersion.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], OutcomeVersion.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'outcomeVersionA' })
], OutcomeVersion.prototype, "pollRevisionsA", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'outcomeVersionB' })
], OutcomeVersion.prototype, "pollRevisionsB", void 0);
OutcomeVersion = __decorate([
    Entity(),
    Table({ name: 'OUTCOME_VERSIONS' })
], OutcomeVersion);
export { OutcomeVersion };
//# sourceMappingURL=OutcomeVersion.js.map