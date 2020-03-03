var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
let UserAccount = class UserAccount extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'USER_ACCOUNT_ID' })
], UserAccount.prototype, "id", void 0);
__decorate([
    Column({ name: 'USER_NAME', nullable: false })
], UserAccount.prototype, "userName", void 0);
__decorate([
    Column({ name: 'FIRST_NAME', nullable: false })
], UserAccount.prototype, "firstName", void 0);
__decorate([
    Column({ name: 'MIDDLE_NAME' })
], UserAccount.prototype, "middleName", void 0);
__decorate([
    Column({ name: 'LAST_NAME', nullable: false })
], UserAccount.prototype, "lastName", void 0);
__decorate([
    Column({ name: 'BIRTH_DATE' })
], UserAccount.prototype, "birthDate", void 0);
UserAccount = __decorate([
    Entity(),
    Table({ name: 'USER_ACCOUNTS' })
], UserAccount);
export { UserAccount };
//# sourceMappingURL=UserAccount.js.map