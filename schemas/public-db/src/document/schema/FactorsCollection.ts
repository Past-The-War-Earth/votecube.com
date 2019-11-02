import {
	FactorKey,
	IFactorDoc
}                             from '../Factor'
import {
	IFactorPollDoc,
	PollKey
}                             from '../Poll'
import {
	IFactorPositionDoc,
	PositionKey
}                             from '../Position'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IFactorsCollection
	extends ICollection<FactorKey, IFactorDoc> {

	factorPolls(
		keyOrReference: FactorKey | IVCDocumentReference<FactorKey, IFactorDoc>
	): ICollection<PollKey, IFactorPollDoc, FactorKey, IFactorDoc>

	factorPositions(
		keyOrReference: FactorKey | IVCDocumentReference<FactorKey, IFactorDoc>
	): ICollection<PositionKey, IFactorPositionDoc, FactorKey, IFactorDoc>

}

export class FactorsCollection
	extends RootCollection<FactorKey, IFactorDoc>
	implements IFactorsCollection {

	constructor(
		schema: ISchema
	) {
		super('factors', schema)
	}

	factorPolls(
		keyOrReference: FactorKey | IVCDocumentReference<FactorKey, IFactorDoc>
	): ICollection<PollKey, IFactorPollDoc, FactorKey, IFactorDoc> {
		return this.child(keyOrReference, 'factorPolls')
	}

	factorPositions(
		keyOrReference: FactorKey | IVCDocumentReference<FactorKey, IFactorDoc>
	): ICollection<PositionKey, IFactorPositionDoc, FactorKey, IFactorDoc> {
		return this.child(keyOrReference, 'factorPositions')
	}

}
