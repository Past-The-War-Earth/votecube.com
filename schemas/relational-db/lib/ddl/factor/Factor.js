var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let Factor = class Factor extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'FACTOR_ID' })
], Factor.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], Factor.prototype, "createdAtPollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_FACTOR_TRANSLATION_ID',
        referencedColumnName: 'FACTOR_TRANSLATION_ID'
    })
], Factor.prototype, "parentTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID' })
], Factor.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], Factor.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'factor' })
], Factor.prototype, "factorPositions", void 0);
Factor = __decorate([
    Entity(),
    Table({ name: 'FACTORS' })
], Factor);
export { Factor };
//# sourceMappingURL=Factor.js.map