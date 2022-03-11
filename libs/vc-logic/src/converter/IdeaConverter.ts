import { container, DI } from '@airport/di'
import {
	IFactor,
	IOutcome,
	IPosition,
	IIdea,
	IIdeaFactorPosition,
	IIdeaLabel,
} from '@votecube/votecube'
import {
	IUiLabel,
	IUiFactor,
	IUiOutcome,
	IUiPosition,
	IUiIdea,
	AGE_GROUPS,
} from '@votecube/model'
import { RepositoryRecordConverter } from '@votecube/ui-logic'
import {
	IDEA_CONVERTER,
	IDEA_FORM_MANAGER
} from '../tokens'

export interface IIdeaConverter {

	dbToUi(
		dbIdea: IIdea
	): IUiIdea

	uiToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea
	): IIdea

}

export class IdeaConverter
	extends RepositoryRecordConverter
	implements IIdeaConverter {

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
				'1': this.getUiFactor(1, dbIdea.ideaFactorPositions),
				'2': this.getUiFactor(2, dbIdea.ideaFactorPositions),
				'3': this.getUiFactor(3, dbIdea.ideaFactorPositions)
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
		const factor1 = this.ideaFactorPositionToDb(
			uiIdea,
			dbIdea,
			1,
			'A',
		)
		this.ideaFactorPositionToDb(
			uiIdea,
			dbIdea,
			1,
			'B',
			factor1
		)
		const factor2 = this.ideaFactorPositionToDb(
			uiIdea,
			dbIdea,
			2,
			'A',
		)
		this.ideaFactorPositionToDb(
			uiIdea,
			dbIdea,
			2,
			'B',
			factor2
		)
		const factor3 = this.ideaFactorPositionToDb(
			uiIdea,
			dbIdea,
			3,
			'A',
		)
		this.ideaFactorPositionToDb(
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
			const ideaFormManager = container(this).getSync(IDEA_FORM_MANAGER)
			return {
				...ideaFormManager.getBlankUiNamedRecord(),
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
		factorPositions: IIdeaFactorPosition[]
	): IUiFactor {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: IIdeaFactorPosition
		let dbFactorPositionB: IIdeaFactorPosition

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
		dbIdeaFactorPosition: IIdeaFactorPosition
	): IUiPosition {
		const position = dbIdeaFactorPosition.position

		return {
			...super.dbToUi(position),
			dir: dbIdeaFactorPosition.dir as -1 | 1,
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

	private ideaFactorPositionToDb(
		uiIdea: IUiIdea,
		dbIdea: IIdea,
		factorNumber: 1 | 2 | 3,
		outcomeOrdinal: 'A' | 'B',
		dbFactor?: IFactor
	): IFactor {
		let existingFactor = !!dbFactor
		const uiFactor = uiIdea.factors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]

		if (!dbIdea.ideaFactorPositions) {
			dbIdea.ideaFactorPositions = []
		}

		const matchingIdeaFactorPositions = dbIdea.
			ideaFactorPositions.filter(
				ideaFactorPosition => 
					ideaFactorPosition.factorNumber === factorNumber
					&& ideaFactorPosition.outcomeOrdinal === outcomeOrdinal
				)
		let dbPosition: IPosition
		let dbIdeaFactorPosition: IIdeaFactorPosition
		if (matchingIdeaFactorPositions.length) {
			dbIdeaFactorPosition = matchingIdeaFactorPositions[0]
			dbFactor = dbIdeaFactorPosition.factor
			dbPosition = dbIdeaFactorPosition.position
		} else {
			dbIdeaFactorPosition = {} as any
			if (!existingFactor) {
				dbFactor = {} as any
			}
			dbPosition = {} as any
			dbIdeaFactorPosition.factor = dbFactor
			dbIdeaFactorPosition.position = dbPosition
			dbIdea.ideaFactorPositions
				.push(dbIdeaFactorPosition)
		}

		if (!existingFactor) {
			this.factorToDb(uiFactor, dbFactor, uiIdea.ageSuitability)
		}
		this.positionToDb(uiPosition, dbPosition, uiIdea.ageSuitability)

		super.uiToDb({} as any, dbIdeaFactorPosition, uiIdea.ageSuitability)

		dbIdeaFactorPosition.axis = uiFactor.axis
		dbIdeaFactorPosition.blue = uiFactor.color.blue
		dbIdeaFactorPosition.dir = uiPosition.dir
		dbIdeaFactorPosition.factorNumber = factorNumber
		dbIdeaFactorPosition.green = uiFactor.color.green
		dbIdeaFactorPosition.outcomeOrdinal = outcomeOrdinal
		dbIdeaFactorPosition.red = uiFactor.color.red

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

DI.set(IDEA_CONVERTER, IdeaConverter)
