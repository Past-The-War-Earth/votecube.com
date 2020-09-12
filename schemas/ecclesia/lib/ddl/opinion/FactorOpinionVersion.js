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
/**
 * Belongs to PollOpinionVersion - does not need user or creation tracking.
 */
let FactorOpinionVersion = class FactorOpinionVersion {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'FACTOR_OPINION_VERSION_ID' })
], FactorOpinionVersion.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], FactorOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'FACTOR_ID', nullable: false
    })
], FactorOpinionVersion.prototype, "factor", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_FACTOR_OPINION_VERSION_ID',
        referencedColumnName: 'FACTOR_OPINION_VERSION_ID'
    })
], FactorOpinionVersion.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], FactorOpinionVersion.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'factorOpinionVersion' })
], FactorOpinionVersion.prototype, "translations", void 0);
FactorOpinionVersion = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'FACTOR_OPINION_VERSIONS' })
], FactorOpinionVersion);
exports.FactorOpinionVersion = FactorOpinionVersion;
//# sourceMappingURL=FactorOpinionVersion.js.map