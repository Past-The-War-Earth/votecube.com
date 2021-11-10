import { DI } from '@airport/di'
import {
	ILabel,
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
} from '@votecube/model'
import { SITUATION_CONVERTER } from '../tokens'
import { RepositoryRecordConverter } from './RepositoryRecordConverter'
import { Label } from '@votecube/votecube/lib/server'

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

		return {
			...super.dbToUi(dbSituation.parent),
			factors: {
				'1': this.getUiFactor(1, dbSituation.situationFactorPositions),
				'2': this.getUiFactor(2, dbSituation.situationFactorPositions),
				'3': this.getUiFactor(3, dbSituation.situationFactorPositions)
			},
			name: dbSituation.name,
			outcomes: {
				A: this.getUiOutcome(dbSituation.outcomeA),
				B: this.getUiOutcome(dbSituation.outcomeB)
			},
			parent,
			labels: this.getUiLabels(dbSituation.situationLabels),
		}
	}

	uiToDb(
		uiSituation: IUiSituation
	): ISituation {
		const uiParent = uiSituation.parent

		const dbFactors: IFactor[] = []

		return {
			...super.uiToDb(uiSituation),
			name: uiSituation.name,
			outcomeA: this.getDbOutcome(uiSituation.outcomes.A, uiSituation.ageSuitability),
			outcomeB: this.getDbOutcome(uiSituation.outcomes.B, uiSituation.ageSuitability),
			parent: {
				...super.uiToDb(uiParent),
			},
			situationFactorPositions: [this.getDbSituationFactorPosition(
				uiSituation,
				1,
				'A',
				dbFactors
			), this.getDbSituationFactorPosition(
				uiSituation,
				1,
				'B',
				dbFactors
			), this.getDbSituationFactorPosition(
				uiSituation,
				2,
				'A',
				dbFactors
			), this.getDbSituationFactorPosition(
				uiSituation,
				2,
				'B',
				dbFactors
			), this.getDbSituationFactorPosition(
				uiSituation,
				3,
				'A',
				dbFactors
			), this.getDbSituationFactorPosition(
				uiSituation,
				3,
				'B',
				dbFactors
			)],
			situationLabels: this.getDbLabels(uiSituation, uiSituation.labels),
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
		return situationLabels.map(situationLabel => {
			const label = situationLabel.label
			return {
				...super.dbToUi(label),
				name: Label.name,
				situationLabel: super.dbToUi(situationLabel)
			}
		})
	}

	private getDbLabels(
		uiSituation: IUiSituation,
		uiLabels: IUiLabel[]
	): ISituationLabel[] {
		if (!uiLabels) {
			return []
		}
		return uiLabels.map(uiLabel => {
			return {
				...super.uiToDb(uiLabel),
				label: {
					...super.uiToDb(uiLabel),
				},
				situation: {
					...super.uiToDb(uiLabel.situationLabel),
				}

			}
		})

	}

	private getDbOutcome(
		uiOutcome: IUiOutcome,
		ageSuitability: 0 | 7 | 13 | 18
	): IOutcome {
		return {
			...super.uiToDb(uiOutcome, ageSuitability),
			name: uiOutcome.name,
		}
	}

	private getDbSituationFactorPosition(
		uiSituation: IUiSituation,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactors: IFactor[]
	): ISituationFactorPosition {
		const uiFactor = uiSituation.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		let factor: IFactor = dbFactors[factorNumber]
		if (!factor) {
			factor = this.getDbFactor(uiFactor, uiSituation.ageSuitability)
			dbFactors[factorNumber] = factor
		}

		const position: IPosition = this.getDbPosition(uiPosition, uiSituation.ageSuitability)

		return {
			...super.uiToDb(uiSituation, uiSituation.ageSuitability),
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
		ageSuitability: 0 | 7 | 13 | 18
	): IFactor {
		return {
			...super.uiToDb(uiFactor, ageSuitability),
			name: uiFactor.name,
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition,
		ageSuitability: 0 | 7 | 13 | 18
	): IPosition {
		return {
			...super.uiToDb(uiPosition, ageSuitability),
			name: uiPosition.name,
		}
	}

}

DI.set(SITUATION_CONVERTER, SituationConverter)
