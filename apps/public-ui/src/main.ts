// Firebase App (the core Firebase SDK) is always required and must be listed first
import App from './App.svelte'

import './styles/global.css'
import './styles/votecube.css'

let app = new App({
	target: document.body
})
export default app;