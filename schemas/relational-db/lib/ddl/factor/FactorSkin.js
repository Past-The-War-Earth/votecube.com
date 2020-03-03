var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let FactorSkin = class FactorSkin extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'FACTOR_SKIN_ID' })
], FactorSkin.prototype, "id", void 0);
__decorate([
    Column({ name: 'BACKGROUND_COLOR_ID', nullable: false })
], FactorSkin.prototype, "backgroundColor", void 0);
__decorate([
    Column({ name: 'TEXT_COLOR_ID', nullable: false })
], FactorSkin.prototype, "textColor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], FactorSkin.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_ID' })
], FactorSkin.prototype, "factor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_FACTOR_SKIN_ID',
        referencedColumnName: 'FACTOR_SKIN_ID'
    })
], FactorSkin.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], FactorSkin.prototype, "children", void 0);
FactorSkin = __decorate([
    Entity(),
    Table({ name: 'FACTOR_SKINS' })
], FactorSkin);
export { FactorSkin };
//# sourceMappingURL=FactorSkin.js.map