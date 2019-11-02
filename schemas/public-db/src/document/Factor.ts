import {
	IFullTextSearchDoc,
	IMarked,
	Key
}                         from './common'
import {IDocumentValue}   from './DocumentValue'
import {IPositionDoc} from './Position'
import {IUserCreatedDoc}  from './User'

export type FactorKey = Key

export interface IFactorDoc
	extends IFactorBaseDoc {

	positions: {
		A: IPositionDoc
		B: IPositionDoc
	}

}

export interface IMarkedFactorDoc
	extends IFactorBaseDoc,
	        IMarked {
	positions: {
		A: IPositionDoc & IMarked
		B: IPositionDoc & IMarked
		marks: IMarked
	}
}

export interface IFactorBaseDoc
	extends IFullTextSearchDoc,
	        IUserCreatedDoc<FactorKey> {

	name: IDocumentValue<string>

}
