import {DI}                      from '@airport/di'
import {
	Factor_Number,
	IParent,
	IsData,
	IUiFactor,
	IUiOutcome,
	IUiPollRevision,
	IUiPosition,
	IUiTheme,
}                                from '@votecube/model'
import {
	Id,
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
	Outcome_Ordinal
} from '@votecube/relational-db'
import {POLL_REVISION_CONVERTER} from '../tokens'

export interface IPollRevisionConverter {

	dbToUi(
		RevisionDb: IPollRevision
	): IUiPollRevision

	uiToDb(
		RevisionDoc: IUiPollRevision
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
			createdAt: null, // TODO: wire
			depth: revisionDb.depth,
			id: revisionDb.id,
			factors: {
				'1': this.getUiFactor(1, revisionDb.factorPositions),
				'2': this.getUiFactor(1, revisionDb.factorPositions),
				'3': this.getUiFactor(1, revisionDb.factorPositions)
			},
			name: revisionDb.allTranslations[0].name,
			outcomes: {
				A: this.getUiOutcome(revisionDb.outcomeVersionA),
				B: this.getUiOutcome(revisionDb.outcomeVersionB)
			},
			parent,
			path: null, // TODO: wire
			pollId: revisionDb.poll.id,
			theme: this.getUiTheme(revisionDb.poll.theme),
			userId: null // TODO: wire
		}
	}

	getUiFactor(
		factorNumber: Factor_Number,
		factorPositions: IPollRevisionFactorPosition[]
	): IUiFactor<IsData> {
		// TODO: implement

		return null
	}

	getUiOutcome(
		outcome: IOutcome
	): IUiOutcome<IsData> {
		// TODO: implement

		return null
	}

	getUiTheme(
		theme: ITheme
	): IUiTheme<IsData> {
		// TODO: implement

		return null
	}

	uiToDb(
		revisionDoc: IUiPollRevision
	): IPollRevision {
		const poll: IPoll = {
			id: revisionDoc.pollId
		}

		const parentRevision: IPollRevision = {
			id: revisionDoc.parent.id
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
			outcomeVersionA: this.getDbOutcome(revisionDoc.outcomes.A, 'A'),
			outcomeVersionB: this.getDbOutcome(revisionDoc.outcomes.B, 'B'),
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

	getDbOutcome(
		uiOutcome: IUiOutcome<IsData>,
		key: 'A' | 'B'
	): IOutcome {
		if (uiOutcome.id) {
			return {
				id: uiOutcome.id
			}
		}

		return {
			id: null,
			key,
			name: uiOutcome.name
		}
	}

	getDbPollFactorPosition(
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

	getDbFactor(
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

	getDbPosition(
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
