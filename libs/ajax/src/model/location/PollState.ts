import {DI}                from '@votecube/di'
import {IPollState}        from '@votecube/model'
import {In}                from '../../core/In'
import {Out}               from '../../core/Out'
import {AJAX_Z_POLL_STATE} from '../../tokens'
import {Mode}              from '../core/Mode'
import {ModelSerializer}   from '../core/ModelSerializer'

export class PollStateSerializer
	extends ModelSerializer<IPollState> {

	serializeRecord(
		model: IPollState,
		out: Out
	): void {
		out.num(model.state.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollState {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_STATE, PollStateSerializer)
