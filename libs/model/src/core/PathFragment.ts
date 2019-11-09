import {
	DocDepth,
	Key
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Key>
	extends IUserCreated<K> {
}

export interface IVersioned<K extends Key>
	extends IUserCreated<K> {

	depth: DocDepth
	parent: IPathFragment<K>
	path: Array<IPathFragment<K>>

}
