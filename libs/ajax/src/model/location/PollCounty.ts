import {DI}                             from '@airport/di'
import {EntityType, IPollCounty}        from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_COUNTY}             from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountySerializer
	extends ModelSerializer<IPollCounty> {

	constructor() {
		super(EntityType.PLL_CNTY);
	}

	async serializeRecord(
		model: IPollCounty,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(model.county.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollCounty> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_COUNTY, PollCountySerializer)
