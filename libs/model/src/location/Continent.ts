import {Id} from '../core/Model'

export type ContinentId = Id

export const CONTINENTS = 'CONTINENTS'

export interface IContinent {

	id: ContinentId
	name: string

}
