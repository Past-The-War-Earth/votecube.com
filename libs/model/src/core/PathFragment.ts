import {
	Doc_Depth,
	Key
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Key>
	extends IUserCreated<K> {
}

export interface IParent<K extends Key>
	extends IPathFragment<K> {
	depth: Doc_Depth
}

export interface IVersioned<K extends Key>
	extends IUserCreated<K> {

	depth: Doc_Depth
	parent: IParent<K>
	path: Array<IPathFragment<K>>

}
