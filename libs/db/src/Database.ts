import {DI}         from '@airport/di'
import {IndexedDB}  from './IndexedDB'
import {INDEXED_DB} from './tokens'
import {
	ITransaction,
	Transaction
}                   from './Transaction'

export interface IDatabase {

	startTrans(
		objectStores: string[],
		type?: 'readonly' | 'readwrite'
	): ITransaction

}

export class Database
	implements IDatabase {

	indexedDb: IndexedDB

	constructor(
		public db: IDBDatabase
	) {
		DI.get(
			di => {
				[this.indexedDb] = di
			}, INDEXED_DB)
	}

	startTrans(
		objectStores: string[],
		type: 'readonly' | 'readwrite' = 'readwrite'
	): ITransaction {
		return new Transaction(this.db.transaction(objectStores, type))
	}

}

DI.set(INDEXED_DB, IndexedDB)
