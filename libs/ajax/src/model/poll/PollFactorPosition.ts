import {DI}                                                  from '@airport/di'
import {EntityType, IPollFactorPosition}                     from '@votecube/model'
import {In}                                                  from '../../core/In'
import {Out}                                                 from '../../core/Out'
import {AJAX_Z_FACTOR_POSITION, AJAX_Z_POLL_FACTOR_POSITION} from '../../tokens'
import {Mode}                                                from '../core/Mode'
import {ITempRecordId, ModelSerializer}                      from '../core/ModelSerializer'
import {FactorPositionSerializer}                            from '../FactorPosition'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollFactorPositionSerializer
	extends ModelSerializer<IPollFactorPosition> {

	constructor() {
		super(EntityType.PLL_DIM_DIR)
	}

	async serializeRecord(
		model: IPollFactorPosition,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.byte(this.getAxisByte(model.axis))
		out.num(model.color.id)
		const factorPositionZ = await DI.get(AJAX_Z_FACTOR_POSITION)
		await factorPositionZ.serializeRecord(model.factorPosition, out, tempRecordIds)
		out.byte(model.dir === 1 ? 1 : 0)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollFactorPosition> {
		return undefined
	}

	getAxisByte(
		axis
	) {
		switch (axis) {
			case 'x':
				return 0
			case 'y':
				return 1
			case 'z':
				return 2
		}
	}

}

DI.set(AJAX_Z_POLL_FACTOR_POSITION, PollFactorPositionSerializer)
