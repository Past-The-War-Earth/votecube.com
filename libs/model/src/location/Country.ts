import {IContinent} from './Continent'

export type CountryId = number

export interface ICountry {

	continent: IContinent
	id: CountryId
	name: string

}
