import {DI}            from '@airport/di'
import {
	BehaviorSubject,
	IObservable
}                      from '@airport/observe'
import {
	IUserAccount,
	UserAccount_Email,
	UserAccount_PasswordHash,
	UserAccount_UserName
}                      from '@votecube/ecclesia'
import {APP_CONTAINER} from './container'
import {
	AUTH,
	CONNECTION_MANAGER
}                      from './tokens'

export interface IAuthError {

	code?: string;
	message?: string;

}

export type Auth_Password = string;

export interface IAuth {

	getUser(): IUserAccount

	reactToUser(): Promise<IObservable<IUserAccount>>

	signIn(
		username: UserAccount_UserName,
		password: Auth_Password
	): Promise<IAuthError | IUserAccount>

	signOut(): Promise<void>

	signUp(
		email: UserAccount_Email,
		password: Auth_Password
	): Promise<IAuthError | void>

}

export class Auth
	implements IAuth {

	user: IUserAccount

	getUser(): IUserAccount {
		return this.user
	}

	async reactToUser(): Promise<IObservable<IUserAccount>> {
		const subject = new BehaviorSubject<IUserAccount>(null)

		return subject
	}

	async signIn(
		userName: UserAccount_UserName,
		password: Auth_Password
	): Promise<IAuthError | IUserAccount> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
		const passwordHash      = await this.encodePassword(password)

		const userAccount: IAuthError | IUserAccount = await connectionManager.get('signIn', {
			passwordHash,
			userName
		})

		if (!(<IAuthError>userAccount).code) {
			this.user = <IUserAccount>userAccount
		}

		return userAccount
	}

	async signOut(): Promise<void> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)

		await connectionManager.get('signOut', {
			passwordHash: this.user.passwordHash,
			userName: this.user.userName
		})

		this.user = null
	}

	async signUp(
		userName: UserAccount_UserName,
		password: Auth_Password
	): Promise<IAuthError | void> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
		const passwordHash      = await this.encodePassword(password)

		const userAccount: IAuthError | IUserAccount = await connectionManager.put('signUp', {
			passwordHash,
			userName
		})

		if (!(<IAuthError>userAccount).code) {
			this.user = <IUserAccount>userAccount
		} else {
			return <IAuthError>userAccount
		}
	}

	private async encodePassword(
		password: Auth_Password
	): Promise<UserAccount_PasswordHash> {
		const jsSHA = await import('jssha/src/sha512')

		const shaObj = new jsSHA('SHA-512', 'TEXT')
		shaObj.update(password)

		return shaObj.getHash('B64')
	}

}

DI.set(AUTH, Auth)
