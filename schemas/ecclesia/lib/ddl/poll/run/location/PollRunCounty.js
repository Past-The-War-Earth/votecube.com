var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
let PollRunCounty = 
// User information recorded at PollRun level
class PollRunCounty {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_COUNTY_ID' })
], PollRunCounty.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'COUNTY_ID', nullable: false })
], PollRunCounty.prototype, "country", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], PollRunCounty.prototype, "run", void 0);
PollRunCounty = __decorate([
    Entity(),
    Table({ name: 'POLL_COUNTIES' })
    // User information recorded at PollRun level
], PollRunCounty);
export { PollRunCounty };
//# sourceMappingURL=PollRunCounty.js.map