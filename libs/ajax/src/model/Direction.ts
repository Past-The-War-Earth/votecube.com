import {DI}                             from '@votecube/di'
import {EntityType, IDirection}         from '@votecube/model'
import {In}                             from '../core/In'
import {Out}                            from '../core/Out'
import {AJAX_Z_DIRECTION}               from '../tokens'
import {Mode}                           from './core/Mode'
import {ITempRecordId, ModelSerializer} from './core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class DirectionSerializer
	extends ModelSerializer<IDirection> {

	constructor() {
		super(EntityType.DIR);
	}

	serializeRecord(
		model: IDirection,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		out.nil() // emoji
		out.nil() // design pattern
		out.str(model.name)
		this.serialize(model.parent, out, tempRecordIds)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IDirection {
		return undefined
	}

}

DI.set(AJAX_Z_DIRECTION, DirectionSerializer)
