import {
	FactorTranslation_Name,
	PositionTranslation_Name
} from '@votecube/relational-db'
import {
	ICoreColor,
	IsData,
} from '../core/core'

export interface IFactorForm {
	color: ICoreColor<IsData>
	name: FactorTranslation_Name
	positions: IFactorPositionsForm
}

export interface IFactorPositionsForm {

	A: PositionTranslation_Name
	B: PositionTranslation_Name

}
