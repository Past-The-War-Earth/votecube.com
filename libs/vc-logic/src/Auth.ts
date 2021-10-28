import {DI}            from '@airport/di'
import {
	IUserAccount,
	UserAccount_Email,
	UserAccount_PasswordHash,
	UserAccount_UserName
}                      from '@votecube/ecclesia'
import {
	BehaviorSubject,
	Observable
}                      from 'rxjs'
import {APP_CONTAINER} from './container'
import {user}          from './store'
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

	reactToUser(): Promise<Observable<IUserAccount>>

	signIn(
		username: UserAccount_UserName,
		password: Auth_Password
	): Promise<IAuthError | IUserAccount>

	signOut(): Promise<void>

	signUp(
		countryId: number, 
		birthMonth: number, 
		email: string, 
		username: string
	): Promise<IAuthError | void>

}

export class Auth
	implements IAuth {

	user: IUserAccount

	getUser(): IUserAccount {
		return this.user
	}

	async reactToUser(): Promise<Observable<IUserAccount>> {
		const subject = new BehaviorSubject<IUserAccount>(null)

		return subject
	}

	async signIn(
		userName: UserAccount_UserName,
		password: Auth_Password
	): Promise<IAuthError | IUserAccount> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
		const passwordHash      = await this.encodePassword(password)

		const userAccount: IAuthError | IUserAccount = await connectionManager.put('signIn', {
			passwordHash,
			userName
		})

		if (!(<IAuthError>userAccount).code) {
			this.user = <IUserAccount>userAccount
			user.set(this.user)
			return null;
		}

		return userAccount
	}

	async signOut(): Promise<void> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)

		await connectionManager.put('signOut', {
			passwordHash: this.user.passwordHash,
			userName: this.user.userName
		})

		this.user = null
		user.set(null)
	}

	async signUp(
		countryId: number, 
		birthMonth: number, 
		email: string, 
		userName: string
	): Promise<IAuthError | void> {
		const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)
		// const passwordHash      = await this.encodePassword(password)

		const userAccount: IAuthError | IUserAccount = await connectionManager.put('signUp', {
			countryId,
			birthMonth,
			email,
			userName
		})

		if (!(<IAuthError>userAccount).code) {
			this.user = <IUserAccount>{
				countryId,
				birthMonth,
				email,
				userName,
			}
			user.set(this.user)
		} else {
			return <IAuthError>userAccount
		}
	}

	// private async encodePassword(
	// 	password: Auth_Password
	// ): Promise<UserAccount_PasswordHash> {
	// 	const jsSHA = await import('jssha/src/sha512')

	// 	const shaObj = new jsSHA.default('SHA-512', 'TEXT')
	// 	shaObj.update(password)

	// 	return shaObj.getHash('B64')
	// }

}

DI.set(AUTH, Auth)
