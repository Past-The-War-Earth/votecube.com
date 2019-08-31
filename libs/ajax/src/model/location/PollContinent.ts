import {DI}                             from '@airport/di'
import {EntityType, IPollContinent}     from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_CONTINENT}          from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollContinentSerializer
	extends ModelSerializer<IPollContinent> {

	constructor() {
		super(EntityType.PLL_CNTNNT);
	}

	async serializeRecord(
		model: IPollContinent,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(model.continent.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollContinent> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_CONTINENT, PollContinentSerializer)
