import {DI}        from '@airport/di'
import {LABEL_DAO} from '../../../../diTokens'
import {ILabel}    from '../../../../generated/interfaces'

export interface ILabelDao {

	getAll(): Promise<ILabel[]>

}

export class LabelDao
	implements ILabelDao {

	async getAll(): Promise<ILabel[]> {
		return []
	}

}

DI.set(LABEL_DAO, LabelDao)
