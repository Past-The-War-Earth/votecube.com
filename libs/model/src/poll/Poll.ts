import {Id}                  from '../core/Model'
import {ITemporalModel}      from '../core/TemporalModel'
import {IPollContinent}      from '../location/PollContinent'
import {IPollCountry}        from '../location/PollCountry'
import {IPollCounty}         from '../location/PollCounty'
import {IPollState}          from '../location/PollState'
import {IPollTown}           from '../location/PollTown'
import {ITheme}              from '../Theme'
import {IPollFactorPosition} from './PollFactorPosition'
import {IPollLabel}          from './PollLabel'

export type PollId = Id
export type PollName = string

export interface IPoll
	extends ITemporalModel {

	endDate: Date
	id: PollId
	name: PollName
	pollsContinents: IPollContinent[]
	pollsCounties: IPollCounty[]
	pollsCountries: IPollCountry[]
	pollsFactorPositions: IPollFactorPosition[]
	pollsLabels: IPollLabel[];
	pollsStates: IPollState[]
	pollsTowns: IPollTown[]
	startDate: Date,
	theme: ITheme

}
