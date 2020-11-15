import {DI}                      from '@airport/di'
import {
	IFactor,
	IFactorPosition,
	IFactorTranslation,
	IOutcome,
	IPoll,
	IPollRevision,
	IPollRevisionFactorPosition,
	IPollRevisionTranslation,
	IPosition,
	ITheme,
}                                from '@votecube/ecclesia/lib/generated/interfaces'
import {
	Id,
	Outcome_Ordinal
}                                from '@votecube/ecclesia/lib/types/types'
import {
	Factor_Number,
	IParent,
	IsData,
	IUiFactor,
	IUiOutcome,
	IUiPollRevision,
	IUiPosition,
	IUiTheme,
	Position_Dir,
}                                from '@votecube/model'
import {POLL_REVISION_CONVERTER} from '../tokens'

export interface IPollRevisionConverter {

	dbToUi(
		revisionDb: IPollRevision
	): IUiPollRevision

	uiToDb(
		revisionDoc: IUiPollRevision
	): IPollRevision

}

export class PollRevisionConverter
	implements IPollRevisionConverter {

	dbToUi(
		revisionDb: IPollRevision
	): IUiPollRevision {
		let parent: IParent<Id> = null

		if (revisionDb.parent) {
			parent = {
				id: revisionDb.parent.id
			}
		}

		return {
			ageSuitability: revisionDb.ageSuitability,
			createdAt: revisionDb.createdAt,
			depth: revisionDb.depth,
			id: revisionDb.id,
			factors: {
				'1': this.getUiFactor(1, revisionDb.factorPositions),
				'2': this.getUiFactor(2, revisionDb.factorPositions),
				'3': this.getUiFactor(3, revisionDb.factorPositions)
			},
			name: revisionDb.allTranslations[0].name,
			outcomes: {
				A: this.getUiOutcome(revisionDb.outcomeVersionA),
				B: this.getUiOutcome(revisionDb.outcomeVersionB)
			},
			parent,
			pollId: revisionDb.poll.id,
			theme: this.getUiTheme(revisionDb.poll.theme),
			userId: revisionDb.userAccount.id
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

		const parentRevision: IPollRevision = {
			id: revisionDoc.parent ? revisionDoc.parent.id : null
		}

		const uiPollRevisionTranslation: IPollRevisionTranslation = {
			id: null,
			name: revisionDoc.name,
		}

		const uiPollRevision: IPollRevision = {
			// Non-Id Relations
			ageSuitability: revisionDoc.ageSuitability,
			id: revisionDoc.id,
			parent: parentRevision,
			outcomeVersionA: this.getDbOutcome(revisionDoc.outcomes.A),
			outcomeVersionB: this.getDbOutcome(revisionDoc.outcomes.B),
			poll,
			factorPositions: [this.getDbPollFactorPosition(
				revisionDoc.factors[1],
				1,
				'A'
			), this.getDbPollFactorPosition(
				revisionDoc.factors[1],
				1,
				'B'
			), this.getDbPollFactorPosition(
				revisionDoc.factors[2],
				2,
				'A'
			), this.getDbPollFactorPosition(
				revisionDoc.factors[2],
				2,
				'B'
			), this.getDbPollFactorPosition(
				revisionDoc.factors[3],
				3,
				'A'
			), this.getDbPollFactorPosition(
				revisionDoc.factors[3],
				3,
				'B'
			)],
			allTranslations: [uiPollRevisionTranslation]
		}

		return uiPollRevision
	}

	private getUiFactor(
		factorNumber: Factor_Number,
		factorPositions: IPollRevisionFactorPosition[]
	): IUiFactor<IsData> {
		const matchingFactorPositions = factorPositions.filter(factorPosition =>
			factorPosition.factorNumber === factorNumber)

		let dbFactorPositionA: IPollRevisionFactorPosition
		let dbFactorPositionB: IPollRevisionFactorPosition

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
			name: dbFactor.parentTranslation.name,
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
		uiOutcome: IUiOutcome<IsData>
	): IOutcome {
		if (uiOutcome.id) {
			return {
				id: uiOutcome.id
			}
		}

		return {
			ageSuitability: uiOutcome.ageSuitability,
			id: null,
			parentTranslation: {
				id: null,
				name: uiOutcome.name
			}
		}
	}

	private getDbPollFactorPosition(
		uiFactor: IUiFactor<IsData>,
		factorNumber: Factor_Number,
		outcomeOrdinal: Outcome_Ordinal
	): IPollRevisionFactorPosition {
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

		let factor: IFactor = null
		if (outcomeOrdinal == 'A') {
			factor = this.getDbFactor(uiFactor)
		}

		const position: IPosition = this.getDbPosition(uiPosition)

		let factorPosition: IFactorPosition = {
			factor,
			position,
		}

		return {
			id: null,
			axis: uiFactor.axis,
			dir: uiPosition.dir,
			factorNumber,
			factorPosition,
			outcomeOrdinal,
			parent: factorPositionParent,
		}
	}

	private getDbFactor(
		uiFactor: IUiFactor<IsData>
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
			id: null,
			parent: parentFactor,
			parentTranslation
		}
	}

	private getDbPosition(
		uiPosition: IUiPosition<IsData>,
	): IPosition {
		if (uiPosition.id) {
			return {
				id: uiPosition.id
			}
		}
		return {
			id: null,
			translations: [{
				id: null,
				name: uiPosition.name,
			}]
		}
	}

}

DI.set(POLL_REVISION_CONVERTER, PollRevisionConverter)
