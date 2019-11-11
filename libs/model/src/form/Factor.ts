import {
	FactorName,
	ICoreColor,
	IsData,
	PositionName
} from '../core/core'

export interface IFactorForm {
	color: ICoreColor<IsData>
	name: FactorName
	positions: IFactorPositionsForm
}

export interface IFactorPositionsForm {

	A: PositionName
	B: PositionName

}
