import {
	Outcome_Name,
	PollRevisionTranslation_Name
}                    from '@votecube/relational-db'
import {IsDelta}     from '../core/common'
import {UiDocStatus} from '../ui/common'
import {IFactorForm} from './Factor'
import {IThemeForm}  from './Theme'

export interface IPollForm<Doc extends UiDocStatus> {

	factors: IPollFactorsForm<Doc>
	name: Doc extends IsDelta ? boolean : PollRevisionTranslation_Name
	outcomes: IPollOutcomesForm<Doc>
	theme: IThemeForm<Doc>

}

export interface IPollFactorsForm<Doc extends UiDocStatus> {

	1: IFactorForm<Doc>
	2: IFactorForm<Doc>
	3: IFactorForm<Doc>

}

export interface IPollOutcomesForm<Doc extends UiDocStatus> {

	A: Doc extends IsDelta ? boolean : Outcome_Name
	B: Doc extends IsDelta ? boolean : Outcome_Name

}
