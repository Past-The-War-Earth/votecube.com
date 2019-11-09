import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc,
	Key
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {
	FactorKey,
	ICoreFactorBase
}                     from './Factor'
import {
	ICoreOutcome,
	OutcomeKey
}                     from './Outcome'
import {PositionKey}  from './Position'
import {ICoreTheme}   from './Theme'
import {IUserCreated} from './User'
import {VariationKey} from './Variation'

export type PollKey = Key
export type PollName = string

export interface ICorePoll<Doc extends DocStatus, K extends Key = PollKey>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IUserCreated<K> {

	factors: ICorePollFactorsFragment<Doc>
	name: Doc extends IsDoc ? IDocumentValue<PollName> :
		Doc extends IsDelta ? boolean : PollName
	outcomes: ICorePollOutcomesFragment<Doc>
	rootVariationKey: VariationKey
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

	factorKey: FactorKey

}

export interface ICoreOutcomePoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	outcomeKey: OutcomeKey

}

export interface ICorePositionPoll<Doc extends DocStatus>
	extends ICorePoll<Doc> {

	positionKey: PositionKey

}
