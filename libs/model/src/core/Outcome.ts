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

export type Outcome_Key = Key
export type Outcome_Name = string
export type Outcome_Ordinal = 'A' | 'B'

export interface ICoreOutcome<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreOutcomeFromForm<Doc>,
	        IFullTextSearch,
	        IUserCreated<Outcome_Key> {

	name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> :
		Doc extends IsDelta ? boolean : Outcome_Name

}

export interface ICoreOutcomeFromForm<Doc extends DocStatus> {

	name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> :
		Doc extends IsDelta ? boolean : Outcome_Name

}
