import {DI}                             from '@airport/di'
import {EntityType, IPosition}          from '@votecube/model'
import {In}                             from '../core/In'
import {Out}                            from '../core/Out'
import {AJAX_Z_POSITION}                from '../tokens'
import {Mode}                           from './core/Mode'
import {ITempRecordId, ModelSerializer} from './core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PositionSerializer
	extends ModelSerializer<IPosition> {

	constructor() {
		super(EntityType.DIR);
	}

	async serializeRecord(
		model: IPosition,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		// out.nil() // emoji
		// out.nil() // design pattern
		out.str(model.name)
		await this.serialize(model.parent, out, tempRecordIds)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPosition> {
		return undefined
	}

}

DI.set(AJAX_Z_POSITION, PositionSerializer)
