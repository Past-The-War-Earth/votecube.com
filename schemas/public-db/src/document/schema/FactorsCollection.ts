import {
	Factor_Key,
	IFactorDoc,
	IFactorPollDoc,
	IFactorPositionDoc,
	Poll_Key,
	Position_Key
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IFactorsCollection
	extends ICollection<Factor_Key, IFactorDoc> {

	factorPolls(
		keyOrReference: Factor_Key | IVCDocumentReference<Factor_Key, IFactorDoc>
	): ICollection<Poll_Key, IFactorPollDoc, Factor_Key, IFactorDoc>

	factorPositions(
		keyOrReference: Factor_Key | IVCDocumentReference<Factor_Key, IFactorDoc>
	): ICollection<Position_Key, IFactorPositionDoc, Factor_Key, IFactorDoc>

}

export class FactorsCollection
	extends RootCollection<Factor_Key, IFactorDoc>
	implements IFactorsCollection {

	constructor(
		schema: ISchema
	) {
		super('factors', schema)
	}

	factorPolls(
		keyOrReference: Factor_Key | IVCDocumentReference<Factor_Key, IFactorDoc>
	): ICollection<Poll_Key, IFactorPollDoc, Factor_Key, IFactorDoc> {
		return this.child(keyOrReference, 'factorPolls')
	}

	factorPositions(
		keyOrReference: Factor_Key | IVCDocumentReference<Factor_Key, IFactorDoc>
	): ICollection<Position_Key, IFactorPositionDoc, Factor_Key, IFactorDoc> {
		return this.child(keyOrReference, 'factorPositions')
	}

}
