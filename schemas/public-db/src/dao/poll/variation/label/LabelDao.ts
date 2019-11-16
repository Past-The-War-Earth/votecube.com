import {DI}        from '@airport/di'
import {LABEL_DAO} from '../../../../tokens'

export interface ILabelDao {

	// getAll(): Promise<ILabel[]>

}

export class LabelDao
	implements ILabelDao {

	// async getAll(): Promise<ILabel[]> {
	// 	return []
	// }

}

DI.set(LABEL_DAO, LabelDao)
