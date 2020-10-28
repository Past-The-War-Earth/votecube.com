var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, Entity, GeneratedValue, Id, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let Device = class Device extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'DEVICE_ID' })
], Device.prototype, "id", void 0);
__decorate([
    Column({ name: 'DEVICE_HASH', nullable: false }),
    DbNumber()
], Device.prototype, "hash", void 0);
Device = __decorate([
    Entity(),
    Table({ name: 'DEVICES' })
], Device);
export { Device };
//# sourceMappingURL=Device.js.map