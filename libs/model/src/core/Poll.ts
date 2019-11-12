import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc,
	Key
}                      from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                      from './DocumentValue'
import {
	Factor_Key,
	ICoreFactorBase
}                      from './Factor'
import {
	ICoreOutcome,
	Outcome_Key
}                      from './Outcome'
import {Position_Key}  from './Position'
import {ICoreTheme}    from './Theme'
import {IUserCreated}  from './User'
import {Variation_Key} from './Variation'

export type Poll_Key = Key
export type Poll_Name = string

export interface ICorePoll<Doc extends DocStatus, K extends Key = Poll_Key>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IUserCreated<K> {

	factors: ICorePollFactorsFragment<Doc>
	name: Doc extends IsDoc ? IDocumentValue<Poll_Name> :
		Doc extends IsDelta ? boolean : Poll_Name
	outcomes: ICorePollOutcomesFragment<Doc>
	rootVariationKey: Variation_Key
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

	factorKey: Factor_Key

}

export interface ICoreOutcomePoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	outcomeKey: Outcome_Key

}

export interface ICorePositionPoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	positionKey: Position_Key

}
