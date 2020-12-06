var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
/**
 * This is the generic position records (not related to any poll).
 */
let Position = class Position extends AgeSuitableRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POSITION_ID' })
], Position.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], Position.prototype, "createdAtPollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POSITION_TRANSLATION_ID',
        referencedColumnName: 'POSITION_TRANSLATION_ID'
    })
], Position.prototype, "parentTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POSITION_ID',
        referencedColumnName: 'POSITION_ID'
    })
], Position.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Position.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'position' })
], Position.prototype, "factorPositions", void 0);
__decorate([
    OneToMany({ mappedBy: 'position' })
], Position.prototype, "translations", void 0);
Position = __decorate([
    Entity(),
    Table({ name: 'POSITIONS' })
], Position);
export { Position };
//# sourceMappingURL=Position.js.map