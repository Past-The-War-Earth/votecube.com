import {
	IDoc,
	Key
}                        from '../common'
import {ChildCollection} from './ChildCollection'
import {ICollection}     from './common'
import {
	IVCCollectionReference,
	IVCDocumentReference
}                        from './DocRef'

export class Collection<K extends Key, T extends IDoc<K>,
	PK extends Key | null = null, PT extends IDoc<PK> | null = null>
	implements ICollection<K, T, PK, PT> {

	reference: IVCCollectionReference<K, T, PK, PT>

	constructor(
		public name: string,
	) {
	}

	child<CK extends Key, CT extends IDoc<CK>>(
		keyOrReference: K | IVCDocumentReference<K, T, PK, PT>,
		name: string,
		ChildCollectionConstructor?
	): ICollection<CK, CT, K, T> {
		if (ChildCollectionConstructor) {
			return new ChildCollectionConstructor(name, this, keyOrReference) as any
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
