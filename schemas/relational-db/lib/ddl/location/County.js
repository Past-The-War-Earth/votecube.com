var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let County = class County extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'COUNTY_ID' })
], County.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'STATE_ID', nullable: false })
], County.prototype, "state", void 0);
__decorate([
    Column({ name: 'COUNTY_NAME', nullable: false })
], County.prototype, "name", void 0);
__decorate([
    OneToMany({ mappedBy: 'county' })
], County.prototype, "countyTowns", void 0);
County = __decorate([
    Entity(),
    Table({
        name: 'COUNTIES'
    })
], County);
export { County };
//# sourceMappingURL=County.js.map