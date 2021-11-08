import { DI } from '@airport/di'
import { DeepPartial } from '@airport/pressurization'
import {
	Category,
	Factor,
	Outcome,
	Position,
	Situation,
	SituationFactorPosition,
} from '@votecube/votecube'
import {
	IUiCategory,
	IUiFactor,
	IUiOutcome,
	IUiPosition,
	IUiRepositoryRecord,
	IUiSituation,
} from '@votecube/model'
import { SITUATION_CONVERTER } from '../tokens'
import { RepositoryRecordConverter } from './RepositoryRecordConverter'

export interface ISituationConverter {

	dbToUi(
		dbSituation: DeepPartial<Situation>
	): IUiSituation

	uiToDb(
		uiSituation: IUiSituation
	): DeepPartial<Situation>

}

export class SituationConverter
	extends RepositoryRecordConverter
	implements ISituationConverter {

	dbToUi(
		dbSituation: DeepPartial<Situation>
	): IUiSituation {
		let parent: IUiRepositoryRecord = null

		if (dbSituation.parent) {
			parent = super.dbToUi(dbSituation.parent)
		}

		return {
			...super.dbToUi(dbSituation.parent),
			category: this.getUiCategory(dbSituation.category),
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
			parent
		}
	}

	uiToDb(
		uiSituation: IUiSituation
	): DeepPartial<Situation> {
		const uiCategory = uiSituation.category
		const uiParent = uiSituation.parent

		const dbFactors: DeepPartial<Factor>[] = []

		return {
			...super.uiToDb(uiSituation),
			category: {
				...super.uiToDb(uiCategory),
			},
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

		}
	}

	private getUiFactor(
		factorNumber: 1 | 2 | 3,
		factorPositions: DeepPartial<SituationFactorPosition>[]
	): IUiFactor {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: DeepPartial<SituationFactorPosition>
		let dbFactorPositionB: DeepPartial<SituationFactorPosition>

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
		dbSituationFactorPosition: DeepPartial<SituationFactorPosition>
	): IUiPosition {
		const position = dbSituationFactorPosition.position

		return {
			...super.dbToUi(position),
			dir: dbSituationFactorPosition.dir as -1 | 1,
			name: position.name,
		}
	}

	private getUiOutcome(
		outcome: DeepPartial<Outcome>
	): IUiOutcome {
		return {
			...super.dbToUi(outcome),
			name: outcome.name,
		}
	}

	private getUiCategory(
		category: DeepPartial<Category>
	): IUiCategory {
		return {
			...super.dbToUi(category),
			name: category.name,
		}
	}

	private getDbOutcome(
		uiOutcome: IUiOutcome,
		ageSuitability: 0 | 7 | 13 | 18
	): DeepPartial<Outcome> {
		return {
			...super.uiToDb(uiOutcome, ageSuitability),
			name: uiOutcome.name,
		}
	}

	private getDbSituationFactorPosition(
		uiSituation: IUiSituation,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactors: DeepPartial<Factor>[]
	): DeepPartial<SituationFactorPosition> {
		const uiFactor = uiSituation.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		let factor: DeepPartial<Factor> = dbFactors[factorNumber]
		if (!factor) {
			factor = this.getDbFactor(uiFactor, uiSituation.ageSuitability)
			dbFactors[factorNumber] = factor
		}

		const position: DeepPartial<Position> = this.getDbPosition(uiPosition, uiSituation.ageSuitability)

		return {
			...super.dbToUi(uiSituation),
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
	): DeepPartial<Factor> {
		return {
			...super.uiToDb(uiFactor, ageSuitability),
			name: uiFactor.name,
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition,
		ageSuitability: 0 | 7 | 13 | 18
	): DeepPartial<Position> {
		return {
			...super.uiToDb(uiPosition, ageSuitability),
			name: uiPosition.name,
		}
	}

}

DI.set(SITUATION_CONVERTER, SituationConverter)
