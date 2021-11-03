import {Id}           from '@votecube/ecclesia'
import {
	Doc_Depth,
	IUiRepositoryRecord
}                     from './common'
import {IUserCreated} from './User'

export interface IPathFragment<K extends Id>
	extends IUserCreated {
}

export interface IPath<K extends Id> {
	length: number

	[pathFragmentNumber: number]: IPathFragment<K>
}

export interface IVersioned<K extends Id>
	extends IUserCreated {

	depth: Doc_Depth
	parent: IUiRepositoryRecord
	path: IPath<K>

}
