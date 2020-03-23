"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const SystemGeneratedRow_1 = require("../infrastructure/row/SystemGeneratedRow");
let Town = class Town extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'TOWN_ID' })
], Town.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'COUNTY_ID', nullable: false })
], Town.prototype, "county", void 0);
__decorate([
    air_control_1.Column({ name: 'TOWN_NAME', nullable: false })
], Town.prototype, "name", void 0);
Town = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({
        name: 'TOWNS'
    })
], Town);
exports.Town = Town;
//# sourceMappingURL=Town.js.map