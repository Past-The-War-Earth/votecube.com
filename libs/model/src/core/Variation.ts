import {
	DocStatus,
	IFullTextSearch,
	IMarked,
	IMarks,
	Key
}                          from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                          from './DocumentValue'
import {ICoreMarkedFactor} from './Factor'
import {ICoreOutcome}      from './Outcome'
import {IVersioned}        from './PathFragment'
import {
	PollKey,
	PollName
}                          from './Poll'
import {ICoreTheme}        from './Theme'

export type VariationKey = Key

export interface ICoreVariation<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IVersioned<VariationKey> {

	factors: {
		1: ICoreMarkedFactor<Doc>
		2: ICoreMarkedFactor<Doc>
		3: ICoreMarkedFactor<Doc>
		marks: IMarks
	}
	marks: IMarks
	name: IDocumentValue<PollName>
	outcomes: {
		A: ICoreOutcome<Doc> & IMarked
		B: ICoreOutcome<Doc> & IMarked
		marks: IMarks
	}
	pollKey: PollKey
	theme: ICoreTheme<Doc>

}
