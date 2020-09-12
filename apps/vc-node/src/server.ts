import {AIR_DB}           from '@airport/air-control'
import {DI}               from '@airport/di'
import {DATABASE_MANAGER} from '@airport/terminal'
import {StoreType}        from '@airport/terminal-map'
import {SCHEMA}           from '@votecube/ecclesia/lib/generated/schema'
import {fastify}          from 'fastify'

const server = fastify({logger: false})
server.register(require('fastify-cors'), {
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

server.put('/api/hello', async (
	request,
	reply
) => {
	// return someJsonObject
})

// Run the server!
const startFunction = async () => {
	try {
		await startDb()
		await server.listen(8081, '0.0.0.0')
		server.log.info(`server listening on ${(server.server as any).address().port}`)
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}

async function startDb() {
	await DI.db().get(AIR_DB)
	const dbManager = await DI.db().get(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

function closeDb() {

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
