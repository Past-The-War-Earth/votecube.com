var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
/**
 * Reserved for future use - let people on the the target group vote too (
 * since they can see the poll) but track it differently.
 *
 * The only currently supported vote type is "Eligible",
 * meaning made in the specified Run by a
 * user that belongs to that Location
 */
let VoteType = class VoteType extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'VOTE_TYPE_ID' })
], VoteType.prototype, "id", void 0);
__decorate([
    Column({ name: 'VOTE_TYPE_NAME' })
], VoteType.prototype, "name", void 0);
__decorate([
    Column({ name: 'VOTE_TYPE_DESCRIPTION' })
], VoteType.prototype, "description", void 0);
VoteType = __decorate([
    Entity(),
    Table({ name: 'VOTE_TYPES' })
], VoteType);
export { VoteType };
//# sourceMappingURL=VoteType.js.map