import {DI}                             from '@airport/di'
import {EntityType, IPollTown}          from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_TOWN}               from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollTownSerializer
	extends ModelSerializer<IPollTown> {

	constructor() {
		super(EntityType.PLL_TWN);
	}

	async serializeRecord(
		model: IPollTown,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.num(model.town.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPollTown> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_TOWN, PollTownSerializer)
