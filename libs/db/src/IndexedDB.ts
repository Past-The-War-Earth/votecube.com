import {
	Database,
	IDatabase
} from './Database'

export class IndexedDB {

	async open(
		name: string,
		version = 1,
		upgradeCallback
	): Promise<IDatabase> {
		return new Promise((
			resolve,
			reject
		) => {
			const dbOpenRequest = window.indexedDB.open(name, version)

			dbOpenRequest.onerror = (event) => {
				reject(event)
			}

			dbOpenRequest.onsuccess = (event) => {
				resolve(new Database(dbOpenRequest.result))
			}

			dbOpenRequest.onupgradeneeded = function (event) {
				const db = this.result

				db.onerror = (errorEvent) => {
					reject(event)
				}

				/*				db.onerror = (event) => {
									resolve(new Database(dbOpenRequest.result))
								}*/

				// Create an objectStore for this database
				const objectStore = db.createObjectStore('toDoList', {keyPath: 'taskTitle'})

				// define what data items the objectStore will contain

				objectStore.createIndex('hours', 'hours', {unique: false})
				objectStore.createIndex('minutes', 'minutes', {unique: false})
				objectStore.createIndex('day', 'day', {unique: false})
				objectStore.createIndex('month', 'month', {unique: false})
				objectStore.createIndex('year', 'year', {unique: false})
				objectStore.createIndex('notified', 'notified', {unique: false})
			}
		})
	}

}
