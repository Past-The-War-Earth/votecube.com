import {IState} from './State'

export type CountyId = number

export interface ICounty {

	state: IState
	id: CountyId
	name: string

}
