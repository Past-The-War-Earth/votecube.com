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
import { RepositoryRecordConverter } from './RepositoryRecordConverter'

export interface ISituationConverter {

	dbToUi(
		dbSituation: ISituation
	): IUiSituation

	uiToDb(
		uiSituation: IUiSituation,
		dbSituation: ISituation
	): ISituation

}

export class SituationConverter
	extends RepositoryRecordConverter
	implements ISituationConverter {

	dbToUi(
		dbSituation: ISituation
	): IUiSituation {
		let ageGroups: IUiLabel[] = []
		let labels: IUiLabel[] = []
		if (dbSituation.situationLabels) {
			ageGroups = dbSituation.situationLabels.filter(situationLabel =>
				AGE_GROUPS.includes(situationLabel.label.name))
				.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))
			labels = dbSituation.situationLabels.filter(situationLabel =>
				!AGE_GROUPS.includes(situationLabel.label.name))
				.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))
		}

		return {
			...super.dbToUi(dbSituation),
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
			repository: {
				source: dbSituation.repository.source,
				uuId: dbSituation.repository.uuId
			}
		}
	}

	uiToDb(
		uiSituation: IUiSituation,
		dbSituation: ISituation
	): ISituation {
		if (!dbSituation) {
			dbSituation = {} as any
		}

		super.uiToDb(uiSituation, dbSituation, uiSituation.ageSuitability)

		if (!dbSituation.outcomeA) {
			dbSituation.outcomeA = {} as any
		}
		this.outcomeToDb(uiSituation.outcomes.A,
			dbSituation.outcomeA, uiSituation.ageSuitability)
		if (!dbSituation.outcomeB) {
			dbSituation.outcomeB = {} as any
		}
		this.outcomeToDb(uiSituation.outcomes.B,
			dbSituation.outcomeB, uiSituation.ageSuitability)
		const factor1 = this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			1,
			'A',
		)
		this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			1,
			'B',
			factor1
		)
		const factor2 = this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			2,
			'A',
		)
		this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			2,
			'B',
			factor2
		)
		const factor3 = this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			3,
			'A',
		)
		this.situationFactorPositionToDb(
			uiSituation,
			dbSituation,
			3,
			'B',
			factor3
		)

		dbSituation.name = uiSituation.name

		this.labelsToDb(uiSituation, dbSituation, uiSituation.ageGroups)
		this.labelsToDb(uiSituation, dbSituation, uiSituation.labels)

		return dbSituation
	}

	private getUiLabel(
		situationLabel: ISituationLabel
	): IUiLabel {
		if (!situationLabel) {
			const situationFormManager = container(this).getSync(SITUATION_FORM_MANAGER)
			return {
				...situationFormManager.getBlankUiNamedRecord(),
				originalDbLabel: situationLabel
			}
		}
		const label = situationLabel.label
		return {
			...super.dbToUi(label),
			name: label.name,
			originalDbLabel: situationLabel
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

	private labelsToDb(
		uiSituation: IUiSituation,
		dbSituation: ISituation,
		uiLabels: IUiLabel[],
	): void {
		let dbLabels = dbSituation.situationLabels
		if (!dbLabels) {
			dbLabels = []
			dbSituation.situationLabels = dbLabels
		}

		for (const uiLabel of uiLabels) {
			const matchingDbLabels = dbLabels.filter(dbLabel => dbLabel.label.name === uiLabel.name)
			let dbLabel: ISituationLabel
			if (matchingDbLabels.length) {
				dbLabel = matchingDbLabels[0]
			} else {
				dbLabel = {
					label: uiLabel.originalDbLabel
				} as any
			}
			super.uiToDb(uiLabel, dbLabel, uiSituation.ageSuitability)

			dbLabel.label = uiLabel.originalDbLabel
			dbLabels.push(dbLabel)
		}
	}

	private outcomeToDb(
		uiOutcome: IUiOutcome,
		outcome: IOutcome,
		ageSuitability: 0 | 7 | 13 | 18
	): void {
		super.uiToDb(uiOutcome, outcome, ageSuitability)
		outcome.name = uiOutcome.name
	}

	private situationFactorPositionToDb(
		uiSituation: IUiSituation,
		dbSituation: ISituation,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactor?: IFactor
	): IFactor {
		let existingFactor = !!dbFactor
		const uiFactor = uiSituation.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		if (!dbSituation.situationFactorPositions) {
			dbSituation.situationFactorPositions = []
		}

		const matchingSituationFactorPositions = dbSituation.
			situationFactorPositions.filter(
				situationFactorPosition => 
					situationFactorPosition.factorNumber === factorNumber
					&& situationFactorPosition.outcomeOrdinal === outcomeOrdinal
				)
		let dbPosition: IPosition
		let dbSituationFactorPosition: ISituationFactorPosition
		if (matchingSituationFactorPositions.length) {
			dbSituationFactorPosition = matchingSituationFactorPositions[0]
			dbFactor = dbSituationFactorPosition.factor
			dbPosition = dbSituationFactorPosition.position
		} else {
			dbSituationFactorPosition = {} as any
			if (!existingFactor) {
				dbFactor = {} as any
			}
			dbPosition = {} as any
			dbSituationFactorPosition.factor = dbFactor
			dbSituationFactorPosition.position = dbPosition
			dbSituation.situationFactorPositions
				.push(dbSituationFactorPosition)
		}

		if (!existingFactor) {
			this.factorToDb(uiFactor, dbFactor, uiSituation.ageSuitability)
		}
		this.positionToDb(uiPosition, dbPosition, uiSituation.ageSuitability)

		super.uiToDb({} as any, dbSituationFactorPosition, uiSituation.ageSuitability)

		dbSituationFactorPosition.axis = uiFactor.axis
		dbSituationFactorPosition.blue = uiFactor.color.blue
		dbSituationFactorPosition.dir = uiPosition.dir
		dbSituationFactorPosition.factorNumber = factorNumber
		dbSituationFactorPosition.green = uiFactor.color.green
		dbSituationFactorPosition.outcomeOrdinal = outcomeOrdinal
		dbSituationFactorPosition.red = uiFactor.color.red

		return dbFactor
	}

	private factorToDb(
		uiFactor: IUiFactor,
		dbFactor: IFactor,
		ageSuitability: 0 | 7 | 13 | 18
	): void {
		super.uiToDb(uiFactor, dbFactor, ageSuitability)
		dbFactor.name = uiFactor.name
	}

	private positionToDb(
		uiPosition: IUiPosition,
		dbPosition: IPosition,
		ageSuitability: 0 | 7 | 13 | 18
	): void {
		super.uiToDb(uiPosition, dbPosition, ageSuitability)
		dbPosition.name = uiPosition.name
	}

}

DI.set(SITUATION_CONVERTER, SituationConverter)
