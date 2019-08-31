import {DI}   from '@airport/di'
import {
	EntityType,
	IPoll
}             from '@votecube/model'
import {In}   from '../../core/In'
import {Out}  from '../../core/Out'
import {
	AJAX_Z_POLL,
	AJAX_Z_POLL_CONTINENT,
	AJAX_Z_POLL_COUNTRY,
	AJAX_Z_POLL_COUNTY,
	AJAX_Z_POLL_FACTOR_POSITION,
	AJAX_Z_POLL_LABEL,
	AJAX_Z_POLL_STATE,
	AJAX_Z_POLL_TOWN
}             from '../../tokens'
import {Mode} from '../core/Mode'
import {
	ITempRecordId,
	ModelSerializer
}             from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollSerializer
	extends ModelSerializer<IPoll> {

	constructor() {
		super(EntityType.PLL)
	}

	async init() {

	}

	async serializeRecord(
		model: IPoll,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): Promise<void> {
		out.date(model.endDate)
		out.str(model.name)
		const [
			      pollContinentZ,
			      pollCountryZ,
			      pollCountyZ,
			      pollFactorPositionZ,
			      pollLabelZ,
			      pollStateZ,
			      pollTownZ
		      ] = await DI.get(AJAX_Z_POLL_CONTINENT,
			AJAX_Z_POLL_COUNTRY,
			AJAX_Z_POLL_COUNTY,
			AJAX_Z_POLL_FACTOR_POSITION,
			AJAX_Z_POLL_LABEL,
			AJAX_Z_POLL_STATE,
			AJAX_Z_POLL_TOWN
		)
		await pollContinentZ.serializeArray(model.pollsContinents, out, tempRecordIds)
		await pollCountryZ.serializeArray(model.pollsCountries, out, tempRecordIds)
		await pollStateZ.serializeArray(model.pollsStates, out, tempRecordIds)
		// await this.pollCountyZ.serializeArray(model.pollsCounties, out, tempRecordIds)
		await pollTownZ.serializeArray(model.pollsTowns, out, tempRecordIds)
		await pollFactorPositionZ.serializeArray(model.pollsFactorPositions, out, tempRecordIds)
		await pollLabelZ.serializeArray(model.pollsLabels, out, tempRecordIds)
		out.date(model.startDate)
		out.num(model.theme.id)
	}

	async deserialize(
		mode: Mode,
		bin: In
	): Promise<IPoll> {
		return undefined
	}

}

DI.set(AJAX_Z_POLL, PollSerializer)
