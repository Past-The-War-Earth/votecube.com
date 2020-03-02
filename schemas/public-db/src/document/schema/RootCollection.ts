import {
	IIdentified,
	Id
}                   from '@votecube/model'
import {Collection} from './Collection'
import {
	CollectionName,
	ISchema
}                   from './common'

export class RootCollection<K extends Id, T extends IIdentified<K>>
	extends Collection<K, T> {

	constructor(
		public name: CollectionName,
		public schema: ISchema,
	) {
		super(name)
		this.reference = schema.db.collection(name) as any
	}
}
