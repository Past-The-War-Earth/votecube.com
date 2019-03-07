import {Id}       from '../core/Model'
import {ICountry} from './Country'

export type StateId = Id

export interface IState {

	country: ICountry
	id: StateId
	name: string

}
