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
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
let PositionOpinionVersion = class PositionOpinionVersion {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'POSITION_OPINION_VERSION_ID' })
], PositionOpinionVersion.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], PositionOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false
    })
], PositionOpinionVersion.prototype, "factorPosition", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POSITION_OPINION_VERSION_ID',
        referencedColumnName: 'POSITION_OPINION_VERSION_ID'
    })
], PositionOpinionVersion.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], PositionOpinionVersion.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'positionOpinionVersion' })
], PositionOpinionVersion.prototype, "translations", void 0);
PositionOpinionVersion = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POSITION_OPINION_VERSIONS' })
], PositionOpinionVersion);
exports.PositionOpinionVersion = PositionOpinionVersion;
//# sourceMappingURL=PositionOpinionVersion.js.map