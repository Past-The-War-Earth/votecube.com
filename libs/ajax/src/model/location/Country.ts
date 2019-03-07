import {DI}                             from '@votecube/di'
import {EntityType, ICountry}           from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_COUNTRY}                 from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class CountrySerializer
	extends ModelSerializer<ICountry> {

	constructor() {
		super(EntityType.CNTRY);
	}

	serializeRecord(
		model: ICountry,
		out: Out,
		tempRecordIds: ITempRecordId[]
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
