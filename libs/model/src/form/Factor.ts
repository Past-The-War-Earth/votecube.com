import {
	Factor_Name,
	ICoreColor,
	IsData,
	Position_Name
} from '../core/core'

export interface IFactorForm {
	color: ICoreColor<IsData>
	name: Factor_Name
	positions: IFactorPositionsForm
}

export interface IFactorPositionsForm {

	A: Position_Name
	B: Position_Name

}
