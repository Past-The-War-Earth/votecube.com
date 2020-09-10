import {DI}                from '@airport/di'
import {
	IFactorForm,
	IPollForm,
	IUiFactor,
	IUiFactorFromForm,
	IUiPollRevisionCore,
	IUiRevisionFromForm,
	UiDocStatus
}                          from '@votecube/model'
import {POLL_FORM_MANAGER} from '../../tokens'

export interface IPollFormManager {

	fromForm<Doc extends UiDocStatus>(
		form: IPollForm<Doc>
	): IUiPollRevisionCore<Doc>

	toForm<Doc extends UiDocStatus>(
		data: IUiPollRevisionCore<Doc>
	): IPollForm<Doc>

}

export class PollFormManager
	implements IPollFormManager {

	fromForm<Doc extends UiDocStatus>(
		form: IPollForm<Doc>
	): IUiPollRevisionCore<Doc> {
		const outcomes       = form.outcomes
		const formThemeValue = form.theme

		const revisionFromForm: IUiRevisionFromForm<Doc> = {
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
				name: formThemeValue ? formThemeValue.text : null
			}
		}

		return revisionFromForm as IUiPollRevisionCore<Doc>
	}

	toForm<Doc extends UiDocStatus>(
		data: IUiPollRevisionCore<Doc>
	): IPollForm<Doc> {
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

	private toPollFactorForm<Doc extends UiDocStatus>(
		factorData: IUiFactor<Doc>
	): IFactorForm<Doc> {
		return {
			color: factorData.color,
			name: factorData.name,
			positions: {
				A: factorData.positions.A.name,
				B: factorData.positions.B.name
			}
		}
	}

	private toPollFactorFromForm<Doc extends UiDocStatus>(
		factorForm: IFactorForm<Doc>
	): IUiFactorFromForm<Doc> {
		const blue  = factorForm.color.blue
		const green = factorForm.color.green
		const red   = factorForm.color.red
		return {
			color: {
				blue: typeof blue === 'boolean' ? blue : parseInt(blue as any) as any,
				green: typeof green === 'boolean' ? green : parseInt(green as any) as any,
				red: typeof red === 'boolean' ? red : parseInt(red as any) as any,
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
