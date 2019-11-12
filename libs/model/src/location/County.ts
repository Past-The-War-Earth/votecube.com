import {Id}     from '../old/model'
import {IState} from './State'

export type County_Id = Id

export const COUNTIES = 'COUNTIES'

export interface ICounty {

	state: IState
	id: County_Id
	name: string

}
