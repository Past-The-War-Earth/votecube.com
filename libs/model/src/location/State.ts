import {ICountry} from './Country'

export type StateId = number

export interface IState {

	country: ICountry
	id: StateId
	name: string

}
