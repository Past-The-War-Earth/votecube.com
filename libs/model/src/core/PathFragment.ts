import {
	Doc_Depth,
	Id
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Id>
	extends IUserCreated<K> {
}

export interface IPath<K extends Id> {
	length: number

	[pathFragmentNumber: number]: IPathFragment<K>
}

export interface IParent<K extends Id>
	extends IPathFragment<K> {
	depth: Doc_Depth
}

export interface IVersioned<K extends Id>
	extends IUserCreated<K> {

	depth: Doc_Depth
	parent: IParent<K>
	path: IPath<K>

}
