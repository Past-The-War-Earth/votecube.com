import { DI } from '@airport/di';
import { BehaviorSubject } from 'rxjs';
import { APP_CONTAINER } from './container';
import { user } from './store';
import { AUTH, CONNECTION_MANAGER } from './tokens';
export class Auth {
    getUser() {
        return this.user;
    }
    async reactToUser() {
        const subject = new BehaviorSubject(null);
        return subject;
    }
    async signIn(userName, password) {
        const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER);
        const passwordHash = await this.encodePassword(password);
        const userAccount = await connectionManager.put('signIn', {
            passwordHash,
            userName
        });
        if (!userAccount.code) {
            this.user = userAccount;
            user.set(this.user);
            return null;
        }
        return userAccount;
    }
    async signOut() {
        const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER);
        await connectionManager.put('signOut', {
            passwordHash: this.user.passwordHash,
            userName: this.user.userName
        });
        this.user = null;
        user.set(null);
    }
    async signUp(userName, password) {
        const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER);
        const passwordHash = await this.encodePassword(password);
        const userAccount = await connectionManager.put('signUp', {
            passwordHash,
            userName
        });
        if (!userAccount.code) {
            this.user = userAccount;
            user.set(this.user);
        }
        else {
            return userAccount;
        }
    }
    async encodePassword(password) {
        const jsSHA = await import('jssha/src/sha512');
        const shaObj = new jsSHA.default('SHA-512', 'TEXT');
        shaObj.update(password);
        return shaObj.getHash('B64');
    }
}
DI.set(AUTH, Auth);
//# sourceMappingURL=Auth.js.map