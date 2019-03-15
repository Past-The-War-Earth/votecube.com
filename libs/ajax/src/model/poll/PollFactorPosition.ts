import {DI}                                              from '@votecube/di'
import {EntityType, IPollFactorPosition}             from '@votecube/model'
import {In}                                              from '../../core/In'
import {Out}                                             from '../../core/Out'
import {AJAX_Z_DIMENSION_DIRECTION, AJAX_Z_POLL_DIM_DIR} from '../../tokens'
import {Mode}                                            from '../core/Mode'
import {ITempRecordId, ModelSerializer}                  from '../core/ModelSerializer'
import {FactorPositionSerializer}                    from '../FactorPosition'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollFactorPositionSerializer
	extends ModelSerializer<IPollFactorPosition> {

	factorPositionZ: FactorPositionSerializer

	constructor() {
		super(EntityType.PLL_DIM_DIR)
		DI.get(
			di => {
				[this.factorPositionZ] = di
			}, AJAX_Z_DIMENSION_DIRECTION)
	}

	serializeRecord(
		model: IPollFactorPosition,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		out.byte(this.getAxisByte(model.axis))
		out.num(model.color.id)
		this.factorPositionZ.serializeRecord(model.factorPosition, out, tempRecordIds)
		out.byte(model.dir === 1 ? 1 : 0)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollFactorPosition {
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

DI.set(AJAX_Z_POLL_DIM_DIR, PollFactorPositionSerializer)
