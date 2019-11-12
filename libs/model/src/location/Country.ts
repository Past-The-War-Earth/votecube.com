import {Id}         from '../old/model'
import {IContinent} from './Continent'

export type Country_Id = Id

export const COUNTRIES = 'COUNTRIES'

export interface ICountry {

	continent: IContinent
	id: Country_Id
	name: string

}
