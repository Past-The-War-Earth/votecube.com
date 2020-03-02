import {DI}                       from '@airport/di'
import {IUiPollVariation}         from '@votecube/model'
import {
	IChosenPollTranslation,
	IPoll,
	IPollFactorPositionVariation,
	IPollFactorSkinVariation,
	IPollFactorVariation,
	IPollLocationTimeFrame,
	IPollOpinion,
	IPollPositionVariation,
	IPollVariation,
	IPollVariationLabel,
	IPollVariationOpinionCount,
	IPollVariationOpinionRatingCount,
	IPollVariationRatingCount,
	IPollVariationTranslation,
	IPollVariationVoteCount,
	IUserPollVariationRating
}                                 from '@votecube/relational-db'
import {POLL_VARIATION_CONVERTER} from '../tokens'

export interface IPollVariationConverter {

	dbToUi(
		variationDb: IPollVariation
	): IUiPollVariation

	uiToDb(
		variationDoc: IUiPollVariation
	): IPollVariation

}

export class PollVariationConverter
	implements IPollVariationConverter {

	dbToUi(
		variationDb: IPollVariation
	): IUiPollVariation {

	}

	uiToDb(
		variationDoc: IUiPollVariation
	): IPollVariation {
		const uiPollVariation: IPollVariation = {
			id: variationDoc.id,
			// Non-Id Relations
			poll: IPoll,
		createdAtLocationTimeFrame: IPollLocationTimeFrame
		parent ? : IPollVariation
		children ? : IPollVariation[]
		ratings ? : IUserPollVariationRating[]
		ratingCounts ? : IPollVariationRatingCount[]
		variationLabels ? : IPollVariationLabel[]
		pollFactorPositionVariations ? : IPollFactorPositionVariation[]
		factors ? : IPollFactorVariation[]
		factorSkins ? : IPollFactorSkinVariation[]
		positions ? : IPollPositionVariation[]
		chosenTranslations ? : IChosenPollTranslation[]
		allTranslations ? : IPollVariationTranslation[]
		opinions ? : IPollOpinion[]
		opinionCounts ? : IPollVariationOpinionCount[]
		opinionRatingCounts ? : IPollVariationOpinionRatingCount[]
		voteCounts ? : IPollVariationVoteCount[]
	}

	}

}

DI.set(POLL_VARIATION_CONVERTER, PollVariationConverter)
