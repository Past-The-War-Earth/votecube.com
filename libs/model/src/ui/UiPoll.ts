import {IUserCreated} from '../core/User'
import {Position_Id}  from '../core/Position'
import {Outcome_Id}   from '../core/Outcome'
import {Factor_Id}    from '../core/Factor'
import {
	IsDelta,
	Id
}                    from '../core/common'
import {
	Poll_Id,
	Poll_Name
}                     from '../core/Poll'
import {Variation_Id} from '../core/Variation'
import {UiDocStatus}   from './common'
import {IUiAgeSuitabilityTracked} from './UiDocumentValue'
import {IUiFactorBase}            from './UiFactor'
import {IUiOutcome}   from './UiOutcome'
import {
	IUiTheme
}                     from './UiTheme'

export interface IUiPoll<Doc extends UiDocStatus, K extends Id = Poll_Id>
	extends IUiAgeSuitabilityTracked<Doc>,
	        IUserCreated<K> {

	factors: IUiPollFactorsFragment<Doc>
	name: Doc extends IsDelta ? boolean : Poll_Name
	outcomes: IUiPollOutcomesFragment<Doc>
	rootVariationId: Variation_Id
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
