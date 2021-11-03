import { DI } from '@airport/di'
import { Situation, SituationFactorPosition } from '@votecube/votecube'
import {
	Factor_Number,
	IsData,
	IUiFactor,
	IUiOutcome,
	IUiPollRevision,
	IUiPosition,
	IUiRepositoryRecord,
	IUiTheme,
	Position_Dir,
} from '@votecube/model'
import { POLL_REVISION_CONVERTER } from '../tokens'

export interface IPollRevisionConverter {

	dbToUi(
		dbSituation: Situation
	): IUiPollRevision

	uiToDb(
		docSituation: IUiPollRevision
	): Situation

}

export class PollRevisionConverter
	implements IPollRevisionConverter {

	dbToUi(
		dbSituation: Situation
	): IUiPollRevision {
		let parent: IUiRepositoryRecord = null

		if (dbSituation.parent) {
			parent = {
				actorId: dbSituation.parent.actor.id,
				actorRecordId: dbSituation.parent.actorRecordId,
				repositoryId: dbSituation.parent.repository.id,
			}
		}

		return {
			ageSuitability: dbSituation.ageSuitability,
			actorId: dbSituation.actor.id,
			actorRecordId: dbSituation.actorRecordId,
			repositoryId: dbSituation.repository.id,
			factors: {
				'1': this.getUiFactor(1, dbSituation.situationFactorPositions),
				'2': this.getUiFactor(2, dbSituation.situationFactorPositions),
				'3': this.getUiFactor(3, dbSituation.situationFactorPositions)
			},
			name: dbSituation.allTranslations[0].name,
			outcomes: {
				A: this.getUiOutcome(dbSituation.outcomeVersionA),
				B: this.getUiOutcome(dbSituation.outcomeVersionB)
			},
			parent,
			pollId: dbSituation.poll.id,
			theme: this.getUiTheme(dbSituation.poll.theme),
			userId: dbSituation.userAccount.id
		}
	}

	uiToDb(
		revisionDoc: IUiPollRevision
	): IPollRevision {
		const poll: IPoll = {
			ageSuitability: revisionDoc.ageSuitability,
			id: revisionDoc.pollId,
			type: {
				id: 1
			},
			theme: {
				id: revisionDoc.theme.id
			}
		}

		let parentRevision: IPollRevision = null

		if (revisionDoc.parent) {
			parentRevision = {
				id: revisionDoc.parent.id
			}
		}

		const uiPollRevisionTranslation: IPollRevisionTranslation = {
			id: null,
			name: revisionDoc.name,
		}

		const dbFactors: IFactor[] = []

		const uiPollRevision: IPollRevision = {
			// Non-Id Relations
			ageSuitability: revisionDoc.ageSuitability,
			id: revisionDoc.id,
			parent: parentRevision,
			outcomeVersionA: this.getDbOutcome(revisionDoc.outcomes.A, revisionDoc.ageSuitability),
			outcomeVersionB: this.getDbOutcome(revisionDoc.outcomes.B, revisionDoc.ageSuitability),
			poll,
			factorPositions: [this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				1,
				'A',
				revisionDoc.ageSuitability
			), this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				1,
				'B',
				revisionDoc.ageSuitability
			), this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				2,
				'A',
				revisionDoc.ageSuitability
			), this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				2,
				'B',
				revisionDoc.ageSuitability
			), this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				3,
				'A',
				revisionDoc.ageSuitability
			), this.getDbPollFactorPosition(
				revisionDoc.factors,
				dbFactors,
				3,
				'B',
				revisionDoc.ageSuitability
			)],
			allTranslations: [uiPollRevisionTranslation]
		}

		return uiPollRevision
	}

	private getUiFactor(
		factorNumber: Factor_Number,
		factorPositions: SituationFactorPosition[]
	): IUiFactor<IsData> {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: SituationFactorPosition
		let dbFactorPositionB: SituationFactorPosition

		if (matchingFactorPositions[0].outcomeOrdinal === 'A') {
			dbFactorPositionA = matchingFactorPositions[0]
			dbFactorPositionB = matchingFactorPositions[1]
		} else {
			dbFactorPositionA = matchingFactorPositions[1]
			dbFactorPositionB = matchingFactorPositions[0]
		}

		const dbFactor = dbFactorPositionA.factorPosition.factor

		return {
			ageSuitability: dbFactor.ageSuitability,
			axis: dbFactorPositionA.axis as 'x' | 'y' | 'z',
			color: {
				blue: dbFactorPositionA.blue,
				green: dbFactorPositionA.green,
				red: dbFactorPositionA.red,
			},
			createdAt: dbFactor.createdAt,
			id: dbFactor.id,
			name: dbFactor.name,
			parentId: dbFactor.parent ? dbFactor.parent.id : null,
			positions: {
				A: this.getUiPosition(dbFactorPositionA),
				B: this.getUiPosition(dbFactorPositionB),
			},
			translationId: dbFactor.parentTranslation.id,
			userId: dbFactor.userAccount.id,
		}
	}

	private getUiPosition(
		prFactorPosition: IPollRevisionFactorPosition
	): IUiPosition<IsData> {
		const position = prFactorPosition.factorPosition.position

		return {
			ageSuitability: position.ageSuitability,
			createdAt: position.createdAt,
			dir: prFactorPosition.dir as Position_Dir,
			id: position.id,
			name: position.parentTranslation.name,
			pollFactorPositionId: prFactorPosition.id,
			pollFactorPositionParentId: prFactorPosition.parent ? prFactorPosition.parent.id : null,
			positionParentId: position.parent ? position.parent.id : null,
			userId: position.userAccount.id,
		}
	}

	private getUiOutcome(
		outcome: IOutcome
	): IUiOutcome<IsData> {
		return {
			ageSuitability: outcome.ageSuitability,
			createdAt: outcome.createdAt,
			id: outcome.id,
			name: outcome.parentTranslation.name,
			userId: outcome.userAccount.id,
		}
	}

	private getUiTheme(
		theme: ITheme
	): IUiTheme<IsData> {
		// TODO: implement

		return {
			id: theme.id,
			ageSuitability: theme.ageSuitability,
			name: theme.name,
		}
	}

	private getDbOutcome(
		uiOutcome: IUiOutcome<IsData>,
		ageSuitability: AgeSuitability
	): IOutcome {
		if (uiOutcome.id) {
			return {
				id: uiOutcome.id
			}
		}

		return {
			ageSuitability,
			id: null,
			parentTranslation: {
				id: null,
				name: uiOutcome.name
			}
		}
	}

	private getDbPollFactorPosition(
		uiFactors: {
			1: IUiFactor<IsData>,
			2: IUiFactor<IsData>,
			3: IUiFactor<IsData>,
		},
		dbFactors: IFactor[],
		factorNumber: Factor_Number,
		outcomeOrdinal: Outcome_Ordinal,
		ageSuitability: AgeSuitability
	): IPollRevisionFactorPosition {
		const uiFactor = uiFactors[factorNumber]
		const uiPosition = uiFactor.positions[outcomeOrdinal]
		if (uiPosition.pollFactorPositionId) {
			return {
				id: uiPosition.pollFactorPositionId
			}
		}

		let factorPositionParent: IPollRevisionFactorPosition = null

		if (uiPosition.pollFactorPositionParentId) {
			factorPositionParent = {
				id: uiPosition.pollFactorPositionParentId
			}
		}

		let factor: IFactor = dbFactors[factorNumber]
		if (!factor) {
			factor = this.getDbFactor(uiFactor, factorNumber, ageSuitability)
			dbFactors[factorNumber] = factor
		}

		const position: IPosition = this.getDbPosition(uiPosition, ageSuitability)

		let factorPosition: IFactorPosition = {
			factor,
			position,
		}

		return {
			id: null,
			axis: uiFactor.axis,
			blue: uiFactor.color.blue,
			dir: uiPosition.dir,
			factorNumber,
			factorPosition,
			green: uiFactor.color.green,
			outcomeOrdinal,
			parent: factorPositionParent,
			red: uiFactor.color.red
		}
	}

	private getDbFactor(
		uiFactor: IUiFactor<IsData>,
		factorNumber: Factor_Number,
		ageSuitability: AgeSuitability
	): IFactor {
		if (uiFactor.id) {
			return {
				id: uiFactor.id
			}
		}

		let parentFactor: IFactor = null

		if (uiFactor.parentId != null) {
			parentFactor = {
				id: uiFactor.parentId
			}
		}

		let parentTranslation: IFactorTranslation = {
			id: null,
			name: uiFactor.name,
		}

		return {
			ageSuitability,
			id: null,
			parent: parentFactor,
			parentTranslation
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition<IsData>,
		ageSuitability: AgeSuitability
	): IPosition {
		if (uiPosition.id) {
			return {
				id: uiPosition.id
			}
		}
		return {
			ageSuitability,
			id: null,
			translations: [{
				id: null,
				name: uiPosition.name,
			}]
		}
	}

}

DI.set(POLL_REVISION_CONVERTER, PollRevisionConverter)
