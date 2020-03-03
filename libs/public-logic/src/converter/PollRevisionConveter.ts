import {DI}                      from '@airport/di'
import {
	IsData,
	IUiFactor,
	IUiPollRevision,
	IUiPosition
}                                from '@votecube/model'
import {
	IFactor,
	IFactorPosition,
	IPoll,
	IPollRevision,
	IPollRevisionTranslation,
	IPosition
}                                from '@votecube/relational-db'
import {
	ILanguage,
	IPollRevisionFactorTranslation,
	IPollRevisionPositionTranslation,
	ITranslationType,
	IUserPollRevisionTranslationRating
} from '@votecube/relational-db/lib/src'
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

		const uiPollRevision: IPollRevision = {
			id: revisionDoc.id,
			// Non-Id Relations
			poll: poll,
			createdAtRun: null,
			parent: parentRevision,
			children: null,
			ratings: null,
			factorPositions: null,
			allTranslations: null,
			opinions: null,
		}

		const uiPollRevisionTranslation: IPollRevisionTranslation = {
			id: null,
			name: revisionDoc.name,
		description?: string;

		// Non-Id Relations
		pollRevision?: IPollRevision;
		language?: ILanguage;
		type?: ITranslationType;
		parent?: IPollRevisionTranslation;
		children?: IPollRevisionTranslation[];
		ratings?: IUserPollRevisionTranslationRating[];
		factorTranslations?: IPollRevisionFactorTranslation[];
		positionTranslations?: IPollRevisionPositionTranslation[];
		}

		return uiPollRevision
	}

	getDbFactor(
		uiFactor: IUiFactor<IsData>
	): IFactor {
		const factorPositions: IFactorPosition = []

		factorPositions.push(
			this.getDbPosition(uiFactor.positions.A)
		)
		factorPositions.push(
			this.getDbPosition(uiFactor.positions.B)
		)

		const dbFactor: IFactor = {
			id: uiFactor.id,
			factorPositions,
		}

		return dbFactor
	}

	getDbPosition(
		uiPosition: IUiPosition<IsData>,
	): IFactorPosition {
		const position: IPosition = {
			id: uiPosition.id,
			translations: [{
				// TODO: add language
				language: 'EN_US',
				description: uiPosition.name,
			}]
		}

		const factorPosition: IFactorPosition = {
			id: uiPosition.factorPositionId,
			position,
		}

		return factorPosition
	}

}

DI.set(POLL_REVISION_CONVERTER, PollRevisionConverter)
