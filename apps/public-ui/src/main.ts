// Firebase App (the core Firebase SDK) is always required and must be listed first
import App from './App.svelte'
import { LOCAL_API_CLIENT } from '@airport/autopilot';
import { IOC } from '@airport/direction-indicator';

import './styles/global.css'
import './styles/votecube.css'

let app = new App({
	target: document.body
})

IOC.getSync(LOCAL_API_CLIENT)
// .onMessage((
// 	message: any
// ) => {
// 	allMessages.push(message)
// 	messages.set(allMessages)
// })

export default app;