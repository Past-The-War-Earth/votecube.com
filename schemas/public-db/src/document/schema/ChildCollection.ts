import {
	IDoc,
	Key
}                    from '../common'
import {Collection}  from './Collection'
import {ICollection} from './common'
import {
	IVCCollectionReference,
	IVCDocumentReference
}                    from './DocRef'

export class ChildCollection<K extends Key, T extends IDoc<K>,
	PK extends Key, PT extends IDoc<PK>>
	extends Collection<K, T, PK, PT> {

	reference: IVCCollectionReference<K, T, PK, PT>

	constructor(
		public name: string,
		public parent: ICollection<PK, PT>,
		parentKeyOrReference: Key | IVCDocumentReference<PK, PT>,
	) {
		super(name)
		if (typeof parentKeyOrReference === 'string') {
			this.reference = parent.reference.doc(parentKeyOrReference).collection(name)
		} else {
			this.reference = parentKeyOrReference.collection(name)
		}
	}

}
