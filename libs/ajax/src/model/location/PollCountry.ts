import {DI}                             from '@airport/di'
import {EntityType, IPollCountry}       from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_COUNTRY}            from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountrySerializer
	extends ModelSerializer<IPollCountry> {

	constructor() {
		super(EntityType.PLL_CNTRY);
	}

	async serializeRecord(
		model: IPollCountry,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(model.country.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollCountry> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_COUNTRY, PollCountrySerializer)
