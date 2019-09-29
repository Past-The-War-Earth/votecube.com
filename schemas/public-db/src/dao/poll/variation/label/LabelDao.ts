import {DI}        from '@airport/di'
import {LABEL_DAO} from '../../../../diTokens'
import {ILabel}    from '../../../../generated/interfaces'
import {DB}        from '../../../stubDB'

export interface ILabelDao {

	getAll(): Promise<ILabel[]>

}

export class LabelDao
	implements ILabelDao {

	labelMap = {}

	async getAll(): Promise<ILabel[]> {
		return DB.labels.map(
			label => {
				if (this.labelMap[label.id]) {
					return label
				}

				return this.cacheLabel(label)
			})
	}

	cacheLabel(label) {
		this.labelMap[label.id] = label

		return label
	}

}

DI.set(LABEL_DAO, LabelDao)
