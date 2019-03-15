import {Id}       from '../core/Model'
import {ICountry} from './Country'

export type StateId = Id

export const STATES = 'STATES'

export interface IState {

	country: ICountry
	id: StateId
	name: string

}
