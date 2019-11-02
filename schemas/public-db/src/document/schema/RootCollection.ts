import {
	IDoc,
	Key
}                   from '../common'
import {Collection} from './Collection'
import {ISchema}    from './common'

export class RootCollection<K extends Key, T extends IDoc<K>>
	extends Collection<K, T> {

	constructor(
		public name: string,
		public schema: ISchema,
	) {
		super(name)
		this.reference = schema.db.collection(name) as any
	}
}
