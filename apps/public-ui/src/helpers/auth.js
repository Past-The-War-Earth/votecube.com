import {
	navigateToPage,
	POLL_SEARCH_LIST
}                       from '../routes'
import {encodePassword} from './crypto'

export async function signUp(
	username,
	password,
	store
) {
	password = await encodePassword(password)
	try {
		await window.fb.auth().createUserWithEmailAndPassword(username + '@votecube.com', password)
		const {user}  = store.get()
		const credRef = window.db.collection('creds').doc(user.uid)
		await credRef.set({
			name: username,
			pw: password,
			uid: user.uid
		})
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

export async function signIn(
	username,
	password
) {
	password = await encodePassword(password)
	try {
		await window.fb.auth().signInWithEmailAndPassword(username + '@votecube.com', password)
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

export async function signOut() {
	try {
		await window.fb.auth().signOut()
		// Sign-out successful.
	} catch (error) {
		// An error happened.
	}
}

export function reactToUser(
	store
) {
	const user = window.fb.auth().currentUser
	store.set({user})

	window.fb.auth().onAuthStateChanged((user) => {
		if (user) {
			user = {
				user,
				name: user.email.split('@')[0]
			}
		} else {
			const {currentPage} = store.get()
			if (currentPage.authenticated) {
				navigateToPage(POLL_SEARCH_LIST)
			}
		}
		store.set({user, authChecked: true})
	})
}