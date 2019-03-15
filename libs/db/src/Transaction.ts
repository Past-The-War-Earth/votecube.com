import {
	IObjectStore,
	ObjectStore
} from './ObjectStore'

export interface ITransaction {

	with<T>(
		storeName: string
	): IObjectStore<T>

}

export class Transaction
	implements ITransaction {

	constructor(
		public trans: IDBTransaction
	) {
	}

	with<T>(
		storeName: string
	): IObjectStore<T> {
		return new ObjectStore(this.trans.objectStore(storeName))
	}

	commit(): void {
	}

}
