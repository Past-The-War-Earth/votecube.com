import {DI}                             from '@airport/di'
import {EntityType, ITown}              from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_TOWN}                    from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class TownSerializer
	extends ModelSerializer<ITown> {

	constructor() {
		super(EntityType.TWN);
	}

	async serializeRecord(
		model: ITown,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<ITown> {
		return undefined
	}

}

DI.set(AJAX_Z_TOWN, TownSerializer)
