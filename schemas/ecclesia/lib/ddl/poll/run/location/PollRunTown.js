var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
let PollRunTown = 
// User information recorded at PollRun level
class PollRunTown {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_STATE_ID' })
], PollRunTown.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'TOWN_ID', nullable: false })
], PollRunTown.prototype, "town", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], PollRunTown.prototype, "run", void 0);
PollRunTown = __decorate([
    Entity(),
    Table({ name: 'POLL_TOWNS' })
    // User information recorded at PollRun level
], PollRunTown);
export { PollRunTown };
//# sourceMappingURL=PollRunTown.js.map