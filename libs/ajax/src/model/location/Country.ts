import {DI}              from '@votecube/di'
import {ICountry}        from '@votecube/model'
import {In}              from '../../core/In'
import {Out}             from '../../core/Out'
import {AJAX_Z_COUNTRY}  from '../../tokens'
import {Mode}            from '../core/Mode'
import {ModelSerializer} from '../core/ModelSerializer'

export class CountrySerializer
	extends ModelSerializer<ICountry> {

	serializeRecord(
		model: ICountry,
		out: Out
	): void {
	}

	deserialize(
		mode: Mode,
		bin: In
	): ICountry {
		return undefined
	}

}

DI.set(AJAX_Z_COUNTRY, CountrySerializer)
