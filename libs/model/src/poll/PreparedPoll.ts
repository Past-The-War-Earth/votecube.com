import {Poll_Id}        from '@votecube/ecclesia'
import {IPollContinent} from '../location/PollContinent'
import {IPollCountry}   from '../location/PollCountry'
import {IPollCounty}    from '../location/PollCounty'
import {IPollState}     from '../location/PollState'
import {IPollTown}      from '../location/PollTown'

export const POLLS = 'POLLS'

export const POLL_COLS = [
	['createdAt', 'ca'],
	['endDate', 'ed'],
	['id', 'pid', 1],
	['name', 'n'],
	['startDate', 'sd'],
	['theme', 'tid', 'T'],
	['user', 'uai', 'UA'],
	['parentPoll', 1, 'ppi', 'P']
]

export interface IPreparedPoll
//	extends ITemporalModel
{

	endDate: Date
	id: Poll_Id
	name: string // Poll_Name
	pollsContinents: IPollContinent[]
	pollsCounties: IPollCounty[]
	pollsCountries: IPollCountry[]
	pollsFactorPositions: any[] // IPollFactorPosition[]
	pollsStates: IPollState[]
	pollsTowns: IPollTown[]
	startDate: Date,
	theme: any // ITheme

}
