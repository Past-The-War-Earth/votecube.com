import {DI}                from '@airport/di'
import {
	ICoreFactor,
	ICoreFactorFromForm,
	ICoreRevisionFromForm,
	IFactorForm,
	IPollForm,
	IsData,
	IsDelta,
	IRevisionData,
	IRevisionDataOrDelta
}                          from '@votecube/model'
import {POLL_FORM_MANAGER} from '../../tokens'

export interface IPollFormManager {

	fromForm<DataOrDelta extends IsData | IsDelta>(
		form: IPollForm
	): IRevisionDataOrDelta<DataOrDelta>

	toForm(
		data: IRevisionData
	): IPollForm

}

export class PollFormManager
	implements IPollFormManager {

	fromForm<DataOrDelta extends IsData | IsDelta>(
		form: IPollForm
	): IRevisionDataOrDelta<DataOrDelta> {
		const outcomes       = form.outcomes
		const formThemeValue = form.theme

		const revisionFromForm: ICoreRevisionFromForm = {
			factors: {
				1: this.toPollFactorFromForm(form.factors[1]),
				2: this.toPollFactorFromForm(form.factors[2]),
				3: this.toPollFactorFromForm(form.factors[3]),
			},
			name: form.name,
			outcomes: {
				A: {
					name: outcomes.A
				},
				B: {
					name: outcomes.B
				}
			},
			theme: {
				id: formThemeValue ? formThemeValue.id : null,
				name: formThemeValue ? formThemeValue.text : ''
			}
		}

		return revisionFromForm as IRevisionDataOrDelta<DataOrDelta>
	}

	toForm(
		data: IRevisionData
	): IPollForm {
		const themeData = data.theme
		const theme     = {
			id: themeData.id,
			text: themeData.name
		}

		return {
			factors: {
				1: this.toPollFactorForm(data.factors[1]),
				2: this.toPollFactorForm(data.factors[2]),
				3: this.toPollFactorForm(data.factors[3])
			},
			name: data.name,
			outcomes: {
				A: data.outcomes.A.name,
				B: data.outcomes.B.name
			},
			theme
		}
	}

	private toPollFactorForm(
		factorData: ICoreFactor<IsData>
	): IFactorForm {
		return {
			color: factorData.color,
			name: factorData.name,
			positions: {
				A: factorData.positions.A.name,
				B: factorData.positions.B.name
			}
		}
	}

	private toPollFactorFromForm(
		factorForm: IFactorForm
	): ICoreFactorFromForm {
		return {
			color: {
				blue: parseInt(factorForm.color.blue as any),
				green: parseInt(factorForm.color.green as any),
				red: parseInt(factorForm.color.red as any),
			},
			name: factorForm.name,
			positions: {
				A: {
					name: factorForm.positions.A
				},
				B: {
					name: factorForm.positions.B
				}
			}
		}
	}
}

DI.set(POLL_FORM_MANAGER, PollFormManager)
