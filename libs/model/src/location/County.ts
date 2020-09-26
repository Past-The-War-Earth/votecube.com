import {County_Id} from '@votecube/ecclesia'
import {IState}    from './State'

export const COUNTIES = 'COUNTIES'

export interface ICounty {

	state: IState
	id: County_Id
	name: string

}
