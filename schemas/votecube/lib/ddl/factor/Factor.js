var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from '@airport/holding-pattern';
import { Column, Entity, Table } from '@airport/tarmaq-entity';
let Factor = class Factor extends AirEntity {
};
__decorate([
    Column({ name: 'OBJECT', nullable: true })
], Factor.prototype, "object", void 0);
__decorate([
    Column({ name: 'ACTION', nullable: true })
], Factor.prototype, "action", void 0);
__decorate([
    Column({ name: 'NAME', nullable: true })
], Factor.prototype, "customText", void 0);
Factor = __decorate([
    Entity(),
    Table({ name: 'FACTORS' })
], Factor);
export { Factor };
//# sourceMappingURL=Factor.js.map