var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
let PollRunCountry = 
// User information recorded at PollRun level
class PollRunCountry {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_COUNTRY_ID' })
], PollRunCountry.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'COUNTRY_ID', nullable: false })
], PollRunCountry.prototype, "country", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], PollRunCountry.prototype, "run", void 0);
PollRunCountry = __decorate([
    Entity(),
    Table({ name: 'POLL_COUNTRIES' })
    // User information recorded at PollRun level
], PollRunCountry);
export { PollRunCountry };
//# sourceMappingURL=PollRunCountry.js.map