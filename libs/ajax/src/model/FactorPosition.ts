import {DI}   from '@airport/di'
import {
	EntityType,
	IFactorPosition
}             from '@votecube/model'
import {In}   from '../core/In'
import {Out}  from '../core/Out'
import {
	AJAX_Z_FACTOR,
	AJAX_Z_FACTOR_POSITION,
	AJAX_Z_POSITION
}             from '../tokens'
import {Mode} from './core/Mode'
import {
	ITempRecordId,
	ModelSerializer
}             from './core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class FactorPositionSerializer
	extends ModelSerializer<IFactorPosition> {

	constructor() {
		super(EntityType.DIM_DIR)
	}

	async serializeRecord(
		model: IFactorPosition,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		const [factorZ, positionZ] = await DI.get(AJAX_Z_FACTOR, AJAX_Z_POSITION)

		await factorZ.serialize(model.factor, out, tempRecordIds)
		await positionZ.serialize(model.position, out, tempRecordIds)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IFactorPosition> {
		return undefined
	}

}

DI.set(AJAX_Z_FACTOR_POSITION, FactorPositionSerializer)
