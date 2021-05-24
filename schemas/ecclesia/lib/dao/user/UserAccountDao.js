var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from '@airport/air-control';
import { DI } from '@airport/di';
import { BaseUserAccountDao } from '../../generated/generated';
import { USER_ACCOUNT_DAO } from '../../tokens';
export class UserAccountDao extends BaseUserAccountDao {
}
__decorate([
    UserAccountDao.Save({
        id: Y,
        userName: Y,
        passwordHash: Y
    })
], UserAccountDao.prototype, "signUp", void 0);
__decorate([
    UserAccountDao.FindOne.Tree((userName, Q, ua) => ({
        select: {},
        from: [
            ua = Q.UserAccount
        ],
        where: ua.userName.equals(userName)
    }))
], UserAccountDao.prototype, "findOneByUsername", void 0);
DI.set(USER_ACCOUNT_DAO, UserAccountDao);
//# sourceMappingURL=UserAccountDao.js.map