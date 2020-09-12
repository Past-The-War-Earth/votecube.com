"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ground_control_1 = require("@airport/ground-control");
const ImmutableActorRow_1 = require("../../infrastructure/row/ImmutableActorRow");
let PollRun = class PollRun extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'POLL_RUN_ID' })
], PollRun.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'END_DATE', nullable: false })
], PollRun.prototype, "endDate", void 0);
__decorate([
    air_control_1.Column({ name: 'START_DATE', nullable: false })
], PollRun.prototype, "startDate", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRun.prototype, "pollRevision", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'createdAtRun' })
], PollRun.prototype, "createdAtRevisions", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'run' })
], PollRun.prototype, "pollContinents", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'run' })
], PollRun.prototype, "pollCountries", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'run' })
], PollRun.prototype, "pollStates", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'run' })
], PollRun.prototype, "pollCounties", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'run' })
], PollRun.prototype, "pollTowns", void 0);
PollRun = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_RUNS' })
], PollRun);
exports.PollRun = PollRun;
//# sourceMappingURL=PollRun.js.map