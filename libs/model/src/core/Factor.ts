import {
	Factor_Id,
	FactorTranslation_Name,
	PollRevisionFactorPosition_Axis,
	PollRevisionFactorPosition_FactorNumber
} from '@votecube/ecclesia'
import {ICoreColor}   from './Color'
import {
	DocStatus,
	IFullTextSearch,
	IMarked,
	IsData,
	IsDelta,
	IsDoc,
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {
	ICorePosition,
	ICorePositionFromForm
}                     from './Position'
import {IUserCreated} from './User'

export type Factor_Axis = PollRevisionFactorPosition_Axis
export type Factor_Number = PollRevisionFactorPosition_FactorNumber

export interface ICoreFactor<Doc extends DocStatus>
	extends ICoreFactorBase<Doc>,
	        ICoreFactorFromForm<Doc> {

	positions: {
		A: ICorePosition<Doc>
		B: ICorePosition<Doc>
	}

}

export interface ICoreFactorFromForm<Doc extends DocStatus = IsData> {

	color: ICoreColor<Doc>
	name: Doc extends IsDoc ? IDocumentValue<FactorTranslation_Name>
		: Doc extends IsDelta ? boolean : FactorTranslation_Name
	positions: {
		A: ICorePositionFromForm<Doc>
		B: ICorePositionFromForm<Doc>
	}

}

export interface ICoreMarkedFactor<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreFactorBase<Doc>,
	        IMarked {

	color: ICoreColor<Doc> & IMarked
	positions: {
		A: ICorePosition<Doc> & IMarked
		B: ICorePosition<Doc> & IMarked
		marks: IMarked
	}

}

export interface ICoreFactorBase<Doc extends DocStatus>
	extends IFullTextSearch,
	        IUserCreated {

	axis: Doc extends IsDoc ? IDocumentValue<Factor_Axis>
		: Doc extends IsDelta ? boolean : Factor_Axis
	name: Doc extends IsDoc ? IDocumentValue<FactorTranslation_Name>
		: Doc extends IsDelta ? boolean : FactorTranslation_Name

}
