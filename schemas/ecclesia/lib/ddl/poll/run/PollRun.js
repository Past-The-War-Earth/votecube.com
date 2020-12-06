var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
let PollRun = class PollRun extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_RUN_ID' })
], PollRun.prototype, "id", void 0);
__decorate([
    Column({ name: 'END_DATE', nullable: false })
], PollRun.prototype, "endDate", void 0);
__decorate([
    Column({ name: 'START_DATE', nullable: false })
], PollRun.prototype, "startDate", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRun.prototype, "pollRevision", void 0);
__decorate([
    OneToMany({ mappedBy: 'createdAtRun' })
], PollRun.prototype, "createdAtRevisions", void 0);
__decorate([
    OneToMany({ mappedBy: 'run' })
], PollRun.prototype, "pollContinents", void 0);
__decorate([
    OneToMany({ mappedBy: 'run' })
], PollRun.prototype, "pollCountries", void 0);
__decorate([
    OneToMany({ mappedBy: 'run' })
], PollRun.prototype, "pollStates", void 0);
__decorate([
    OneToMany({ mappedBy: 'run' })
], PollRun.prototype, "pollCounties", void 0);
__decorate([
    OneToMany({ mappedBy: 'run' })
], PollRun.prototype, "pollTowns", void 0);
PollRun = __decorate([
    Entity(),
    Table({ name: 'POLL_RUNS' })
], PollRun);
export { PollRun };
//# sourceMappingURL=PollRun.js.map