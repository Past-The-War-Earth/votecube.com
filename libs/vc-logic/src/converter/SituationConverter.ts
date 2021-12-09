import { container, DI } from '@airport/di'
import {
	IFactor,
	IOutcome,
	IPosition,
	ISituation,
	ISituationFactorPosition,
	ISituationLabel,
} from '@votecube/votecube'
import {
	IUiLabel,
	IUiFactor,
	IUiOutcome,
	IUiPosition,
	IUiRepositoryRecord,
	IUiSituation,
	AGE_GROUPS,
} from '@votecube/model'
import {
	SITUATION_CONVERTER,
	SITUATION_FORM_MANAGER
} from '../tokens'
import { getToDbConversionContext, IToDbConversionContext, RepositoryRecordConverter } from './RepositoryRecordConverter'

export interface ISituationConverter {

	dbToUi(
		dbSituation: ISituation
	): IUiSituation

	uiToDb(
		uiSituation: IUiSituation
	): ISituation

}

export class SituationConverter
	extends RepositoryRecordConverter
	implements ISituationConverter {

	dbToUi(
		dbSituation: ISituation
	): IUiSituation {
		let parent: IUiRepositoryRecord = null

		if (dbSituation.parent) {
			parent = super.dbToUi(dbSituation.parent)
		}

		const ageGroups = dbSituation.situationLabels.filter(situationLabel =>
			AGE_GROUPS.includes(situationLabel.label.name))
			.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))
		const labels = dbSituation.situationLabels.filter(situationLabel =>
			!AGE_GROUPS.includes(situationLabel.label.name))
			.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))

		return {
			...super.dbToUi(dbSituation.parent),
			ageGroups,
			factors: {
				'1': this.getUiFactor(1, dbSituation.situationFactorPositions),
				'2': this.getUiFactor(2, dbSituation.situationFactorPositions),
				'3': this.getUiFactor(3, dbSituation.situationFactorPositions)
			},
			labels,
			name: dbSituation.name,
			outcomes: {
				A: this.getUiOutcome(dbSituation.outcomeA),
				B: this.getUiOutcome(dbSituation.outcomeB)
			},
			parent,
			repository: {
				source: dbSituation.repository.source,
				uuId: dbSituation.repository.uuId
			}
		}
	}

	uiToDb(
		uiSituation: IUiSituation
	): ISituation {
		const context = getToDbConversionContext()
		const uiParent = uiSituation.parent

		const dbFactors: IFactor[] = []

		return {
			...super.uiToDb(uiSituation, context),
			name: uiSituation.name,
			outcomeA: this.getDbOutcome(
				uiSituation.outcomes.A, context, uiSituation.ageSuitability),
			outcomeB: this.getDbOutcome(
				uiSituation.outcomes.B, context, uiSituation.ageSuitability),
			parent: uiParent ? {
				...super.uiToDb(uiParent, context),
			} : null,
			situationFactorPositions: [this.getDbSituationFactorPosition(
				uiSituation,
				1,
				'A',
				dbFactors,
				context
			), this.getDbSituationFactorPosition(
				uiSituation,
				1,
				'B',
				dbFactors,
				context
			), this.getDbSituationFactorPosition(
				uiSituation,
				2,
				'A',
				dbFactors,
				context
			), this.getDbSituationFactorPosition(
				uiSituation,
				2,
				'B',
				dbFactors,
				context
			), this.getDbSituationFactorPosition(
				uiSituation,
				3,
				'A',
				dbFactors,
				context
			), this.getDbSituationFactorPosition(
				uiSituation,
				3,
				'B',
				dbFactors,
				context
			)],
			situationLabels: this.getDbLabels(
				uiSituation, uiSituation.ageGroups.concat(uiSituation.labels), context),
		}
	}

	private getUiLabel(
		situationLabel: ISituationLabel
	) {
		if (!situationLabel) {
			const situationFormManager = container(this).getSync(SITUATION_FORM_MANAGER)
			return {
				...situationFormManager.getBlankUiNamedRecord(),
				situationLabel: situationFormManager.getBlankUiRepositoryRecord()
			}
		}
		const label = situationLabel.label
		return {
			...super.dbToUi(label),
			name: label.name,
			situationLabel: super.dbToUi(situationLabel)
		}
	}

	private getUiFactor(
		factorNumber: 1 | 2 | 3,
		factorPositions: ISituationFactorPosition[]
	): IUiFactor {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: ISituationFactorPosition
		let dbFactorPositionB: ISituationFactorPosition

		if (matchingFactorPositions[0].outcomeOrdinal === 'A') {
			dbFactorPositionA = matchingFactorPositions[0]
			dbFactorPositionB = matchingFactorPositions[1]
		} else {
			dbFactorPositionA = matchingFactorPositions[1]
			dbFactorPositionB = matchingFactorPositions[0]
		}

		const dbFactor = dbFactorPositionA.factor

		return {
			...super.dbToUi(dbFactor),
			axis: dbFactorPositionA.axis as 'x' | 'y' | 'z',
			color: {
				blue: dbFactorPositionA.blue,
				green: dbFactorPositionA.green,
				red: dbFactorPositionA.red,
			},
			name: dbFactor.name,
			positions: {
				A: this.getUiPosition(dbFactorPositionA),
				B: this.getUiPosition(dbFactorPositionB),
			},
		}
	}

	private getUiPosition(
		dbSituationFactorPosition: ISituationFactorPosition
	): IUiPosition {
		const position = dbSituationFactorPosition.position

		return {
			...super.dbToUi(position),
			dir: dbSituationFactorPosition.dir as -1 | 1,
			name: position.name,
		}
	}

	private getUiOutcome(
		outcome: IOutcome
	): IUiOutcome {
		return {
			...super.dbToUi(outcome),
			name: outcome.name,
		}
	}

	private getUiLabels(
		situationLabels: ISituationLabel[]
	): IUiLabel[] {
		if (!situationLabels) {
			return []
		}
		return situationLabels.map(situationLabel =>
			this.getUiLabel(situationLabel)
		)
	}

	private getDbLabels(
		uiSituation: IUiSituation,
		uiLabels: IUiLabel[],
		context: IToDbConversionContext,
	): ISituationLabel[] {
		if (!uiLabels) {
			return []
		}
		return uiLabels.map(uiLabel => {
			return {
				...super.uiToDb(uiLabel.situationLabel, context, uiSituation.ageSuitability),
				label: {
					...super.uiToDb(uiLabel, context, uiSituation.ageSuitability),
					name: uiLabel.name
				},
				situation: {
					...super.uiToDb(uiSituation, context),
				}

			}
		})

	}

	private getDbOutcome(
		uiOutcome: IUiOutcome,
		context: IToDbConversionContext,
		ageSuitability: 0 | 7 | 13 | 18
	): IOutcome {
		return {
			...super.uiToDb(uiOutcome, context, ageSuitability),
			name: uiOutcome.name,
		}
	}

	private getDbSituationFactorPosition(
		uiSituation: IUiSituation,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactors: IFactor[],
		context: IToDbConversionContext,
	): ISituationFactorPosition {
		const uiFactor = uiSituation.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		let factor: IFactor = dbFactors[factorNumber]
		if (!factor) {
			factor = this.getDbFactor(uiFactor, context, uiSituation.ageSuitability)
			dbFactors[factorNumber] = factor
		}

		const position: IPosition = this.getDbPosition(
			uiPosition, context, uiSituation.ageSuitability)

		return {
			...super.uiToDb(uiSituation, context, uiSituation.ageSuitability),
			axis: uiFactor.axis,
			blue: uiFactor.color.blue,
			dir: uiPosition.dir,
			factorNumber,
			factor,
			green: uiFactor.color.green,
			outcomeOrdinal,
			position,
			red: uiFactor.color.red,
		}
	}

	private getDbFactor(
		uiFactor: IUiFactor,
		context: IToDbConversionContext,
		ageSuitability: 0 | 7 | 13 | 18
	): IFactor {
		return {
			...super.uiToDb(uiFactor, context, ageSuitability),
			name: uiFactor.name,
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition,
		context: IToDbConversionContext,
		ageSuitability: 0 | 7 | 13 | 18
	): IPosition {
		return {
			...super.uiToDb(uiPosition, context, ageSuitability),
			name: uiPosition.name,
		}
	}

}

DI.set(SITUATION_CONVERTER, SituationConverter)
