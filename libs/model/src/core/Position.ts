import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc,
	Key
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {Factor_Key}   from './Factor'
import {IUserCreated} from './User'

export type Position_Key = Key
export type Position_Name = string
export type Position_Dir = -1 | 1 | 0

export interface ICorePosition<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICorePositionDefault<Doc>,
	        ICorePositionFromForm<Doc>,
	        IFullTextSearch,
	        IUserCreated<Position_Key> {
}

export interface ICoreFactorPosition<Doc extends DocStatus>
	extends ICorePosition<Doc> {

	factorKey: Factor_Key

}

export interface ICorePositionDefault<Doc extends DocStatus> {

	dir: Doc extends IsDoc ? IDocumentValue<Position_Dir> :
		Doc extends IsDelta ? boolean : Position_Dir

}

export interface ICorePositionFromForm<Doc extends DocStatus> {

	name: Doc extends IsDoc ? IDocumentValue<Position_Name> :
		Doc extends IsDelta ? boolean : Position_Name

}
