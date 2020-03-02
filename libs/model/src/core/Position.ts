import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc,
	Id
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {Factor_Id}    from './Factor'
import {IUserCreated} from './User'

export type Position_Id = Id
export type Position_Name = string
export type Position_Dir = -1 | 1 | 0

export interface ICorePosition<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICorePositionDefault<Doc>,
	        ICorePositionFromForm<Doc>,
	        IFullTextSearch,
	        IUserCreated<Position_Id> {
}

export interface ICoreFactorPosition<Doc extends DocStatus>
	extends ICorePosition<Doc> {

	factorId: Factor_Id

}

export interface ICorePositionDefault<Doc extends DocStatus> {

	dir: Doc extends IsDoc ? IDocumentValue<Position_Dir> :
		Doc extends IsDelta ? boolean : Position_Dir

}

export interface ICorePositionFromForm<Doc extends DocStatus> {

	name: Doc extends IsDoc ? IDocumentValue<Position_Name> :
		Doc extends IsDelta ? boolean : Position_Name

}
