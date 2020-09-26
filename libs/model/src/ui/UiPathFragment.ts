import {Id}             from '@votecube/ecclesia'
import {
	Doc_Depth,
	IIdentified
}                       from '../core/common'
import {IUiUserCreated} from './UiUser'

// export interface IUiPathFragment<K extends Id>
// 	extends IUiUserCreated<K> {
// }
//
// export interface IUiPath<K extends Id> {
// 	length: number
//
// 	[pathFragmentNumber: number]: IUiPathFragment<K>
// }

export interface IUiParent<K extends Id>
	extends IIdentified<K> {
	// depth?: Doc_Depth
}

export interface IUiVersioned<K extends Id>
	extends IUiUserCreated<K> {

	depth: Doc_Depth
	parent: IUiParent<K>
	// path: IUiPath<K>

}
