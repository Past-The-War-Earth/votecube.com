import {DI}                             from '@votecube/di'
import {EntityType, IDimension}         from '@votecube/model'
import {In}                             from '../core/In'
import {Out}                            from '../core/Out'
import {AJAX_Z_DIMENSION}               from '../tokens'
import {Mode}                           from './core/Mode'
import {ITempRecordId, ModelSerializer} from './core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class DimensionSerializer
	extends ModelSerializer<IDimension> {

	constructor() {
		super(EntityType.DIM);
	}

	serializeRecord(
		model: IDimension,
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
	): IDimension {
		return undefined
	}

}

DI.set(AJAX_Z_DIMENSION, DimensionSerializer)
