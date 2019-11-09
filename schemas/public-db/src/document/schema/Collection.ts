import {
	IKeyed,
	Key
}                        from '@votecube/model'
import {ChildCollection} from './ChildCollection'
import {
	CollectionName,
	ICollection
}                        from './common'
import {
	IVCCollectionReference,
	IVCDocumentReference
}                        from './DocRef'


export class Collection<K extends Key, T extends IKeyed<K>,
	PK extends Key | null = null, PT extends IKeyed<PK> | null = null>
	implements ICollection<K, T, PK, PT> {

	reference: IVCCollectionReference<K, T, PK, PT>

	constructor(
		public name: CollectionName,
	) {
	}

	child<CK extends Key, CT extends IKeyed<CK>>(
		keyOrReference: K | IVCDocumentReference<K, T, PK, PT>,
		name: CollectionName,
		ChildCollectionConstructor?: new (
			name: CollectionName,
			parent: ICollection<PK, PT>,
			parentKeyOrReference: K | IVCDocumentReference<K, T>
		) => ICollection<CK, CT, K, T>
	): ICollection<CK, CT, K, T> {
		if (ChildCollectionConstructor) {
			return new ChildCollectionConstructor(name, this as any, keyOrReference as any)
		}
		return new ChildCollection(name, this as any, keyOrReference as any)
	}

	doc(
		key?: K
	): IVCDocumentReference<K, T, PK, PT> {
		if (key) {
			return this.reference.doc(key)
		} else {
			return this.reference.doc()
		}
	}

}
