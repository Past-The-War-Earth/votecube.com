import {
	Factor_Id,
	FactorTranslation_Id,
	FactorTranslation_Name
}                                 from '@votecube/ecclesia'
import {
	IsData,
	IsDelta
}                                 from '../core/common'
import {Factor_Axis,}             from '../core/Factor'
import {UiDocStatus}              from './common'
import {IUiColor}                 from './UiColor'
import {IUiAgeSuitabilityTracked} from './UiDocumentValue'
import {
	IUiPosition,
	IUiPositionFromForm
}                                 from './UiPosition'
import {IUiUserCreated}           from './UiUser'

export interface IUiFactor<Doc extends UiDocStatus>
	extends IUiFactorBase<Doc>,
	        IUiFactorFromForm<Doc> {

	positions: {
		A: IUiPosition<Doc>
		B: IUiPosition<Doc>
	}

}

export interface IUiFactorFromForm<Doc extends UiDocStatus = IsData> {

	color: IUiColor<Doc>
	name: Doc extends IsDelta ? boolean : FactorTranslation_Name
	positions: {
		A: IUiPositionFromForm<Doc>
		B: IUiPositionFromForm<Doc>
	}

}

export interface IUiFactor<Doc extends UiDocStatus>
	extends IUiAgeSuitabilityTracked<Doc>,
	        IUiFactorBase<Doc> {

	color: IUiColor<Doc>
	parentId: Factor_Id
	positions: {
		A: IUiPosition<Doc>
		B: IUiPosition<Doc>
	}
	translationId: FactorTranslation_Id

}

export interface IUiFactorBase<Doc extends UiDocStatus>
	extends IUiUserCreated<Factor_Id> {

	axis: Doc extends IsDelta ? boolean : Factor_Axis
	name: Doc extends IsDelta ? boolean : FactorTranslation_Name

}
