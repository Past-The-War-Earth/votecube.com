import { 
// container,
DI } from '@airport/di';
import { AUTH } from './tokens';
export class Auth {
    getUser() {
        /*
        if (!dbUser) {
            return null
        }
        return {
            db: dbUser,
            key: dbUser.uid,
            name: dbUser.email.split('@')[0]
        }
         */
        return null;
    }
    async reactToUser(
    // fbAuthUser: IFbAuthUser
    ) {
        /*
        const fb: app.App = (window as any).fb

        // const user = this.getUser()
        // store.set({user})

        const subject = new BehaviorSubject<IUserAccount>(null)

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
            subject.next(this.getUser())
            // store.set({user, authChecked: true})
        })

        return subject
         */
        return null;
    }
    async signIn(username, password) {
        /*
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
         */
    }
    async signOut() {
        /*
        try {
            const fb: app.App = (window as any).fb
            await fb.auth().signOut()
            // Sign-out successful.
        } catch (error) {
            // An error happened.
        }
         */
    }
    async signUp(username, password) {
        /*
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
        */
        return null;
    }
    async encodePassword(password) {
        const jsSHA = await import('jssha/src/sha512');
        const shaObj = new jsSHA('SHA-512', 'TEXT');
        shaObj.update(password);
        return shaObj.getHash('B64');
    }
}
DI.set(AUTH, Auth);
//# sourceMappingURL=Auth.js.map