// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
import { AirportDatabase } from '@airport/tower'
AirportDatabase.name

import 'firebase/auth'
import 'firebase/firestore'
import App from './App.svelte'

import './assets/styles/global.css'
import './assets/styles/votecube.css'

document.addEventListener('DOMContentLoaded', function () {
	setupApp().then()
})

async function setupApp() {
	// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	// // The Firebase SDK is initialized and available here!
	//
	// firebase.auth().onAuthStateChanged(user => { });
	// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
	// firebase.messaging().requestPermission().then(() => { });
	// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
	//
	// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

	try {
		const firebaseConfig = {
			apiKey: 'AIzaSyBOCapRraYiDlYQn9T28LiU9MYfkA_8Wjw',
			authDomain: 'votecube-stage.firebaseapp.com',
			databaseURL: 'https://votecube-stage.firebaseio.com',
			projectId: 'votecube-stage',
			storageBucket: 'votecube-stage.appspot.com',
			messagingSenderId: '786611247734',
			appId: '1:786611247734:web:516b06d350cbe146461d57'
		}

		/*
		const firebaseConfig = {
			apiKey: "AIzaSyBUly0jLwN9GV5Md0sEhT4abcWdoWmITME",
			authDomain: "votecube-v1.firebaseapp.com",
			databaseURL: "https://votecube-v1.firebaseio.com",
			projectId: "votecube-v1",
			storageBucket: "votecube-v1.appspot.com",
			messagingSenderId: "149193719099",
			appId: "1:149193719099:web:69e7bcd97ba579b5470b1e"
		}
		*/

		window.fb = firebase.initializeApp(firebaseConfig)
		window.db = firebase.firestore()
		// try {
		// 	await window.db.enablePersistence({synchronizeTabs: true})
		// } catch (error) {
		// 	console.log(error);
		// 	// Its OK if caching could not be enabled
		// }
		window.app = new App({
			target: document.body
		})
	} catch (e) {
		console.error(e)
	}
}
