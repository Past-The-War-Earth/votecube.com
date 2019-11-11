import {DI}         from '@airport/di'
import {IFactorDoc} from '@votecube/model'
import {FACTOR_DAO} from '../../diTokens'

export interface IFactorDao {

	getAll(): Promise<IFactorDoc[]>

}

export class FactorDao
	implements IFactorDao {

	async getAll(): Promise<IFactorDoc[]> {
		return []
	}

}

DI.set(FACTOR_DAO, FactorDao)
