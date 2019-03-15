import {Id}         from '../core/Model'
import {IContinent} from './Continent'

export type CountryId = Id

export const COUNTRIES = 'COUNTRIES'

export interface ICountry {

	continent: IContinent
	id: CountryId
	name: string

}
