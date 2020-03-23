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
const MutableActorRow_1 = require("../infrastructure/row/MutableActorRow");
let PollRevisionOpinion = class PollRevisionOpinion extends MutableActorRow_1.MutableActorRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_ID' })
], PollRevisionOpinion.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_ID', nullable: false })
], PollRevisionOpinion.prototype, "pollRevision", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevisionOpinion.prototype, "run", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'VOTE_ID' })
], PollRevisionOpinion.prototype, "vote", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "ratings", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "versions", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "factors", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "outcomes", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "positions", void 0);
PollRevisionOpinion = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISION_OPINIONS' })
], PollRevisionOpinion);
exports.PollRevisionOpinion = PollRevisionOpinion;
//# sourceMappingURL=PollRevisionOpinion.js.map