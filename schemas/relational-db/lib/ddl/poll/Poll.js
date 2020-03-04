var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let Poll = class Poll extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Column({ name: 'POLL_ID' })
], Poll.prototype, "id", void 0);
__decorate([
    Column({ name: 'AGE_SUITABILITY', nullable: false })
], Poll.prototype, "ageSuitability", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'THEME_ID', nullable: false })
], Poll.prototype, "theme", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_TYPE_ID', nullable: false })
], Poll.prototype, "type", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_ID',
        referencedColumnName: 'POLL_ID'
    })
], Poll.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Poll.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'poll' })
], Poll.prototype, "runs", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'poll' })
], Poll.prototype, "revisions", void 0);
Poll = __decorate([
    Entity(),
    Table({ name: 'POLLS' })
], Poll);
export { Poll };
//# sourceMappingURL=Poll.js.map