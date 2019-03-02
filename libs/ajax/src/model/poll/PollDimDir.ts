import {DI}                                              from '@votecube/di'
import {IPollDimensionDirection}                         from '@votecube/model'
import {In}                                              from '../../core/In'
import {Out}                                             from '../../core/Out'
import {AJAX_Z_DIMENSION_DIRECTION, AJAX_Z_POLL_DIM_DIR} from '../../tokens'
import {Mode}                                            from '../core/Mode'
import {ModelSerializer}                                 from '../core/ModelSerializer'
import {DimensionDirectionSerializer}                    from '../DimensionDirection'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollDimDirSerializer
	extends ModelSerializer<IPollDimensionDirection> {

	dimDirZ: DimensionDirectionSerializer

	constructor() {
		super()
		DI.get(
			di => {
				[this.dimDirZ] = di
			}, AJAX_Z_DIMENSION_DIRECTION)
	}

	serializeRecord(
		model: IPollDimensionDirection,
		out: Out
	): void {
		out.byte(this.getAxisByte(model.axis))
		out.num(model.color.id)
		this.dimDirZ.serializeRecord(model.dimensionDirection, out)
		out.byte(model.dir === 1 ? 1 : 0)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollDimensionDirection {
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

DI.set(AJAX_Z_POLL_DIM_DIR, PollDimDirSerializer)
