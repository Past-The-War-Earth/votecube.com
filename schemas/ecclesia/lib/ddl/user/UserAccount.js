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
let UserAccount = class UserAccount extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'USER_ACCOUNT_ID' })
], UserAccount.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'USER_NAME', nullable: false })
], UserAccount.prototype, "userName", void 0);
__decorate([
    air_control_1.Column({ name: 'EMAIL', nullable: false })
], UserAccount.prototype, "email", void 0);
__decorate([
    air_control_1.Column({ name: 'PASSWORD_HASH', nullable: false })
], UserAccount.prototype, "passwordHash", void 0);
__decorate([
    air_control_1.Column({ name: 'FIRST_NAME', nullable: false })
], UserAccount.prototype, "firstName", void 0);
__decorate([
    air_control_1.Column({ name: 'MIDDLE_NAME' })
], UserAccount.prototype, "middleName", void 0);
__decorate([
    air_control_1.Column({ name: 'LAST_NAME', nullable: false })
], UserAccount.prototype, "lastName", void 0);
__decorate([
    air_control_1.Column({ name: 'BIRTH_DATE' })
], UserAccount.prototype, "birthDate", void 0);
UserAccount = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'USER_ACCOUNTS' })
], UserAccount);
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map