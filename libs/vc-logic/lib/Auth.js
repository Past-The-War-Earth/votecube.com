import { DI } from '@airport/di';
import { BehaviorSubject } from 'rxjs';
import { user } from './store';
import { AUTH } from './tokens';
export class Auth {
    getUser() {
        return this.user;
    }
    async reactToUser() {
        const subject = new BehaviorSubject(null);
        return subject;
    }
    async signIn(username, password) {
        // const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
        // const passwordHash      = await this.encodePassword(password)
        // const userAccount: IAuthError | IUserAccount = await connectionManager.put('signIn', {
        // 	passwordHash,
        // 	userName
        // })
        // if (!(<IAuthError>userAccount).code) {
        // 	this.user = <IUserAccount>userAccount
        // 	user.set(this.user)
        // 	return null;
        // }
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
        // const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
        // await connectionManager.put('signOut', {
        // 	passwordHash: this.user.passwordHash,
        // 	userName: this.user.userName
        // })
        this.user = null;
        user.set(null);
    }
}
DI.set(AUTH, Auth);
//# sourceMappingURL=Auth.js.map