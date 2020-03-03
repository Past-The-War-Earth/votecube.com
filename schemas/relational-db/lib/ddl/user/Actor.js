var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let Actor = class Actor extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'ACTOR_ID' })
], Actor.prototype, "id", void 0);
__decorate([
    Column({ name: 'ACTOR_HASH', nullable: false }),
    DbNumber()
], Actor.prototype, "hash", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'USER_ACCOUNT_ID', nullable: false })
], Actor.prototype, "userAccount", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'DEVICE_ID', nullable: false })
], Actor.prototype, "device", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'APPLICATION_ID', nullable: false })
], Actor.prototype, "application", void 0);
Actor = __decorate([
    Entity(),
    Table({ name: 'ACTORS' })
], Actor);
export { Actor };
//# sourceMappingURL=Actor.js.map