var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
let Outcome = class Outcome extends AgeSuitableRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'OUTCOME_ID' })
], Outcome.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_OUTCOME_TRANSLATION_ID',
        referencedColumnName: 'OUTCOME_TRANSLATION_ID'
    })
], Outcome.prototype, "parentTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_OUTCOME_ID',
        referencedColumnName: 'OUTCOME_ID'
    })
], Outcome.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Outcome.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'outcomeVersionA' })
], Outcome.prototype, "pollRevisionsA", void 0);
__decorate([
    OneToMany({ mappedBy: 'outcomeVersionB' })
], Outcome.prototype, "pollRevisionsB", void 0);
Outcome = __decorate([
    Entity(),
    Table({ name: 'OUTCOMES' })
], Outcome);
export { Outcome };
//# sourceMappingURL=Outcome.js.map