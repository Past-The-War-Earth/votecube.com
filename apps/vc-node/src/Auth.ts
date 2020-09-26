import {
	container,
	DI
}             from '@airport/di'
import {
	IUserAccount,
	USER_ACCOUNT_DAO,
	UserAccount_UserName
}             from '@votecube/ecclesia'
import {AUTH} from './tokens'

export interface IAuthError {

	code?: string;
	message?: string;

}

export interface IAuth {

	signIn(
		username: string,
		passwordHash: string
	): Promise<IAuthError | IUserAccount>

	signOut(
		userName: string,
		passwordHash: string
	): Promise<void>

	signUp(
		email: string,
		passwordHash: string
	): Promise<IAuthError | IUserAccount>

}

export class Auth
	implements IAuth {

	async signIn(
		userName: UserAccount_UserName,
		passwordHash: string
	): Promise<IAuthError | IUserAccount> {
		const userAccountDao = await container(this).get(USER_ACCOUNT_DAO)
		const userAccount = await userAccountDao.findByUsername(userName)

		if (userAccount === null) {
			return {
				code: 'NotFound'
			}
		}

		if (passwordHash !== userAccount.passwordHash) {
			return {
				code: 'WrongPassword'
			}
		} else if (false) {
			return {
				code: 'TooManyTries'
			}
		}

		return userAccount
	}

	async signOut(
		userName: string,
		passwordHash: string
	): Promise<void> {
	}

	async signUp(
		userName: string,
		passwordHash: string
	): Promise<IAuthError | IUserAccount> {
		const userAccountDao = await container(this).get(USER_ACCOUNT_DAO)

		try {
			return await userAccountDao.signUp(userName, passwordHash)
		} catch (e) {
			return {
				code: 'InUse'
			}
			// return {
			// 	code: 'Invalid'
			// }
		}
	}

}

DI.set(AUTH, Auth)
