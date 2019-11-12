import {Id}       from '../old/model'
import {ICountry} from './Country'

export type State_Id = Id

export const STATES = 'STATES'

export interface IState {

	country: ICountry
	id: State_Id
	name: string

}
