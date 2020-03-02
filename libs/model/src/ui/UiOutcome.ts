import {IUserCreated}              from '../core/User'
import {
	IsDelta
}                                 from '../core/common'
import {Outcome_Id, Outcome_Name} from '../core/Outcome'
import {UiDocStatus}              from './common'
import {IUiAgeSuitabilityTracked}  from './UiDocumentValue'

export interface IUiOutcome<Doc extends UiDocStatus>
	extends IUiAgeSuitabilityTracked<Doc>,
	        IUiOutcomeFromForm<Doc>,
	        IUserCreated<Outcome_Id> {

	name: Doc extends IsDelta ? boolean : Outcome_Name

}

export interface IUiOutcomeFromForm<Doc extends UiDocStatus> {

	name: Doc extends IsDelta ? boolean : Outcome_Name

}
