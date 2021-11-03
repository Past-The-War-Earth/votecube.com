import {
	Doc_Depth,
	IUiRepositoryRecord
}                       from '../core/common'

// export interface IUiPathFragment
// 	extends IUiRepositoryRecord {
// }
//
// export interface IUiPath {
// 	length: number
//
// 	[pathFragmentNumber: number]: IUiPathFragment
// }

export interface IUiVersioned
	extends IUiRepositoryRecord {

	depth: Doc_Depth
	parent: IUiRepositoryRecord
	// path: IUiPath<K>

}
