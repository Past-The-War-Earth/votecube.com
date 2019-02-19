import {DI}                    from '@votecube/di'
import {IPollContinent}        from '@votecube/model'
import {In}                    from '../../core/In'
import {Out}                   from '../../core/Out'
import {AJAX_Z_POLL_CONTINENT} from '../../tokens'
import {Mode}                  from '../core/Mode'
import {ModelSerializer}       from '../core/ModelSerializer'

export class PollContinentSerializer
	extends ModelSerializer<IPollContinent> {

	serializeRecord(
		model: IPollContinent,
		out: Out
	): void {
		out.num(model.continent.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollContinent {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_CONTINENT, PollContinentSerializer)
