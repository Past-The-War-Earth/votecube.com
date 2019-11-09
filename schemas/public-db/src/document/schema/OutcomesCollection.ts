import {
	IOutcomeDoc,
	IOutcomePollDoc,
	OutcomeKey,
	PollKey
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IOutcomesCollection
	extends ICollection<OutcomeKey, IOutcomeDoc> {

	outcomePolls(
		keyOrReference: OutcomeKey | IVCDocumentReference<OutcomeKey, IOutcomeDoc>
	): ICollection<PollKey, IOutcomePollDoc, OutcomeKey, IOutcomeDoc>

}

export class OutcomesCollection
	extends RootCollection<OutcomeKey, IOutcomeDoc>
	implements IOutcomesCollection {

	constructor(
		schema: ISchema
	) {
		super('outcomes', schema)
	}

	outcomePolls(
		keyOrReference: OutcomeKey | IVCDocumentReference<OutcomeKey, IOutcomeDoc>
	): ICollection<PollKey, IOutcomePollDoc, OutcomeKey, IOutcomeDoc> {
		return this.child(keyOrReference, 'outcomePolls')
	}

}
