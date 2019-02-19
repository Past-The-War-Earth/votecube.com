import {ICounty} from './County'

export type TownId = number

export interface ITown {

	county: ICounty
	id: TownId
	name: string

}
