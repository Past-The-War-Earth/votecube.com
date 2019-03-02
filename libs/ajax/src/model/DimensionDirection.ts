import {DI}                                                             from '@votecube/di'
import {IDimensionDirection}                                            from '@votecube/model'
import {In}                                                             from '../core/In'
import {Out}                                                            from '../core/Out'
import {AJAX_Z_DIMENSION, AJAX_Z_DIMENSION_DIRECTION, AJAX_Z_DIRECTION} from '../tokens'
import {Mode}                                                           from './core/Mode'
import {ModelSerializer}                                                from './core/ModelSerializer'
import {DimensionSerializer}                                            from './Dimension'
import {DirectionSerializer}                                            from './Direction'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class DimensionDirectionSerializer
	extends ModelSerializer<IDimensionDirection> {

	dimensionZ: DimensionSerializer
	directionZ: DirectionSerializer

	constructor() {
		super()
		DI.get(
			di => {
				[this.dimensionZ, this.directionZ] = di
			}, AJAX_Z_DIMENSION, AJAX_Z_DIRECTION)
	}

	serializeRecord(
		model: IDimensionDirection,
		out: Out
	): void {
		this.dimensionZ.serialize(model.dimension, out)
		this.directionZ.serialize(model.direction, out)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IDimensionDirection {
		return undefined
	}

}

DI.set(AJAX_Z_DIMENSION_DIRECTION, DimensionDirectionSerializer)
