import {Id}     from '../core/Model'
import {IState} from './State'

export type CountyId = Id

export interface ICounty {

	state: IState
	id: CountyId
	name: string

}
