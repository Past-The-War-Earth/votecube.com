import {
	IOutcomeDoc,
	IOutcomePollDoc,
	Outcome_Key,
	Poll_Key
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IOutcomesCollection
	extends ICollection<Outcome_Key, IOutcomeDoc> {

	outcomePolls(
		keyOrReference: Outcome_Key | IVCDocumentReference<Outcome_Key, IOutcomeDoc>
	): ICollection<Poll_Key, IOutcomePollDoc, Outcome_Key, IOutcomeDoc>

}

export class OutcomesCollection
	extends RootCollection<Outcome_Key, IOutcomeDoc>
	implements IOutcomesCollection {

	constructor(
		schema: ISchema
	) {
		super('outcomes', schema)
	}

	outcomePolls(
		keyOrReference: Outcome_Key | IVCDocumentReference<Outcome_Key, IOutcomeDoc>
	): ICollection<Poll_Key, IOutcomePollDoc, Outcome_Key, IOutcomeDoc> {
		return this.child(keyOrReference, 'outcomePolls')
	}

}
