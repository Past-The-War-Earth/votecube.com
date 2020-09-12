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
const AgeSuitableRow_1 = require("../../infrastructure/row/AgeSuitableRow");
/**
 * Different revisions of a given poll.
 */
let PollRevision = class PollRevision extends AgeSuitableRow_1.AgeSuitableRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'POLL_REVISION_ID' })
], PollRevision.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'DEPTH' })
], PollRevision.prototype, "depth", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_ID' })
], PollRevision.prototype, "poll", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevision.prototype, "createdAtRun", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'OUTCOME_A_VERSION_ID',
        referencedColumnName: 'OUTCOME_ID'
    })
], PollRevision.prototype, "outcomeVersionA", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'OUTCOME_B_VERSION_ID',
        referencedColumnName: 'OUTCOME_ID'
    })
], PollRevision.prototype, "outcomeVersionB", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POLL_REVISION_ID',
        referencedColumnName: 'POLL_REVISION_ID'
    })
], PollRevision.prototype, "parent", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POLL_REVISION_TRANSLATION_ID',
        referencedColumnName: 'POLL_REVISION_TRANSLATION_ID'
    })
], PollRevision.prototype, "parentTranslation", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], PollRevision.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "ratings", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "factorPositions", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "allTranslations", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "opinions", void 0);
PollRevision = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISIONS' })
], PollRevision);
exports.PollRevision = PollRevision;
//# sourceMappingURL=PollRevision.js.map