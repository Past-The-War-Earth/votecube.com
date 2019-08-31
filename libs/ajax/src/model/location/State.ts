import {DI}                             from '@airport/di'
import {EntityType, IState}             from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_STATE}                   from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class StateSerializer
	extends ModelSerializer<IState> {

	constructor() {
		super(EntityType.STT);
	}

	async serializeRecord(
		model: IState,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
	}

	deserialize(
		mode: Mode,
		bin: In
	): IState {
		return undefined
	}

}

DI.set(AJAX_Z_STATE, StateSerializer)
