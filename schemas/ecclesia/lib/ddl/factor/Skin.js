var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let Skin = class Skin extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'SKIN_ID' })
], Skin.prototype, "id", void 0);
__decorate([
    Column({ name: 'BACKGROUND_COLOR_ID', nullable: false })
], Skin.prototype, "backgroundColor", void 0);
__decorate([
    Column({ name: 'TEXT_COLOR_ID', nullable: false })
], Skin.prototype, "textColor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_SKIN_ID',
        referencedColumnName: 'SKIN_ID'
    })
], Skin.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Skin.prototype, "children", void 0);
Skin = __decorate([
    Entity(),
    Table({ name: 'SKINS' })
], Skin);
export { Skin };
//# sourceMappingURL=Skin.js.map