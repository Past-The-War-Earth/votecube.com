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
let OutcomeOpinionVersion = class OutcomeOpinionVersion {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'OUTCOME_OPINION_VERSION_ID' })
], OutcomeOpinionVersion.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], OutcomeOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'OUTCOME_ID', nullable: false
    })
], OutcomeOpinionVersion.prototype, "outcome", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_OUTCOME_OPINION_VERSION_ID',
        referencedColumnName: 'OUTCOME_OPINION_VERSION_ID'
    })
], OutcomeOpinionVersion.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], OutcomeOpinionVersion.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'outcomeOpinionVersion' })
], OutcomeOpinionVersion.prototype, "translations", void 0);
OutcomeOpinionVersion = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'OUTCOME_OPINION_VERSIONS' })
], OutcomeOpinionVersion);
exports.OutcomeOpinionVersion = OutcomeOpinionVersion;
//# sourceMappingURL=OutcomeOpinionVersion.js.map