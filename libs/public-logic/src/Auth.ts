import {
	container,
	DI
}             from '@airport/di'
import {
	BehaviorSubject,
	IObservable
}             from '@airport/observe'
import {
	IUserAccount,
	USER_ACCOUNT_DAO,
	UserAccount_UserName
}             from '@votecube/relational-db'
import {AUTH} from './tokens'

export type Password = string

export interface IAuthError {

	code?: string;
	message?: string;

}

export interface IAuth {

	getUser(): IUserAccount

	reactToUser(): Promise<IObservable<IUserAccount>>

	signIn(
		username: UserAccount_UserName,
		password: Password
	): Promise<IAuthError | IUserAccount>

	signOut(): Promise<void>

	signUp(
		username: UserAccount_UserName,
		password: Password
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
		password: Password
	): Promise<IAuthError | IUserAccount> {
		const userAccountDao = await container(this).get(USER_ACCOUNT_DAO)
		const userAccount = await userAccountDao.findByUsername(userName)

		if (userAccount === null) {
			return {
				code: 'NotFound'
			}
		}

		const passwordHash = await this.encodePassword(password)
		if (passwordHash !== userAccount.passwordHash) {
			return {
				code: 'WrongPassword'
			}
		} else if (false) {
			return {
				code: 'TooManyTries'
			}
		}

		this.user = userAccount

		return this.user
	}

	async signOut(): Promise<void> {
		this.user = null
	}

	async signUp(
		userName: UserAccount_UserName,
		password: Password
	): Promise<IAuthError | void> {
		const userAccountDao = await container(this).get(USER_ACCOUNT_DAO)
		const passwordHash = await this.encodePassword(password)

		try {
			await userAccountDao.signUp(userName, passwordHash)
		} catch (e) {
			return {
				code: 'InUse'
			}
			// return {
			// 	code: 'Invalid'
			// }
		}
	}

	private async encodePassword(
		password: Password
	): Promise<Password> {
		const jsSHA = await import('jssha/src/sha512')

		const shaObj = new jsSHA('SHA-512', 'TEXT')
		shaObj.update(password)

		return shaObj.getHash('B64')
	}
}

DI.set(AUTH, Auth)
