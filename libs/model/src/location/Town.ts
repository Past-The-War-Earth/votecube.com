import {Id}      from '../old/model'
import {ICounty} from './County'

export type Town_Id = Id

export const TOWNS = 'TOWNS'

export interface ITown {

	county: ICounty
	id: Town_Id
	name: string

}
