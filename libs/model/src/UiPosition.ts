import {
	IUiRepositoryRecord
} from './common'

export interface IUiPosition
	extends IUiRepositoryRecord {

	dir: -1 | 1
	name: string
	factorPosition: IUiFactorPosition

}

export interface IUiFactorPosition
	extends IUiRepositoryRecord {
}
