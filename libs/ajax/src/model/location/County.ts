import {DI}              from '@votecube/di'
import {ICounty}         from '@votecube/model'
import {In}              from '../../core/In'
import {Out}             from '../../core/Out'
import {AJAX_Z_COUNTY}   from '../../tokens'
import {Mode}            from '../core/Mode'
import {ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class CountySerializer
	extends ModelSerializer<ICounty> {

	serializeRecord(
		model: ICounty,
		out: Out
	): void {
	}

	deserialize(
		mode: Mode,
		bin: In
	): ICounty {
		return undefined
	}

}

DI.set(AJAX_Z_COUNTY, CountySerializer)
