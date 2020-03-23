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
const AgeSuitableRow_1 = require("../infrastructure/row/AgeSuitableRow");
let Factor = class Factor extends AgeSuitableRow_1.AgeSuitableRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'FACTOR_ID' })
], Factor.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_ID' })
], Factor.prototype, "createdAtPollRevision", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_FACTOR_TRANSLATION_ID',
        referencedColumnName: 'FACTOR_TRANSLATION_ID'
    })
], Factor.prototype, "parentTranslation", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'PARENT_FACTOR_ID', referencedColumnName: 'FACTOR_ID' })
], Factor.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], Factor.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'factor' })
], Factor.prototype, "factorPositions", void 0);
Factor = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'FACTORS' })
], Factor);
exports.Factor = Factor;
//# sourceMappingURL=Factor.js.map