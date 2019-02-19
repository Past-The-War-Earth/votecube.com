import {DI}                                              from '@votecube/di'
import {IPollDimensionDirection}                         from '@votecube/model'
import {In}                                              from '../../core/In'
import {Out}                                             from '../../core/Out'
import {AJAX_Z_DIMENSION_DIRECTION, AJAX_Z_POLL_DIM_DIR} from '../../tokens'
import {Mode}                                            from '../core/Mode'
import {ModelSerializer}                                 from '../core/ModelSerializer'
import {DimensionDirectionSerializer}                    from '../DimensionDirection'

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
		out.str(model.axis)
		out.num(model.color.id)
		this.dimDirZ.serializeRecord(model.dimensionDirection, out)
		out.num(model.dir)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollDimensionDirection {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_DIM_DIR, PollDimDirSerializer)
