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
 * This is the generic position records (not related to any poll).
 */
let Position = class Position extends AgeSuitableRow_1.AgeSuitableRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'POSITION_ID' })
], Position.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_ID' })
], Position.prototype, "createdAtPollRevision", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POSITION_TRANSLATION_ID',
        referencedColumnName: 'POSITION_TRANSLATION_ID'
    })
], Position.prototype, "parentTranslation", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POSITION_ID',
        referencedColumnName: 'POSITION_ID'
    })
], Position.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], Position.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'position' })
], Position.prototype, "factorPositions", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'position' })
], Position.prototype, "translations", void 0);
Position = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POSITIONS' })
], Position);
exports.Position = Position;
//# sourceMappingURL=Position.js.map