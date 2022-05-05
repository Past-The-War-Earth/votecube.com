var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbString, Entity, Id, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let VoteFactorType = class VoteFactorType extends SystemGeneratedRow {
};
__decorate([
    Id(),
    Column({ name: 'VOTE_FACTOR_TYPE_ID' })
], VoteFactorType.prototype, "id", void 0);
__decorate([
    Column({ name: 'VOTE_FACTOR_TYPE_VALUE' }),
    DbString()
], VoteFactorType.prototype, "value", void 0);
VoteFactorType = __decorate([
    Entity(),
    Table({ name: 'VOTE_FACTOR_TYPES' })
], VoteFactorType);
export { VoteFactorType };
//# sourceMappingURL=VoteFactorType.js.map