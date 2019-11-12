import {
	DocStatus,
	IFullTextSearch,
	IMarked,
	IMarks,
	IsData,
	IsDelta,
	IsDoc,
	Key
}                   from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                   from './DocumentValue'
import {
	ICoreFactorFromForm,
	ICoreMarkedFactor
}                   from './Factor'
import {
	ICoreOutcome,
	ICoreOutcomeFromForm
}                   from './Outcome'
import {IVersioned} from './PathFragment'
import {
	Poll_Key,
	Poll_Name
}                   from './Poll'
import {
	ICoreTheme,
	ICoreThemeFromForm
}                   from './Theme'

export type Variation_Key = Key

export interface ICoreVariation<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreVariationFromForm<Doc>,
	        IFullTextSearch,
	        IVersioned<Variation_Key> {

	factors: {
		1: ICoreMarkedFactor<Doc>
		2: ICoreMarkedFactor<Doc>
		3: ICoreMarkedFactor<Doc>
		marks: IMarks
	}
	marks: IMarks
	outcomes: {
		A: ICoreOutcome<Doc> & IMarked
		B: ICoreOutcome<Doc> & IMarked
		marks: IMarks
	}
	pollKey: Poll_Key
	theme: ICoreTheme<Doc>

}

export interface ICoreVariationFromForm<Doc extends DocStatus = IsData> {

	factors: {
		1: ICoreFactorFromForm<Doc>
		2: ICoreFactorFromForm<Doc>
		3: ICoreFactorFromForm<Doc>
	}
	name: Doc extends IsDoc ? IDocumentValue<Poll_Name>
		: Doc extends IsDelta ? boolean : Poll_Name
	outcomes: {
		A: ICoreOutcomeFromForm<Doc>
		B: ICoreOutcomeFromForm<Doc>
	}
	theme: ICoreThemeFromForm

}
