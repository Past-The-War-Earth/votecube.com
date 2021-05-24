import {I, A}                from '@airport/air-control'
import {DI}               from '@airport/di'
import {
	BaseUserAccountDao,
	IBaseUserAccountDao,
	IUserAccount,
	LocalQSchema,
	QUserAccount
}                         from '../../generated/generated'
import {
	IVotecubeContext,
	UserAccount
}                         from '../../index'
import {USER_ACCOUNT_DAO} from '../../tokens'
import {
	UserAccount_PasswordHash,
	UserAccount_UserName
}                         from '../../types/types'

export interface IUserAccountDao
	extends IBaseUserAccountDao {

	signUp(
		userAccount: UserAccount,
		context: IVotecubeContext
	): Promise<IUserAccount>

	findOneByUsername(
		userName: UserAccount_UserName,
		context: IVotecubeContext
	): Promise<IUserAccount>

}

export class UserAccountDao
	extends BaseUserAccountDao
	implements IUserAccountDao {

	@UserAccountDao.Save({
		id: I,
		userName: A,
		passwordHash: A
	})
	signUp

	@UserAccountDao.FindOne.Tree((
		userName: UserAccount_UserName,
		Q: LocalQSchema,
		ua: QUserAccount
	) => ({
		select: {},
		from: [
			ua = Q.UserAccount
		],
		where: ua.userName.equals(userName)
	}))
	findOneByUsername

}

DI.set(USER_ACCOUNT_DAO, UserAccountDao)
