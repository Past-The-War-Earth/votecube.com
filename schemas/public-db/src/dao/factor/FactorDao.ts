import {DI}         from '@airport/di'
import {FACTOR_DAO} from '../../diTokens'
import {IFactor}    from '../../generated/interfaces'
import {DB}         from '../stubDB'

export interface IFactorDao {

	getAll(): Promise<IFactor[]>

}

export class FactorDao
	implements IFactorDao {

	async getAll(): Promise<IFactor[]> {
		return new Promise((resolve) => {
			const factors = DB.factors

			resolve(factors)
		})
	}

}

DI.set(FACTOR_DAO, FactorDao)
