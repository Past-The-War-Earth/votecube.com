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
/**
 * Reserved for future use - let people on the the target group vote too (
 * since they can see the poll) but track it differently.
 *
 * The only currently supported vote type is "Eligible",
 * meaning made in the specified Run by a
 * user that belongs to that Location
 */
let VoteType = class VoteType extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'VOTE_TYPE_ID' })
], VoteType.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'VOTE_TYPE_NAME' })
], VoteType.prototype, "name", void 0);
__decorate([
    air_control_1.Column({ name: 'VOTE_TYPE_DESCRIPTION' })
], VoteType.prototype, "description", void 0);
VoteType = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'VOTE_TYPES' })
], VoteType);
exports.VoteType = VoteType;
//# sourceMappingURL=VoteType.js.map