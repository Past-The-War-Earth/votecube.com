import {ICoreColor}    from './Color'
import {
	DocStatus,
	IFullTextSearch,
	IMarked,
	IsDelta,
	IsDoc,
	Key
}                      from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                      from './DocumentValue'
import {ICorePosition} from './Position'
import {IUserCreated}  from './User'

export type FactorAxis = 'x' | 'y' | 'z'
export type FactorKey = Key
export type FactorName = string
export type FactorNumber = 1 | 2 | 3

export interface ICoreFactor<Doc extends DocStatus>
	extends ICoreFactorBase<Doc> {

	color: ICoreColor<Doc>
	positions: {
		A: ICorePosition<Doc>
		B: ICorePosition<Doc>
	}

}

export interface ICoreMarkedFactor<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreFactorBase<Doc>,
	        IMarked {

	color: ICoreColor<Doc> & IMarked
	positions: {
		A: ICorePosition<Doc> & IMarked
		B: ICorePosition<Doc> & IMarked
		marks: IMarked
	}

}

export interface ICoreFactorBase<Doc extends DocStatus>
	extends IFullTextSearch,
	        IUserCreated<FactorKey> {

	axis: Doc extends IsDoc ? IDocumentValue<FactorAxis>
		: Doc extends IsDelta ? boolean : FactorAxis
	name: Doc extends IsDoc ? IDocumentValue<FactorName>
		: Doc extends IsDelta ? boolean : FactorName

}
