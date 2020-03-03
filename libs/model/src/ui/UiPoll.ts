import {
	Id,
	IsDelta
}                                 from '../core/common'
import {Factor_Id}                from '../core/Factor'
import {Outcome_Id}               from '../core/Outcome'
import {
	Poll_Id,
	Poll_Name
}                                 from '../core/Poll'
import {PollRevision_Id}          from '../core/PollRevision'
import {Position_Id}              from '../core/Position'
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
	name: Doc extends IsDelta ? boolean : Poll_Name
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
