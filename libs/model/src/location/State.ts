import {State_Id} from '@votecube/ecclesia'
import {ICountry} from './Country'

export const STATES = 'STATES'

export interface IState {

	country: ICountry
	id: State_Id
	name: string

}
