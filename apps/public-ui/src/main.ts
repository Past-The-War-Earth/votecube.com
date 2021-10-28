// Firebase App (the core Firebase SDK) is always required and must be listed first
import { IOC } from '@airport/di'
import { TRANSACTIONAL_RECEIVER } from '@airport/terminal-map'
import {
	injectTransactionalConnector,
	injectTransactionalServer
} from '@airport/terminal'
import {
	injectAirportDatabase,
	injectEntityStateManager
} from '@airport/tower'
import { startDb } from '@airport/sqljs'
import { AirportDatabase } from '@airport/tower'
AirportDatabase.name

import App from './App.svelte'

import './assets/styles/global.css'
import './assets/styles/votecube.css'

let app;
export default app;

document.addEventListener('DOMContentLoaded', function () {
	setupApp().then()
})

export function injectAirport(): void {
	console.log('Injecting Airport')
	injectTransactionalConnector()
	injectAirportDatabase()
	injectTransactionalServer()
	injectEntityStateManager()
}

injectAirport()

async function setupApp() {
	try {
		app = new App({
			target: document.body
		})
		await startDb('votecube')
	} catch (e) {
		console.error(e)
	}
}
