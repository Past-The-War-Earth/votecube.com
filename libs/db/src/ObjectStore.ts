import {IModel} from '@votecube/model'

export interface IObjectStore<Entity> {

	add(
		record: Entity,
		skipExistingServerRecord?: boolean,
		skipExistingAirRecord?: boolean
	): Promise<void>

}

const AIR_ID_MAP = [
	['actorRecordId', '/I'],
	['repositoryActorId', '/A'],
	['repositoryId', '/R'],
]

export class ObjectStore<Entity extends IModel> {
	constructor(
		private store: IDBObjectStore
	) {
	}

	async add(
		record: Entity,
		skipExistingServerRecord = true,
		skipExistingAirRecord    = true
	): Promise<void> {
		return new Promise((
			resolve,
			reject
		) => {
			// Don't have to add the record, it's already present
			if (skipExistingServerRecord && record.id) {
				resolve()
			}

			if (!record.repositoryId) {
				record.repositoryId = 0
			}

			if (!record.repositoryActorId) {
				record.repositoryActorId = 0
			}

			const request = this.store.add(record)

			request.onsuccess = (
				event
			) => {
				record.actorRecordId = (event.target as any).result
				resolve()
			}

			request.onerror = () => {
				reject()
			}
		})
	}

}
