import {container, DI}   from '@airport/di'
import {
	BehaviorSubject,
	IObservable
}             from '@airport/observe'
import {
	IUser,
	User_Name
}             from '@votecube/model'
import {
	Password,
	USER_DAO
}             from '@votecube/public-db'
import {app}  from 'firebase'
import {AUTH} from './diTokens'

export interface IAuthError {

	code?: string;
	message?: string;

}

export interface IFbAuthUser {

	email: string
	uid: string

}

export interface IAppUser
	extends IUser {

	db: IFbAuthUser

}

export interface IAuth {

	getFbAuthUser(): IFbAuthUser

	getUser(
		dbUser?: IFbAuthUser
	): IAppUser

	reactToUser(): Promise<IObservable<IAppUser>>

	signIn(
		username: string,
		password: string
	): Promise<IAuthError | void>

	signOut(): Promise<void>

	signUp(
		username: string,
		password: string
	): Promise<IAuthError | void>

}

export class Auth
	implements IAuth {

	getFbAuthUser(): IFbAuthUser {
		const fb: app.App = (window as any).fb

		return fb.auth().currentUser
	}

	getUser(
		dbUser: IFbAuthUser = this.getFbAuthUser()
	): IAppUser {
		if (!dbUser) {
			return null
		}
		return {
			db: dbUser,
			key: dbUser.uid,
			name: dbUser.email.split('@')[0]
		}
	}

	async reactToUser(
		// fbAuthUser: IFbAuthUser
	): Promise<IObservable<IAppUser>> {
		const fb: app.App = (window as any).fb

		// const user = this.getUser()
		// store.set({user})

		const subject = new BehaviorSubject<IAppUser>(null)

		fb.auth().onAuthStateChanged((
			fbAuthUser: IFbAuthUser
		) => {
			// let appUser: IAppUser = null
			// if (fbAuthUser) {
			// 	appUser = this.getUser(fbAuthUser)
			// } else {
			// 	const {currentPage} = store.get()
			// 	if (currentPage.authenticated) {
			// 		return true
			// 		// navigateToPage(POLL_LIST)
			// 	}
			// }
			subject.next(this.getUser(fbAuthUser))
			// store.set({user, authChecked: true})
		})

		return subject
	}

	async signIn(
		username: User_Name,
		password: Password
	): Promise<IAuthError | void> {
		password = await this.encodePassword(password)
		try {
			const fb: app.App = (window as any).fb
			await fb.auth().signInWithEmailAndPassword(
				username + '@votecube.com', password)
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					return {
						code: 'NotFound'
					}
				case 'auth/wrong-password':
					return {
						code: 'WrongPassword'
					}
				case 'auth/too-many-requests':
					return {
						code: 'TooManyTries'
					}
				default:
					return {
						message: error.message
					}
			}
		}
	}

	async signOut(): Promise<void> {
		try {
			const fb: app.App = (window as any).fb
			await fb.auth().signOut()
			// Sign-out successful.
		} catch (error) {
			// An error happened.
		}
	}

	async signUp(
		username: string,
		password: string
	): Promise<IAuthError | void> {
		password = await this.encodePassword(password)
		try {
			const fb: app.App = (window as any).fb
			await fb.auth().createUserWithEmailAndPassword(
				username + '@votecube.com', password)

			const user$ = await this.reactToUser()

			let user
			user$.subscribe(
				createdUser =>
					user = createdUser
			).unsubscribe()

			const userDao = await container(this).get(USER_DAO)

			await userDao.signUp(username, password, user)
		} catch (error) {
			switch (error.code) {
				case 'auth/email-already-in-use':
					return {
						code: 'InUse'
					}
				case 'auth/invalid-email':
					return {
						code: 'Invalid'
					}
				default:
					return {
						message: error.message
					}
			}
		}
	}

	private async encodePassword(
		password: Password
	): Promise<Password> {
		const shaObj = await import('jssha/src/sha512')

		shaObj.default('SHA-512', 'TEXT')
		shaObj.update(password)

		return shaObj.getHash('B64')
	}
}

DI.set(AUTH, Auth)
