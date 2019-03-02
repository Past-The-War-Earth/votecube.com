import {DI}                      from '@votecube/di'
import {IPoll}                   from '@votecube/model'
import {In}                      from '../../core/In'
import {Out}                     from '../../core/Out'
import {
	AJAX_Z_POLL,
	AJAX_Z_POLL_CONTINENT,
	AJAX_Z_POLL_COUNTRY,
	AJAX_Z_POLL_COUNTY,
	AJAX_Z_POLL_DIM_DIR,
	AJAX_Z_POLL_LABEL,
	AJAX_Z_POLL_STATE,
	AJAX_Z_POLL_TOWN
}                                from '../../tokens'
import {Mode}                    from '../core/Mode'
import {ModelSerializer}         from '../core/ModelSerializer'
import {PollContinentSerializer} from '../location/PollContinent'
import {PollCountrySerializer}   from '../location/PollCountry'
import {PollCountySerializer}    from '../location/PollCounty'
import {PollStateSerializer}     from '../location/PollState'
import {PollTownSerializer}      from '../location/PollTown'
import {PollDimDirSerializer}    from './PollDimDir'
import {PollLabelSerializer}     from './PollLabel'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollSerializer
	extends ModelSerializer<IPoll> {

	pollContinentZ: PollContinentSerializer
	pollCountryZ: PollCountrySerializer
	pollCountyZ: PollCountySerializer
	pollDimDirZ: PollDimDirSerializer
	pollLabelZ: PollLabelSerializer
	pollStateZ: PollStateSerializer
	pollTownZ: PollTownSerializer

	constructor() {
		super()
		DI.get(
			di => {
				[
					this.pollContinentZ,
					this.pollCountryZ,
					this.pollCountyZ,
					this.pollDimDirZ,
					this.pollLabelZ,
					this.pollStateZ,
					this.pollTownZ
				] = di
			}, AJAX_Z_POLL_CONTINENT,
			AJAX_Z_POLL_COUNTRY,
			AJAX_Z_POLL_COUNTY,
			AJAX_Z_POLL_DIM_DIR,
			AJAX_Z_POLL_LABEL,
			AJAX_Z_POLL_STATE,
			AJAX_Z_POLL_TOWN
		)
	}

	serializeRecord(
		model: IPoll,
		out: Out
	): void {
		out.date(model.endDate)
		out.str(model.name)
		this.pollContinentZ.serializeArray(model.pollsContinents, out)
		this.pollCountryZ.serializeArray(model.pollsCountries, out)
		this.pollCountyZ.serializeArray(model.pollsCounties, out)
		this.pollDimDirZ.serializeArray(model.pollsDimensionsDirections, out)
		this.pollLabelZ.serializeArray(model.pollsLabels, out)
		this.pollStateZ.serializeArray(model.pollsStates, out)
		this.pollTownZ.serializeArray(model.pollsTowns, out)
		out.date(model.startDate)
		out.num(model.theme.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPoll {
		return undefined
	}

}

DI.set(AJAX_Z_POLL, PollSerializer)
