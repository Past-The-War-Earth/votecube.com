import {
	DocDepth,
	Key
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Key>
	extends IUserCreated<K> {
}

export interface IParent<K extends Key>
	extends IPathFragment<K> {
	depth: DocDepth
}

export interface IVersioned<K extends Key>
	extends IUserCreated<K> {

	depth: DocDepth
	parent: IParent<K>
	path: Array<IPathFragment<K>>

}
