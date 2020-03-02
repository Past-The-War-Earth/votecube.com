import {container, DI} from '@airport/di'
import {
	IUser,
	User_Name
}                      from '@votecube/model'
import {
	SCHEMA,
	USER_DAO
}                      from '../tokens'

export type Password = string

export interface IUserDao {

	signUp(
		username: User_Name,
		password: Password,
		user: IUser
	): Promise<void>

}

export class UserDao
	implements IUserDao {

	async signUp(
		username: User_Name,
		password: Password,
		user: IUser
	): Promise<void> {
		const schema = await container(this).get(SCHEMA)

		await schema.db.runTransaction(async (transaction) => {
			const userRef = schema.users.doc(user.id)
			const credRef = schema.users.creds(userRef).doc(user.id)

			await userRef.set({
				id: user.id,
				name: username
			})
			await credRef.set({
				hash: password,
				id: user.id,
				userId: user.id
			})
		})
	}

}

DI.set(USER_DAO, UserDao)
