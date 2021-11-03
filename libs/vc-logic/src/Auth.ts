import { DI } from '@airport/di'
import {
	IUserAccount,
	UserAccount_Email,
	UserAccount_PasswordHash,
	UserAccount_UserName
} from '@votecube/ecclesia'
import {
	BehaviorSubject,
	Observable
} from 'rxjs'
import { IUserInfo } from '.'
import { APP_CONTAINER } from './container'
import { user } from './store'
import {
	AUTH,
	CONNECTION_MANAGER
} from './tokens'

export interface IAuthError {

	code?: string;
	message?: string;

}

export type Auth_Password = string;

export interface IAuth {

	getUser(): IUserInfo

	reactToUser(): Promise<Observable<IUserInfo>>

	signIn(
		username: string,
		password: string
	): Promise<void>

	signOut(): Promise<void>

	/*
	signUp(
		countryId: number, 
		birthMonth: number, 
		email: string, 
		username: string
	): Promise<IAuthError | void>
	*/
}

export class Auth
	implements IAuth {

	user: IUserInfo

	getUser(): IUserInfo {
		return this.user
	}

	async reactToUser(): Promise<Observable<IUserInfo>> {
		const subject = new BehaviorSubject<IUserInfo>(null)

		return subject
	}

	async signIn(
		username: string,
		password: string
	): Promise<void> {
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
		}
		user.set(this.user)

		// return userAccount
		// return this.user
	}

	async signOut(): Promise<void> {
		// const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER)

		// await connectionManager.put('signOut', {
		// 	passwordHash: this.user.passwordHash,
		// 	userName: this.user.userName
		// })

		this.user = null
		user.set(null)
	}

	/*
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
	*/

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
