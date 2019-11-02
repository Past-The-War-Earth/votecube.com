import {
	IFullTextSearchDoc,
	Key
}                        from './common'
import {IDocumentValue}  from './DocumentValue'
import {FactorKey}       from './Factor'
import {IUserCreatedDoc} from './User'

export type PositionKey = Key

export interface IPositionDoc
	extends IFullTextSearchDoc,
	        IUserCreatedDoc<PositionKey> {

	dir: IDocumentValue<number>
	name: IDocumentValue<string>

}

export interface IFactorPositionDoc
	extends IPositionDoc {
	factorKey: FactorKey
}
