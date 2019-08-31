import {DI}                             from '@airport/di'
import {EntityType, IPollState}         from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_STATE}              from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollStateSerializer
	extends ModelSerializer<IPollState> {

	constructor() {
		super(EntityType.PLL_STT);
	}

	async serializeRecord(
		model: IPollState,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(model.state.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollState> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_STATE, PollStateSerializer)
