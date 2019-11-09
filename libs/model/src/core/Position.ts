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
import {FactorKey}    from './Factor'
import {IUserCreated} from './User'

export type PositionKey = Key
export type PositionName = string
export type PositionDir = -1 | 1 | 0

export interface ICorePosition<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        IFullTextSearch,
	        IUserCreated<PositionKey> {

	dir: Doc extends IsDoc ? IDocumentValue<PositionDir> :
		Doc extends IsDelta ? boolean : PositionDir
	name: Doc extends IsDoc ? IDocumentValue<PositionName> :
		Doc extends IsDelta ? boolean : PositionName

}

export interface ICoreFactorPosition<Doc extends DocStatus>
	extends ICorePosition<Doc> {

	factorKey: FactorKey

}
