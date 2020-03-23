"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
let VoteFactor = class VoteFactor {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'VOTE_FACTOR_ID' })
], VoteFactor.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'VOTE_VERSION_ID', nullable: false })
], VoteFactor.prototype, "voteRevision", void 0);
__decorate([
    air_control_1.Column({ name: 'SHARE', nullable: false }),
    air_control_1.DbString()
], VoteFactor.prototype, "share", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false })
], VoteFactor.prototype, "pollFactorPos", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'VOTE_FACTOR_TYPE_ID', nullable: false })
], VoteFactor.prototype, "type", void 0);
VoteFactor = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'VOTE_FACTORS' })
], VoteFactor);
exports.VoteFactor = VoteFactor;
//# sourceMappingURL=VoteFactor.js.map