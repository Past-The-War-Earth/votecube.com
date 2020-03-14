import {
	Outcome_Id,
	Outcome_Name
}                     from '@votecube/relational-db'
import {
	DocStatus,
	IFullTextSearch,
	IsDelta,
	IsDoc
}                     from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                     from './DocumentValue'
import {IUserCreated} from './User'

export interface ICoreOutcome<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreOutcomeFromForm<Doc>,
	        IFullTextSearch,
	        IUserCreated<Outcome_Id> {

	name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> :
		Doc extends IsDelta ? boolean : Outcome_Name

}

export interface ICoreOutcomeFromForm<Doc extends DocStatus> {

	name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> :
		Doc extends IsDelta ? boolean : Outcome_Name

}
