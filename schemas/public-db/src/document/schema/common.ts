import {
	IKeyed,
	Key
} from '@votecube/model'
import {
	IVCCollectionReference,
	IVCDocumentReference,
	IVCFirestore
} from './DocRef'

export interface ISchema {

	db: IVCFirestore

}

export type CollectionName = string

export interface ICollection<K extends Key, T extends IKeyed<K>,
	PK extends Key | null = null, PT extends IKeyed<PK> | null = null> {

	name: CollectionName

	reference: IVCCollectionReference<K, T, PK, PT>

	doc(
		key?: K
	): IVCDocumentReference<K, T, PK, PT>

	child<CK extends Key, CT extends IKeyed<CK>>(
		keyOrReference: K | IVCDocumentReference<K, T, PK, PT>,
		name: CollectionName,
		constructor?
	): ICollection<CK, CT, K, T>

}
