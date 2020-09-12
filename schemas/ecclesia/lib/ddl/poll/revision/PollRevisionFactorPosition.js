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
const ImmutableRow_1 = require("../../infrastructure/row/ImmutableRow");
let PollRevisionFactorPosition = class PollRevisionFactorPosition extends ImmutableRow_1.ImmutableRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'POLL_REVISION_FACTOR_POSITION_ID' })
], PollRevisionFactorPosition.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false }),
    air_control_1.DbString()
], PollRevisionFactorPosition.prototype, "axis", void 0);
__decorate([
    air_control_1.Column({ name: 'POSITION_ORIENTATION', nullable: false }),
    air_control_1.DbNumber()
], PollRevisionFactorPosition.prototype, "dir", void 0);
__decorate([
    air_control_1.Column({ name: 'FACTOR_NUMBER', nullable: false }),
    air_control_1.DbNumber()
], PollRevisionFactorPosition.prototype, "factorNumber", void 0);
__decorate([
    air_control_1.Column({ name: 'COLOR_BLUE', nullable: false })
], PollRevisionFactorPosition.prototype, "blue", void 0);
__decorate([
    air_control_1.Column({ name: 'COLOR_GREEN', nullable: false })
], PollRevisionFactorPosition.prototype, "green", void 0);
__decorate([
    air_control_1.Column({ name: 'COLOR_RED', nullable: false })
], PollRevisionFactorPosition.prototype, "red", void 0);
__decorate([
    air_control_1.Column({ name: 'OUTCOME_ORDINAL', nullable: false }),
    air_control_1.DbString()
], PollRevisionFactorPosition.prototype, "outcomeOrdinal", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'SKIN_ID' })
], PollRevisionFactorPosition.prototype, "skin", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRevisionFactorPosition.prototype, "pollRevision", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumns([{
            name: 'FACTOR_ID', nullable: false
        }, {
            name: 'POSITION_ID', nullable: false
        }])
], PollRevisionFactorPosition.prototype, "factorPosition", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POLL_REVISION_FACTOR_POSITION_ID',
        referencedColumnName: 'POLL_REVISION_FACTOR_POSITION_ID'
    })
], PollRevisionFactorPosition.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], PollRevisionFactorPosition.prototype, "children", void 0);
PollRevisionFactorPosition = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISION_FACTOR_POSITIONS' })
], PollRevisionFactorPosition);
exports.PollRevisionFactorPosition = PollRevisionFactorPosition;
//# sourceMappingURL=PollRevisionFactorPosition.js.map