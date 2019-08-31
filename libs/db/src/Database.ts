import {DI}         from '@airport/di'
import {IndexedDB}  from './IndexedDB'
import {
	ITransaction,
	Transaction
}                   from './Transaction'

export interface IDatabase {

	startTrans(
		objectStores: string[],
		type?: 'readonly' | 'readwrite'
	): Promise<ITransaction>

}

export class Database
	implements IDatabase {

	constructor(
		public db: IDBDatabase
	) {
	}

	async startTrans(
		objectStores: string[],
		type: 'readonly' | 'readwrite' = 'readwrite'
	): Promise<ITransaction> {
		// const db = await DI.get(INDEXED_DB)
		return new Transaction(this.db.transaction(objectStores, type))
	}

}

// DI.set(INDEXED_DB, IndexedDB)
