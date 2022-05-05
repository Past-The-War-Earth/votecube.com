var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbString, Entity, Id, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let PollType = class PollType extends SystemGeneratedRow {
};
__decorate([
    Id(),
    Column({ name: 'POLL_TYPE_ID' })
], PollType.prototype, "id", void 0);
__decorate([
    Column({ name: 'POLL_TYPE_VALUE' }),
    DbString()
], PollType.prototype, "value", void 0);
PollType = __decorate([
    Entity(),
    Table({ name: 'POLL_TYPES' })
], PollType);
export { PollType };
//# sourceMappingURL=PollType.js.map