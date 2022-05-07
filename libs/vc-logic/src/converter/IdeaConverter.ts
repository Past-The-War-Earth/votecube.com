import {
	IFactor,
	IOutcome,
	IPosition,
	IIdea,
	IReason,
	IIdeaLabel,
} from '@votecube/votecube-client'
import {
	IUiLabel,
	IUiFactor,
	IUiOutcome,
	IUiPosition,
	IUiIdea,
	AGE_GROUPS,
} from '@votecube/model'
import { RepositoryRecordConverter } from '@votecube/ui-logic'
import { Injected } from '@airport/direction-indicator'
import { IIdeaFormManager } from '../pages/idea/IdeaFormManager'

export interface IIdeaConverter {

	dbToUi(
		dbIdea: IIdea
	): IUiIdea

	uiToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea
	): IIdea

}

@Injected()
export class IdeaConverter
	extends RepositoryRecordConverter
	implements IIdeaConverter {

	ideaFormManager: IIdeaFormManager

	dbToUi(
		dbIdea: IIdea
	): IUiIdea {
		let ageGroups: IUiLabel[] = []
		let labels: IUiLabel[] = []
		if (dbIdea.ideaLabels) {
			ageGroups = dbIdea.ideaLabels.filter(ideaLabel =>
				AGE_GROUPS.includes(ideaLabel.label.name))
				.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))
			labels = dbIdea.ideaLabels.filter(ideaLabel =>
				!AGE_GROUPS.includes(ideaLabel.label.name))
				.map(ageGroupLabel => this.getUiLabel(ageGroupLabel))
		}

		return {
			...super.dbToUi(dbIdea),
			ageGroups,
			factors: {
				'1': this.getUiFactor(1, dbIdea.reasons),
				'2': this.getUiFactor(2, dbIdea.reasons),
				'3': this.getUiFactor(3, dbIdea.reasons)
			},
			labels,
			name: dbIdea.name,
			outcomes: {
				A: this.getUiOutcome(dbIdea.outcomeA),
				B: this.getUiOutcome(dbIdea.outcomeB)
			},
			repository: {
				source: dbIdea.repository.source,
				uuId: dbIdea.repository.uuId
			}
		}
	}

	uiToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea
	): IIdea {
		if (!dbIdea) {
			dbIdea = {} as any
		}

		super.uiToDb(uiIdea, dbIdea, uiIdea.ageSuitability)

		if (!dbIdea.outcomeA) {
			dbIdea.outcomeA = {} as any
		}
		this.outcomeToDb(uiIdea.outcomes.A,
			dbIdea.outcomeA, uiIdea.ageSuitability)
		if (!dbIdea.outcomeB) {
			dbIdea.outcomeB = {} as any
		}
		this.outcomeToDb(uiIdea.outcomes.B,
			dbIdea.outcomeB, uiIdea.ageSuitability)
		const factor1 = this.reasonToDb(
			uiIdea,
			dbIdea,
			1,
			'A',
		)
		this.reasonToDb(
			uiIdea,
			dbIdea,
			1,
			'B',
			factor1
		)
		const factor2 = this.reasonToDb(
			uiIdea,
			dbIdea,
			2,
			'A',
		)
		this.reasonToDb(
			uiIdea,
			dbIdea,
			2,
			'B',
			factor2
		)
		const factor3 = this.reasonToDb(
			uiIdea,
			dbIdea,
			3,
			'A',
		)
		this.reasonToDb(
			uiIdea,
			dbIdea,
			3,
			'B',
			factor3
		)

		dbIdea.name = uiIdea.name

		this.labelsToDb(uiIdea, dbIdea, uiIdea.ageGroups)
		this.labelsToDb(uiIdea, dbIdea, uiIdea.labels)

		return dbIdea
	}

	private getUiLabel(
		ideaLabel: IIdeaLabel
	): IUiLabel {
		if (!ideaLabel) {
			return {
				...this.ideaFormManager.getBlankUiNamedRecord(),
				originalDbLabel: ideaLabel
			}
		}
		const label = ideaLabel.label
		return {
			...super.dbToUi(label),
			name: label.name,
			originalDbLabel: ideaLabel
		}
	}

	private getUiFactor(
		factorNumber: 1 | 2 | 3,
		factorPositions: IReason[]
	): IUiFactor {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: IReason
		let dbFactorPositionB: IReason

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
		dbReason: IReason
	): IUiPosition {
		const position = dbReason.position

		return {
			...super.dbToUi(position),
			dir: dbReason.dir as -1 | 1,
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
		ideaLabels: IIdeaLabel[]
	): IUiLabel[] {
		if (!ideaLabels) {
			return []
		}
		return ideaLabels.map(ideaLabel =>
			this.getUiLabel(ideaLabel)
		)
	}

	private labelsToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea,
		uiLabels: IUiLabel[],
	): void {
		let dbLabels = dbIdea.ideaLabels
		if (!dbLabels) {
			dbLabels = []
			dbIdea.ideaLabels = dbLabels
		}

		for (const uiLabel of uiLabels) {
			const matchingDbLabels = dbLabels.filter(dbLabel => dbLabel.label.name === uiLabel.name)
			let dbLabel: IIdeaLabel
			if (matchingDbLabels.length) {
				dbLabel = matchingDbLabels[0]
			} else {
				dbLabel = {
					label: uiLabel.originalDbLabel
				} as any
			}
			super.uiToDb(uiLabel, dbLabel, uiIdea.ageSuitability)

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

	private reasonToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactor?: IFactor
	): IFactor {
		let existingFactor = !!dbFactor
		const uiFactor = uiIdea.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		if (!dbIdea.reasons) {
			dbIdea.reasons = []
		}

		const matchingReasons = dbIdea.
			reasons.filter(
				reason =>
					reason.factorNumber === factorNumber
					&& reason.outcomeOrdinal === outcomeOrdinal
			)
		let dbPosition: IPosition
		let dbReason: IReason
		if (matchingReasons.length) {
			dbReason = matchingReasons[0]
			dbFactor = dbReason.factor
			dbPosition = dbReason.position
		} else {
			dbReason = {} as any
			if (!existingFactor) {
				dbFactor = {} as any
			}
			dbPosition = {} as any
			dbReason.factor = dbFactor
			dbReason.position = dbPosition
			dbIdea.reasons
				.push(dbReason)
		}

		if (!existingFactor) {
			this.factorToDb(uiFactor, dbFactor, uiIdea.ageSuitability)
		}
		this.positionToDb(uiPosition, dbPosition, uiIdea.ageSuitability)

		super.uiToDb({} as any, dbReason, uiIdea.ageSuitability)

		dbReason.axis = uiFactor.axis
		dbReason.blue = uiFactor.color.blue
		dbReason.dir = uiPosition.dir
		dbReason.factorNumber = factorNumber
		dbReason.green = uiFactor.color.green
		dbReason.outcomeOrdinal = outcomeOrdinal
		dbReason.red = uiFactor.color.red

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
