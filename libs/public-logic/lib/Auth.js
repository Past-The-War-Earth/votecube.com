"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const observe_1 = require("@airport/observe");
const relational_db_1 = require("@votecube/relational-db");
const tokens_1 = require("./tokens");
class Auth {
    getUser() {
        return this.user;
    }
    async reactToUser() {
        const subject = new observe_1.BehaviorSubject(null);
        return subject;
    }
    async signIn(userName, password) {
        const userAccountDao = await di_1.container(this).get(relational_db_1.USER_ACCOUNT_DAO);
        const userAccount = await userAccountDao.findByUsername(userName);
        if (userAccount === null) {
            return {
                code: 'NotFound'
            };
        }
        const passwordHash = await this.encodePassword(password);
        if (passwordHash !== userAccount.passwordHash) {
            return {
                code: 'WrongPassword'
            };
        }
        else if (false) {
            return {
                code: 'TooManyTries'
            };
        }
        this.user = userAccount;
        return this.user;
    }
    async signOut() {
        this.user = null;
    }
    async signUp(userName, password) {
        const userAccountDao = await di_1.container(this).get(relational_db_1.USER_ACCOUNT_DAO);
        const passwordHash = await this.encodePassword(password);
        try {
            await userAccountDao.signUp(userName, passwordHash);
        }
        catch (e) {
            return {
                code: 'InUse'
            };
            // return {
            // 	code: 'Invalid'
            // }
        }
    }
    async encodePassword(password) {
        const jsSHA = await Promise.resolve().then(() => require('jssha/src/sha512'));
        const shaObj = new jsSHA('SHA-512', 'TEXT');
        shaObj.update(password);
        return shaObj.getHash('B64');
    }
}
exports.Auth = Auth;
di_1.DI.set(tokens_1.AUTH, Auth);
//# sourceMappingURL=Auth.js.map