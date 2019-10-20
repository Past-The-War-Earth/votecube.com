import {DI}         from '@airport/di'
import {FACTOR_DAO} from '../../diTokens'
import {IFactor}    from '../../generated/interfaces'

export interface IFactorDao {

	getAll(): Promise<IFactor[]>

}

export class FactorDao
	implements IFactorDao {

	async getAll(): Promise<IFactor[]> {
		return []
	}

}

DI.set(FACTOR_DAO, FactorDao)
