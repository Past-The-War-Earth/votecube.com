import {DI}                             from '@airport/di'
import {EntityType, ICounty}            from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_COUNTY}                  from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class CountySerializer
	extends ModelSerializer<ICounty> {

	constructor() {
		super(EntityType.CNTY);
	}

	async serializeRecord(
		model: ICounty,
		out: Out,
		tempRecordIds: ITempRecordId[]
	) {
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<ICounty> {
		return undefined
	}

}

DI.set(AJAX_Z_COUNTY, CountySerializer)
