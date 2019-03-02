import {DI}                  from '@votecube/di'
import {IPollCountry}        from '@votecube/model'
import {In}                  from '../../core/In'
import {Out}                 from '../../core/Out'
import {AJAX_Z_POLL_COUNTRY} from '../../tokens'
import {Mode}                from '../core/Mode'
import {ModelSerializer}     from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountrySerializer
	extends ModelSerializer<IPollCountry> {

	serializeRecord(
		model: IPollCountry,
		out: Out
	): void {
		out.num(model.country.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollCountry {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_COUNTRY, PollCountrySerializer)
