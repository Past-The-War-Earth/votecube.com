import {
	IDoc,
	Key
} from '../common'
import {
	IVCCollectionReference,
	IVCDocumentReference,
	IVCFirestore
} from './DocRef'

export interface ISchema {

	db: IVCFirestore

}

export interface ICollection<K extends Key, T extends IDoc<K>,
	PK extends Key | null = null, PT extends IDoc<PK> | null = null> {

	reference: IVCCollectionReference<K, T, PK, PT>

	doc(
		key?: K
	): IVCDocumentReference<K, T, PK, PT>

	child<CK extends Key, CT extends IDoc<CK>>(
		keyOrReference: K | IVCDocumentReference<K, T, PK, PT>,
		name: string,
		constructor?
	): ICollection<CK, CT, K, T>

}
