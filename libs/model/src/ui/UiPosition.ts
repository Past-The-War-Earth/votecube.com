import {
	Factor_Id,
	PollRevisionFactorPosition_Id,
	Position_Id,
	PositionTranslation_Name
} from '@votecube/ecclesia'
import {
	IsDelta,
	IUiRepositoryRecord
} from '../core/common'
import { Position_Dir, } from '../core/Position'
import { UiDocStatus } from './common'
import { IUiAgeSuitabilityTracked } from './UiDocumentValue'

export interface IUiPosition<Doc extends UiDocStatus>
	extends IUiAgeSuitabilityTracked<Doc>,
	IUiPositionDefault<Doc>,
	IUiPositionFromForm<Doc>,
	IUiRepositoryRecord {

	pollFactorPositionId: PollRevisionFactorPosition_Id
	pollFactorPositionParentId: PollRevisionFactorPosition_Id
	positionParentId: Position_Id

}

export interface IUiFactorPosition<Doc extends UiDocStatus>
	extends IUiPosition<Doc> {

	factorId: Factor_Id

}

export interface IUiPositionDefault<Doc extends UiDocStatus> {

	dir: Doc extends IsDelta ? boolean : Position_Dir

}

export interface IUiPositionFromForm<Doc extends UiDocStatus> {

	name: Doc extends IsDelta ? boolean : PositionTranslation_Name

}
