import {
	Factor_Id,
	Id,
	Outcome_Id,
	Poll_Id,
	PollRevision_Id,
	PollRevisionTranslation_Name,
	Position_Id
}                                 from '@votecube/relational-db'
import {IsDelta}                  from '../core/common'
import {IUserCreated}             from '../core/User'
import {UiDocStatus}              from './common'
import {IUiAgeSuitabilityTracked} from './UiDocumentValue'
import {IUiFactorBase}            from './UiFactor'
import {IUiOutcome}               from './UiOutcome'
import {IUiTheme}                 from './UiTheme'

export interface IUiPoll<Doc extends UiDocStatus, K extends Id = Poll_Id>
	extends IUiAgeSuitabilityTracked<Doc>,
	        IUserCreated<K> {

	factors: IUiPollFactorsFragment<Doc>
	name: Doc extends IsDelta ? boolean : PollRevisionTranslation_Name
	outcomes: IUiPollOutcomesFragment<Doc>
	rootRevisionId: PollRevision_Id
	theme: IUiTheme<Doc>

}

export interface IUiPollFactorsFragment<Doc extends UiDocStatus> {

	1: IUiFactorBase<Doc>
	2: IUiFactorBase<Doc>
	3: IUiFactorBase<Doc>

}

export interface IUiPollOutcomesFragment<Doc extends UiDocStatus> {

	A: IUiOutcome<Doc>
	B: IUiOutcome<Doc>

}

export interface IUiFactorPoll<Doc extends UiDocStatus>
	extends IUiPoll<Doc> {

	factorId: Factor_Id

}

export interface IUiOutcomePoll<Doc extends UiDocStatus>
	extends IUiPoll<Doc> {

	outcomeId: Outcome_Id

}

export interface IUiPositionPoll<Doc extends UiDocStatus>
	extends IUiPoll<Doc> {

	positionId: Position_Id

}
