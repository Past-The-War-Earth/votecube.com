import {DI}               from '@airport/di'
import {
	BaseUserAccountDao,
	IBaseUserAccountDao,
	IUserAccount,
	Q,
	QUserAccount
}                         from '../../generated/generated'
import {IVotecubeContext} from '../../index'
import {USER_ACCOUNT_DAO} from '../../tokens'
import {
	UserAccount_PasswordHash,
	UserAccount_UserName
}                         from '../../types/types'

export interface IUserAccountDao
	extends IBaseUserAccountDao {

	signUp(
		userName: UserAccount_UserName,
		passwordHash: UserAccount_PasswordHash,
		context: IVotecubeContext
	): Promise<IUserAccount>

	findByUsername(
		userName: UserAccount_UserName,
		context: IVotecubeContext
	): Promise<IUserAccount>

}

export class UserAccountDao
	extends BaseUserAccountDao
	implements IUserAccountDao {

	async signUp(
		userName: UserAccount_UserName,
		passwordHash: UserAccount_PasswordHash,
		context: IVotecubeContext
	): Promise<IUserAccount> {
		const userAccount: IUserAccount = {
			id: undefined,
			userName,
			passwordHash
		}

		await this.db.save(userAccount, context)

		return userAccount
	}

	async findByUsername(
		userName: UserAccount_UserName,
		context: IVotecubeContext
	): Promise<IUserAccount> {
		let ua: QUserAccount

		return await this.db.findOne.tree({
			select: {},
			from: [
				ua = Q.UserAccount
			],
			where: ua.userName.equals(userName)
		}, context)
	}

}

DI.set(USER_ACCOUNT_DAO, UserAccountDao)
