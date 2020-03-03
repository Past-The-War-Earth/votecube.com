import {County_Id} from '@votecube/relational-db'
import {IState}    from './State'

export const COUNTIES = 'COUNTIES'

export interface ICounty {

	state: IState
	id: County_Id
	name: string

}
