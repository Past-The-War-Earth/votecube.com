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

export interface ISituationConverter {

	dbToUi(
		dbSituation: DeepPartial<Situation>
	): IUiSituation

	uiToDb(
		uiSituation: IUiSituation
	): DeepPartial<Situation>

}

export class SituationConverter
	implements ISituationConverter {

	dbToUi(
		dbSituation: DeepPartial<Situation>
	): IUiSituation {
		let parent: IUiRepositoryRecord = null

		if (dbSituation.parent) {
			parent = {
				actorId: dbSituation.parent.actor.id,
				actorRecordId: dbSituation.parent.actorRecordId,
				ageSuitability: dbSituation.parent.ageSuitability as 0 | 7 | 13 | 18,
				repositoryId: dbSituation.parent.repository.id,
			}
		}

		return {
			ageSuitability: dbSituation.ageSuitability as 0 | 7 | 13 | 18,
			actorId: dbSituation.actor.id,
			actorRecordId: dbSituation.actorRecordId,
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
			parent,
			repositoryId: dbSituation.repository.id,
		}
	}

	uiToDb(
		uiSituation: IUiSituation
	): DeepPartial<Situation> {
		const uiCategory = uiSituation.category
		const uiParent = uiSituation.parent

		const dbFactors: DeepPartial<Factor>[] = []

		return {
			actor: {
				id: uiSituation.actorId
			},
			actorRecordId: uiSituation.actorRecordId,
			ageSuitability: uiSituation.ageSuitability,
			category: {
				actor: {
					id: uiCategory.actorId,
				},
				actorRecordId: uiCategory.actorRecordId,
				ageSuitability: uiCategory.ageSuitability,
				repository: {
					id: uiCategory.repositoryId
				}
			},
			name: uiSituation.name,
			outcomeA: this.getDbOutcome(uiSituation.outcomes.A, uiSituation.ageSuitability),
			outcomeB: this.getDbOutcome(uiSituation.outcomes.B, uiSituation.ageSuitability),
			parent: {
				actor: {
					id: uiParent.actorId
				},
				actorRecordId: uiParent.actorRecordId,
				repository: {
					id: uiParent.repositoryId
				}
			},
			repository: {
				id: uiSituation.repositoryId
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
			actorId: dbFactor.actor.id,
			actorRecordId: dbFactor.actorRecordId,
			ageSuitability: dbFactor.ageSuitability as 0 | 7 | 13 | 18,
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
			repositoryId: dbFactor.repository.id,
		}
	}

	private getUiPosition(
		dbSituationFactorPosition: DeepPartial<SituationFactorPosition>
	): IUiPosition {
		const position = dbSituationFactorPosition.position

		return {
			actorId: position.actor.id,
			actorRecordId: position.actorRecordId,
			ageSuitability: position.ageSuitability as 0 | 7 | 13 | 18,
			dir: dbSituationFactorPosition.dir as -1 | 1,
			name: position.name,
			repositoryId: position.repository.id,
		}
	}

	private getUiOutcome(
		outcome: DeepPartial<Outcome>
	): IUiOutcome {
		return {
			ageSuitability: outcome.ageSuitability as 0 | 7 | 13 | 18,
			actorId: outcome.actor.id,
			actorRecordId: outcome.actorRecordId,
			name: outcome.name,
			repositoryId: outcome.repository.id,
		}
	}

	private getUiCategory(
		category: DeepPartial<Category>
	): IUiCategory {
		return {
			actorId: category.actor.id,
			actorRecordId: category.actorRecordId,
			ageSuitability: category.ageSuitability as 0 | 7 | 13 | 18,
			name: category.name,
			repositoryId: category.repository.id
		}
	}

	private getDbOutcome(
		uiOutcome: IUiOutcome,
		ageSuitability: 0 | 7 | 13 | 18
	): DeepPartial<Outcome> {
		if (uiOutcome.ageSuitability || uiOutcome.ageSuitability === 0) {
			ageSuitability = uiOutcome.ageSuitability
		}
		return {
			actor: {
				id: uiOutcome.actorId
			},
			actorRecordId: uiOutcome.actorRecordId,
			ageSuitability: ageSuitability,
			name: uiOutcome.name,
			repository: {
				id: uiOutcome.repositoryId
			}
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
			actor: {
				id: uiSituation.actorId,
			},
			actorRecordId: null,
			axis: uiFactor.axis,
			blue: uiFactor.color.blue,
			dir: uiPosition.dir,
			factorNumber,
			factor,
			green: uiFactor.color.green,
			outcomeOrdinal,
			position,
			red: uiFactor.color.red,
			repository: {
				id: uiSituation.repositoryId
			}
		}
	}

	private getDbFactor(
		uiFactor: IUiFactor,
		ageSuitability: 0 | 7 | 13 | 18
	): DeepPartial<Factor> {
		if (uiFactor.ageSuitability || uiFactor.ageSuitability === 0) {
			ageSuitability = uiFactor.ageSuitability
		}

		return {
			actorRecordId: uiFactor.actorRecordId,
			actor: {
				id: uiFactor.actorId
			},
			ageSuitability,
			name: uiFactor.name,
			repository: {
				id: uiFactor.repositoryId
			}
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition,
		ageSuitability: 0 | 7 | 13 | 18
	): DeepPartial<Position> {
		if (uiPosition.ageSuitability || uiPosition.ageSuitability === 0) {
			ageSuitability = uiPosition.ageSuitability
		}
		return {
			actorRecordId: uiPosition.actorRecordId,
			actor: {
				id: uiPosition.actorId
			},
			ageSuitability,
			name: uiPosition.name,
			repository: {
				id: uiPosition.repositoryId
			}
		}
	}

}

DI.set(SITUATION_CONVERTER, SituationConverter)
