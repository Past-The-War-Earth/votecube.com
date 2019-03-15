import {DI}                             from '@votecube/di'
import {EntityType, IFactor}         from '@votecube/model'
import {In}                             from '../core/In'
import {Out}                            from '../core/Out'
import {AJAX_Z_DIMENSION}               from '../tokens'
import {Mode}                           from './core/Mode'
import {ITempRecordId, ModelSerializer} from './core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class FactorSerializer
	extends ModelSerializer<IFactor> {

	constructor() {
		super(EntityType.DIM);
	}

	serializeRecord(
		model: IFactor,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		// out.num(model.color.id)
		// out.str(model.description)
		out.str(model.name)
		this.serialize(model.parent, out, tempRecordIds)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IFactor {
		return undefined
	}

}

DI.set(AJAX_Z_DIMENSION, FactorSerializer)
