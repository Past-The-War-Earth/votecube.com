import {
	IIdentified,
	Id
}                   from '@votecube/model'
import {Collection} from './Collection'
import {
	CollectionName,
	ICollection
}                   from './common'
import {
	IVCCollectionReference,
	IVCDocumentReference
}                   from './DocRef'

export class ChildCollection<K extends Id, T extends IIdentified<K>,
	PK extends Id, PT extends IIdentified<PK>>
	extends Collection<K, T, PK, PT> {

	reference: IVCCollectionReference<K, T, PK, PT>

	constructor(
		public name: CollectionName,
		public parent: ICollection<PK, PT>,
		parentKeyOrReference: Id | IVCDocumentReference<PK, PT>,
	) {
		super(name)
		if (typeof parentKeyOrReference === 'string') {
			this.reference = parent.reference.doc(parentKeyOrReference).collection(name)
		} else {
			this.reference = parentKeyOrReference.collection(name)
		}
	}

}
