import {DI}               from '@airport/di'
import {
	closeDb,
	startDb
} from '@airport/mysql'
import {injectAirportDatabase} from '@airport/tower'
injectAirportDatabase()
import {injectTransactionalServer} from '@airport/terminal'
import {injectTransactionalConnector} from '@airport/tarmaq'
import {SCHEMA}           from '@votecube/ecclesia/lib/generated/schema'
import {fastify}          from 'fastify'
import {AUTH}             from './tokens'

injectTransactionalServer()
injectTransactionalConnector()

import fastifyCors from 'fastify-cors'

const server = fastify({logger: false})
server.register(fastifyCors, {
	origin: (
		origin,
		cb
	) => {
		cb(null, true)
		/*
		// console.log('Origin: ' + origin)
		if (!origin || /'votecube.com'/.test(origin) || /localhost/.test(origin)) {
			cb(null, true)
			return
		}
		cb(new Error('Not allowed CORS host'), false)
		 */
	}
})

server.put('/api/signIn', async (
	request,
	reply
) => {
	const auth = await DI.db().get(AUTH)
	const body: any = JSON.parse(request.body as any)

	return await auth.signIn(body.userName, body.passwordHash)
})

server.put('/api/signOut', async (
	request,
	reply
) => {
	const auth = await DI.db().get(AUTH)
	const body: any = JSON.parse(request.body as any)

	await auth.signOut(body.userName, body.passwordHash)

	return null
})

server.put('/api/signUp', async (
	request,
	reply
) => {
	const auth = await DI.db().get(AUTH)
	const body: any = JSON.parse(request.body as any)

	return await auth.signUp(body.userName, body.passwordHash)
})

server.put('/api/createRevision', async (
	request,
	reply
) => {
	// return someJsonObject
})

server.get('/api/findUserVoteForPoll', async (
	request,
	reply
) => {
	// DI.db().get(VOTE_DAO)
	// request.body
	// request.query
	// return someJsonObject
})

// Run the server!
const startFunction = async () => {
	try {
		console.log('before startDb')
		await startDb('votecube.com', SCHEMA)
		await server.listen(8081, '0.0.0.0')
		server.log.info(`server listening on ${(server.server as any).address().port}`)
	} catch (err) {
		server.log.error(err)
		console.log(err)
		process.exit(1)
	}
}

// process.on('exit', () => {
// 	console.log('About to exit, waiting for remaining connections to complete')
// 	// app.close();
// })

process.on('SIGINT', () => {
	console.log('Caught interrupt signal')
	closeDb()
	console.log('Database closed.')
	process.exit()
})

startFunction().then()
