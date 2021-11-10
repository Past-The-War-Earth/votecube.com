import { DI } from '@airport/di'
import {
	IFormColor,
	IFormFactor,
	IFormField,
	IFormSituation,
	IUiFactor,
	IUiNamedRecord,
	IUiRepositoryRecord,
	IUiSituation
} from '@votecube/model'
import {
	SITUATION_FORM_MANAGER
} from '../../tokens'


export interface ISituationFormManager {

	fromForm(
		formSituation: IFormSituation,
		uiSituation: IUiSituation,
	): IUiSituation

	toForm(
		uiSituation: IUiSituation
	): IFormSituation

}

export class SituationFormManager
	implements ISituationFormManager {

	fromForm(
		formSituation: IFormSituation,
		uiSituation: IUiSituation,
	): IUiSituation {
		if (!uiSituation) {
			uiSituation = {
				...this.getBlankUiNamedRecord(),
				category: this.getBlankUiNamedRecord(),
				factors: {
					1: this.getBlankUiFactor('x'),
					2: this.getBlankUiFactor('y'),
					3: this.getBlankUiFactor('z'),
				},
				outcomes: {
					A: this.getBlankUiNamedRecord(),
					B: this.getBlankUiNamedRecord()
				},
				parent: null
			}
		}

		uiSituation.name = formSituation.name
		this.transferFactorWithPositions(formSituation.factors[1], uiSituation.factors[1])
		this.transferFactorWithPositions(formSituation.factors[2], uiSituation.factors[2])
		this.transferFactorWithPositions(formSituation.factors[3], uiSituation.factors[3])

		this.transferNameAndId(formSituation.category, uiSituation.category)
		this.transferNameAndId(formSituation.outcomes.A, uiSituation.outcomes.A)
		this.transferNameAndId(formSituation.outcomes.B, uiSituation.outcomes.B)

		return uiSituation
	}

	private transferFactorWithPositions(
		formFactor: IFormFactor,
		uiFactor: IUiFactor
	) {
		this.transferNameAndId(formFactor.name, uiFactor)
		uiFactor.color = {
			blue: parseInt(formFactor.color.blue),
			green: parseInt(formFactor.color.green),
			red: parseInt(formFactor.color.red),
		}

		const uiPositionA = uiFactor.positions.A
		this.transferNameAndId(formFactor.positions.A, uiPositionA)
		const uiPositionB = uiFactor.positions.B
		this.transferNameAndId(formFactor.positions.B, uiPositionB)
	}

	private transferNameAndId(
		formField: IFormField,
		uiNamedRecord: IUiNamedRecord,
	) {
		this.transferId(formField, uiNamedRecord)
		uiNamedRecord.name = formField.text
	}

	private transferId(
		formField: IFormField,
		uiRepositoryRecord: IUiRepositoryRecord,
	) {
		if (!formField.id) {
			uiRepositoryRecord.actorId = null
			uiRepositoryRecord.actorRecordId = null
			uiRepositoryRecord.ageSuitability = null
			uiRepositoryRecord.repositoryId = null
			// uiRepositoryRecord.repositoryUuId = 'unsolved'
		} else {
			uiRepositoryRecord.actorId = formField.id.actorId
			uiRepositoryRecord.actorRecordId = formField.id.actorRecordId
			uiRepositoryRecord.ageSuitability = formField.id.ageSuitability
			uiRepositoryRecord.repositoryId = formField.id.repositoryId
			// uiRepositoryRecord.repositoryUuId = formField.id.repositoryUuId
		}
	}

	private getBlankUiFactor(
		axis: 'x' | 'y' | 'z'
	): IUiFactor {
		return {
			...this.getBlankUiNamedRecord(),
			axis,
			color: {
				blue: 0,
				green: 0,
				red: 0
			},
			positions: {
				A: {
					...this.getBlankUiNamedRecord(),
					dir: 1,
				},
				B: {
					...this.getBlankUiNamedRecord(),
					dir: -1,
				}
			}
		}
	}

	private getBlankUiRepositoryRecord(): IUiRepositoryRecord {
		return {
			actorId: null,
			actorRecordId: null,
			ageSuitability: null,
			repositoryId: null,
			// repositoryUuId: '',
		}
	}

	private getBlankUiNamedRecord(): IUiNamedRecord {
		return {
			...this.getBlankUiRepositoryRecord(),
			name: null
		}
	}

	toForm(
		uiSituation: IUiSituation
	): IFormSituation {
		const category = this.getFormField(uiSituation.category)

		const uiOutcomeA = uiSituation.outcomes.A
		const uiOutcomeB = uiSituation.outcomes.B

		return {
			category,
			factors: {
				1: this.uiToFormFactor(uiSituation.factors[1]),
				2: this.uiToFormFactor(uiSituation.factors[2]),
				3: this.uiToFormFactor(uiSituation.factors[3])
			},
			name: uiSituation.name,
			outcomes: {
				A: this.getFormField(uiOutcomeA),
				B: this.getFormField(uiOutcomeB),
			},
		}
	}

	private getFormField(
		uiRepositoryRecord: IUiNamedRecord
	) {
		return {
			id: this.copyId(uiRepositoryRecord),
			text: uiRepositoryRecord.name
		}
	}

	private copyId(
		uiRepositoryRecord: IUiRepositoryRecord
	): IUiRepositoryRecord {
		return {
			actorId: uiRepositoryRecord.actorId,
			actorRecordId: uiRepositoryRecord.actorRecordId,
			ageSuitability: uiRepositoryRecord.ageSuitability,
			repositoryId: uiRepositoryRecord.repositoryId,
			// repositoryUuId: uiRepositoryRecord.repositoryUuId
		}
	}

	private uiToFormFactor(
		factorData: IUiFactor
	): IFormFactor {
		return {
			color: factorData.color as any as IFormColor,
			name: this.getFormField(factorData),
			positions: {
				A: this.getFormField(factorData.positions.A),
				B: this.getFormField(factorData.positions.B)
			}
		}
	}

}

DI.set(SITUATION_FORM_MANAGER, SituationFormManager)
