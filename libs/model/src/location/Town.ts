import {Id}      from '../core/Model'
import {ICounty} from './County'

export type TownId = Id

export interface ITown {

	county: ICounty
	id: TownId
	name: string

}
