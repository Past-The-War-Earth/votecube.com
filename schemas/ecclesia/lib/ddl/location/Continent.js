var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, OneToMany, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let Continent = class Continent extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'CONTINENT_ID' })
], Continent.prototype, "id", void 0);
__decorate([
    Column({ name: 'CONTINENT_NAME', nullable: false })
], Continent.prototype, "name", void 0);
__decorate([
    OneToMany({ mappedBy: 'CONTINENT_ID' })
], Continent.prototype, "countries", void 0);
Continent = __decorate([
    Entity(),
    Table({
        name: 'CONTINENTS'
    })
], Continent);
export { Continent };
//# sourceMappingURL=Continent.js.map