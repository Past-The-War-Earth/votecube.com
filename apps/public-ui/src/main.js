// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import App           from './App.html'

import './assets/styles/global.css'
import './assets/styles/votecube.css'

document.addEventListener('DOMContentLoaded', function () {
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
		window.fb            = firebase.initializeApp(firebaseConfig)
		window.db            = firebase.firestore()
		window.app           = new App({
			target: document.body
		})
	} catch (e) {
		console.error(e)
	}
})