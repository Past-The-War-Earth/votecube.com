var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let Town = class Town extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'TOWN_ID' })
], Town.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'COUNTY_ID', nullable: false })
], Town.prototype, "county", void 0);
__decorate([
    Column({ name: 'TOWN_NAME', nullable: false })
], Town.prototype, "name", void 0);
Town = __decorate([
    Entity(),
    Table({
        name: 'TOWNS'
    })
], Town);
export { Town };
//# sourceMappingURL=Town.js.map