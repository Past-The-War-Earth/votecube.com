import {
	DocStatus,
	IFullTextSearch,
	IsData,
	IsDelta,
	IsDoc,
	Key
} from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {IUserCreated} from './User'

export type OutcomeKey = Key
export type OutcomeName = string
export type OutcomeOrdinal = 'A' | 'B'

export interface ICoreOutcome<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreOutcomeFromForm<Doc>,
	        IFullTextSearch,
	        IUserCreated<OutcomeKey> {

	name: Doc extends IsDoc ? IDocumentValue<OutcomeName> :
		Doc extends IsDelta ? boolean : OutcomeName

}

export interface ICoreOutcomeFromForm<Doc extends DocStatus> {

	name: Doc extends IsDoc ? IDocumentValue<OutcomeName> :
		Doc extends IsDelta ? boolean : OutcomeName

}
