import {DI}                from '@airport/di'
import {
	ICoreFactor,
	ICoreFactorFromForm,
	ICoreVariationFromForm,
	IFactorForm,
	IPollForm,
	IsData,
	IsDelta,
	IVariationData,
	IVariationDataOrDelta
}                          from '@votecube/model'
import {POLL_FORM_MANAGER} from '../../diTokens'

export interface IPollFormManager {

	fromForm<DataOrDelta extends IsData | IsDelta>(
		form: IPollForm
	): IVariationDataOrDelta<DataOrDelta>

	toForm(
		data: IVariationData
	): IPollForm

}

export class PollFormManager
	implements IPollFormManager {

	fromForm<DataOrDelta extends IsData | IsDelta>(
		form: IPollForm
	): IVariationDataOrDelta<DataOrDelta> {
		const outcomes       = form.outcomes
		const formThemeValue = form.theme

		const variationFromForm: ICoreVariationFromForm = {
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

		return variationFromForm as IVariationDataOrDelta<DataOrDelta>
	}

	toForm(
		data: IVariationData
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
