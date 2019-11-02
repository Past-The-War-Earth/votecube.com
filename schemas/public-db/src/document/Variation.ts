import {
	IFullTextSearchDoc,
	IMarked,
	IMarks,
	Key
}                         from './common'
import {IDocumentValue}   from './DocumentValue'
import {IMarkedFactorDoc} from './Factor'
import {IOutcomeDoc}      from './Outcome'
import {IVersionedDoc}    from './PathFragment'
import {PollKey}          from './Poll'
import {IThemeDoc}        from './Theme'

export type VariationKey = Key

export interface IVariationDoc
	extends IFullTextSearchDoc,
	        IVersionedDoc<VariationKey> {

	ageSuitability: IDocumentValue<number>
	factors: {
		1: IMarkedFactorDoc
		2: IMarkedFactorDoc
		3: IMarkedFactorDoc
		marks: IMarks
	}
	marks: IMarks
	name: IDocumentValue<string>
	outcomes: {
		A: IOutcomeDoc & IMarked
		B: IOutcomeDoc & IMarked
		marks: IMarks
	}
	pollKey: PollKey
	theme: IThemeDoc

}
