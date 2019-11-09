import {
	IPositionDoc,
	IPositionPollDoc,
	PollKey,
	PositionKey
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IPositionsCollection
	extends ICollection<PositionKey, IPositionDoc> {

	positionPolls(
		keyOrReference: PositionKey | IVCDocumentReference<PositionKey, IPositionDoc>
	): ICollection<PollKey, IPositionPollDoc, PositionKey, IPositionDoc>

}

export class PositionsCollection
	extends RootCollection<PositionKey, IPositionDoc>
	implements IPositionsCollection {

	constructor(
		schema: ISchema
	) {
		super('positions', schema)
	}

	positionPolls(
		keyOrReference: PositionKey | IVCDocumentReference<PositionKey, IPositionDoc>
	): ICollection<PollKey, IPositionPollDoc, PositionKey, IPositionDoc> {
		return this.child(keyOrReference, 'positionPolls')
	}

}
