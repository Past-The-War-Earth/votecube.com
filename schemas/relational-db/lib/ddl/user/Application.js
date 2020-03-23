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
let Application = class Application extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'APPLICATION_ID' })
], Application.prototype, "id", void 0);
__decorate([
    air_control_1.DbString(),
    air_control_1.Column({ name: 'HOST', nullable: false })
], Application.prototype, "host", void 0);
__decorate([
    air_control_1.Column({ name: 'PORT', nullable: false }),
    air_control_1.DbNumber()
], Application.prototype, "port", void 0);
Application = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'APPLICATIONS' })
], Application);
exports.Application = Application;
//# sourceMappingURL=Application.js.map