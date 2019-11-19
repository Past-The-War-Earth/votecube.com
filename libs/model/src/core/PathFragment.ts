import {
	Doc_Depth,
	Key
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Key>
	extends IUserCreated<K> {
}

export interface IPath<K extends Key> {
	length: number

	[pathFragmentNumber: number]: IPathFragment<K>
}

export interface IParent<K extends Key>
	extends IPathFragment<K> {
	depth: Doc_Depth
}

export interface IVersioned<K extends Key>
	extends IUserCreated<K> {

	depth: Doc_Depth
	parent: IParent<K>
	path: IPath<K>

}
