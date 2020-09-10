"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const observe_1 = require("@airport/observe");
const public_db_1 = require("@votecube/public-db");
const tokens_1 = require("./tokens");
class Auth {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getFbAuthUser() {
        const fb = window.fb;
        return fb.auth().currentUser;
    }
    getUser(dbUser = this.getFbAuthUser()) {
        if (!dbUser) {
            return null;
        }
        return {
            db: dbUser,
            key: dbUser.uid,
            name: dbUser.email.split('@')[0]
        };
    }
    async reactToUser(
    // fbAuthUser: IFbAuthUser
    ) {
        const fb = window.fb;
        // const user = this.getUser()
        // store.set({user})
        const subject = new observe_1.BehaviorSubject(null);
        fb.auth().onAuthStateChanged((fbAuthUser) => {
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
            subject.next(this.getUser(fbAuthUser));
            // store.set({user, authChecked: true})
        });
        return subject;
    }
    async signIn(username, password) {
        password = await this.encodePassword(password);
        try {
            const fb = window.fb;
            await fb.auth().signInWithEmailAndPassword(username + '@votecube.com', password);
        }
        catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    return {
                        code: 'NotFound'
                    };
                case 'auth/wrong-password':
                    return {
                        code: 'WrongPassword'
                    };
                case 'auth/too-many-requests':
                    return {
                        code: 'TooManyTries'
                    };
                default:
                    return {
                        message: error.message
                    };
            }
        }
    }
    async signOut() {
        try {
            const fb = window.fb;
            await fb.auth().signOut();
            // Sign-out successful.
        }
        catch (error) {
            // An error happened.
        }
    }
    async signUp(username, password) {
        password = await this.encodePassword(password);
        try {
            const fb = window.fb;
            await fb.auth().createUserWithEmailAndPassword(username + '@votecube.com', password);
            const user$ = await this.reactToUser();
            let user;
            user$.subscribe(createdUser => user = createdUser).unsubscribe();
            const userDao = await di_1.container(this).get(public_db_1.USER_DAO);
            await userDao.signUp(username, password, user);
        }
        catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    return {
                        code: 'InUse'
                    };
                case 'auth/invalid-email':
                    return {
                        code: 'Invalid'
                    };
                default:
                    return {
                        message: error.message
                    };
            }
        }
    }
    async encodePassword(password) {
        const jsSHA = await Promise.resolve().then(() => require('jssha/src/sha512'));
        const shaObj = new jsSHA('SHA-512', 'TEXT');
        shaObj.update(password);
        return shaObj.getHash('B64');
    }
}
exports.Auth = Auth;
di_1.DI.set(tokens_1.AUTH, Auth);
//# sourceMappingURL=Auth.js.map