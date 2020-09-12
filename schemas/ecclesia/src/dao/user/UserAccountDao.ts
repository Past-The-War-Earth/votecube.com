import {DI}               from '@airport/di'
import {
	BaseUserAccountDao,
	IBaseUserAccountDao,
	IUserAccount,
	Q,
	QUserAccount
}                         from '../../generated/generated'
import {USER_ACCOUNT_DAO} from '../../tokens'
import {
	UserAccount_PasswordHash,
	UserAccount_UserName
}                         from '../../types/types'

export interface IUserAccountDao
	extends IBaseUserAccountDao {

	signUp(
		userName: UserAccount_UserName,
		passwordHash: UserAccount_PasswordHash
	): Promise<IUserAccount>

	findByUsername(
		userName: UserAccount_UserName
	): Promise<IUserAccount>

}

export class UserAccountDao
	extends BaseUserAccountDao
	implements IUserAccountDao {

	async signUp(
		userName: UserAccount_UserName,
		passwordHash: UserAccount_PasswordHash
	): Promise<IUserAccount> {
		const userAccount: IUserAccount = {
			id: undefined,
			userName,
			passwordHash
		}

		await this.db.create(userAccount)

		return userAccount
	}

	async findByUsername(
		userName: UserAccount_UserName
	): Promise<IUserAccount> {
		let ua: QUserAccount

		return await this.db.findOne.tree({
			select: {},
			from: [
				ua = Q.UserAccount
			],
			where: ua.userName.equals(userName)
		})
	}

}

DI.set(USER_ACCOUNT_DAO, UserAccountDao)
