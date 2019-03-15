import {DI}                                                             from '@votecube/di'
import {EntityType, IFactorPosition}                                from '@votecube/model'
import {In}                                                             from '../core/In'
import {Out}                                                            from '../core/Out'
import {AJAX_Z_DIMENSION, AJAX_Z_DIMENSION_DIRECTION, AJAX_Z_DIRECTION} from '../tokens'
import {Mode}                                                           from './core/Mode'
import {ITempRecordId, ModelSerializer}                                 from './core/ModelSerializer'
import {FactorSerializer}                                            from './Factor'
import {PositionSerializer}                                            from './Position'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class FactorPositionSerializer
	extends ModelSerializer<IFactorPosition> {

	factorZ: FactorSerializer
	positionZ: PositionSerializer

	constructor() {
		super(EntityType.DIM_DIR)
		DI.get(
			di => {
				[this.factorZ, this.positionZ] = di
			}, AJAX_Z_DIMENSION, AJAX_Z_DIRECTION)
	}

	serializeRecord(
		model: IFactorPosition,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		this.factorZ.serialize(model.factor, out, tempRecordIds)
		this.positionZ.serialize(model.position, out, tempRecordIds)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IFactorPosition {
		return undefined
	}

}

DI.set(AJAX_Z_DIMENSION_DIRECTION, FactorPositionSerializer)
