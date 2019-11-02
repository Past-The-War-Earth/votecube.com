import {
	IFullTextSearchDoc,
	Key
}                        from './common'
import {IDocumentValue}  from './DocumentValue'
import {IUserCreatedDoc} from './User'

export type OutcomeKey = Key

export interface IOutcomeDoc
	extends IFullTextSearchDoc,
	        IUserCreatedDoc<OutcomeKey> {

	name: IDocumentValue<string>

}
