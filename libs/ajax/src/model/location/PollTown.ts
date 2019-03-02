import {DI}               from '@votecube/di'
import {IPollTown}        from '@votecube/model'
import {In}               from '../../core/In'
import {Out}              from '../../core/Out'
import {AJAX_Z_POLL_TOWN} from '../../tokens'
import {Mode}             from '../core/Mode'
import {ModelSerializer}  from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollTownSerializer
	extends ModelSerializer<IPollTown> {

	serializeRecord(
		model: IPollTown,
		out: Out
	): void {
		out.num(model.town.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollTown {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_TOWN, PollTownSerializer)
