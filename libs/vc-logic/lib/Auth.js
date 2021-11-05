import { DI } from '@airport/di';
import { BehaviorSubject } from 'rxjs';
import { user } from './store';
import { AUTH, } from './tokens';
export class Auth {
    getUser() {
        return this.user;
    }
    async reactToUser() {
        const subject = new BehaviorSubject(null);
        return subject;
    }
    async signIn(username, password) {
        // TODO: generate RSA public/private keys and save them to local storage
        this.user = {
            password,
            username
        };
        user.set(this.user);
        // return userAccount
        // return this.user
    }
    async signOut() {
        this.user = null;
        user.set(null);
    }
}
DI.set(AUTH, Auth);
//# sourceMappingURL=Auth.js.map