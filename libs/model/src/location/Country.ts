import {Country_Id} from '@votecube/ecclesia'
import {IContinent} from './Continent'

export const COUNTRIES = 'COUNTRIES'

export interface ICountry {

	continent: IContinent
	id: Country_Id
	name: string

}
