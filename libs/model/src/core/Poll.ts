import {
	Factor_Id,
	Id,
	Outcome_Id,
	Poll_Id,
	PollRevision_Id,
	PollRevisionTranslation_Name,
	Position_Id
}                        from '@votecube/relational-db'
import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc
}                        from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                        from './DocumentValue'
import {ICoreFactorBase} from './Factor'
import {ICoreOutcome,}   from './Outcome'
import {ICoreTheme}      from './Theme'
import {IUserCreated}    from './User'

export interface ICorePoll<Doc extends DocStatus, K extends Id = Poll_Id>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IUserCreated<K> {

	factors: ICorePollFactorsFragment<Doc>
	name: Doc extends IsDoc ? IDocumentValue<PollRevisionTranslation_Name> :
		Doc extends IsDelta ? boolean : PollRevisionTranslation_Name
	outcomes: ICorePollOutcomesFragment<Doc>
	rootRevisionId: PollRevision_Id
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
