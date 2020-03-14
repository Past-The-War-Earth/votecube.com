import {
	Factor_Id,
	PollRevisionFactorPosition_Dir,
	Position_Id,
	PositionTranslation_Name
}                     from '@votecube/relational-db'
import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {IUserCreated} from './User'

export type Position_Dir = PollRevisionFactorPosition_Dir | 0

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

	name: Doc extends IsDoc ? IDocumentValue<PositionTranslation_Name> :
		Doc extends IsDelta ? boolean : PositionTranslation_Name

}
