import {
	OutcomeName,
	PollName
}                    from '../core/core'
import {IFactorForm} from './Factor'
import {IThemeForm}  from './Theme'

export interface IPollForm {

	factors: IPollFactorsForm
	name: PollName
	outcomes: IPollOutcomesForm
	theme: IThemeForm

}

export interface IPollFactorsForm {

	1: IFactorForm
	2: IFactorForm
	3: IFactorForm

}

export interface IPollOutcomesForm {

	A: OutcomeName
	B: OutcomeName

}
