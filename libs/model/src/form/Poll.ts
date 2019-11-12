import {
	Outcome_Name,
	Poll_Name
}                    from '../core/core'
import {IFactorForm} from './Factor'
import {IThemeForm}  from './Theme'

export interface IPollForm {

	factors: IPollFactorsForm
	name: Poll_Name
	outcomes: IPollOutcomesForm
	theme: IThemeForm

}

export interface IPollFactorsForm {

	1: IFactorForm
	2: IFactorForm
	3: IFactorForm

}

export interface IPollOutcomesForm {

	A: Outcome_Name
	B: Outcome_Name

}
