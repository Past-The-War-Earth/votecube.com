import {
	IIdentified,
	Id
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


export class Collection<K extends Id, T extends IIdentified<K>,
	PK extends Id | null = null, PT extends IIdentified<PK> | null = null>
	implements ICollection<K, T, PK, PT> {

	reference: IVCCollectionReference<K, T, PK, PT>

	constructor(
		public name: CollectionName,
	) {
	}

	child<CK extends Id, CT extends IIdentified<CK>>(
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
