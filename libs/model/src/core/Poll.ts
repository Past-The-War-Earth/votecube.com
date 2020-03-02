import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc,
	Id
}                      from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                      from './DocumentValue'
import {
	Factor_Id,
	ICoreFactorBase
}                      from './Factor'
import {
	ICoreOutcome,
	Outcome_Id
}                    from './Outcome'
import {Position_Id} from './Position'
import {ICoreTheme}  from './Theme'
import {IUserCreated}  from './User'
import {Variation_Id} from './Variation'

export type Poll_Id = Id
export type Poll_Name = string

export interface ICorePoll<Doc extends DocStatus, K extends Id = Poll_Id>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IUserCreated<K> {

	factors: ICorePollFactorsFragment<Doc>
	name: Doc extends IsDoc ? IDocumentValue<Poll_Name> :
		Doc extends IsDelta ? boolean : Poll_Name
	outcomes: ICorePollOutcomesFragment<Doc>
	rootVariationId: Variation_Id
	theme: ICoreTheme<Doc>

}

export interface ICorePollFactorsFragment<Doc extends DocStatus> {

	1: ICoreFactorBase<Doc>
	2: ICoreFactorBase<Doc>
	3: ICoreFactorBase<Doc>

}

export interface ICorePollOutcomesFragment<Doc extends DocStatus> {

	A: ICoreOutcome<Doc>
	B: ICoreOutcome<Doc>

}

export interface ICoreFactorPoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	factorId: Factor_Id

}

export interface ICoreOutcomePoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	outcomeId: Outcome_Id

}

export interface ICorePositionPoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	positionId: Position_Id

}
