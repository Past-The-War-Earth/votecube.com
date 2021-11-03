import {
	Outcome_Id,
	Outcome_Name
} from '@votecube/ecclesia'
import {
	IsDelta,
	IUiRepositoryRecord
} from '../core/common'
import { UiDocStatus } from './common'
import { IUiAgeSuitabilityTracked } from './UiDocumentValue'

export interface IUiOutcome<Doc extends UiDocStatus>
	extends IUiAgeSuitabilityTracked<Doc>,
	IUiOutcomeFromForm<Doc>,
	IUiRepositoryRecord {

	name: Doc extends IsDelta ? boolean : Outcome_Name

}

export interface IUiOutcomeFromForm<Doc extends UiDocStatus> {

	name: Doc extends IsDelta ? boolean : Outcome_Name

}
