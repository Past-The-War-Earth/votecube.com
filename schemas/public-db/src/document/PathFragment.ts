import {Key}             from './common'
import {IUserCreatedDoc} from './User'

export interface IPathFragment<K extends Key>
	extends IUserCreatedDoc<K> {
}

export interface IVersionedDoc<K extends Key>
	extends IUserCreatedDoc<K> {
	depth: number
	parent: IPathFragment<K>
	path: Array<IPathFragment<K>>
}
