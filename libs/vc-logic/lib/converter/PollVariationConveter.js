import { DI } from '@airport/di';
import { IChosenPollTranslation, IPoll, IPollFactorPositionVariation, IPollFactorSkinVariation, IPollFactorVariation, IPollLocationTimeFrame, IPollOpinion, IPollPositionVariation, IPollVariationLabel, IPollVariationOpinionCount, IPollVariationOpinionRatingCount, IPollVariationRatingCount, IPollVariationTranslation, IPollVariationVoteCount, IUserPollVariationRating } from '@votecube/relational-db/lib/src';
import { POLL_VARIATION_CONVERTER } from '../tokens';
export class PollVariationConverter {
    dbToUi(variationDb) {
    }
    uiToDb(variationDoc) {
        const uiPollVariation = {
            // Id Properties
            id: variationDoc
            // Id Relations
            // Non-Id Properties
            ,
            // Id Relations
            // Non-Id Properties
            backgroundColor: number,
            textColor: number,
            // Non-Id Relations
            poll: IPoll,
            createdAtLocationTimeFrame: IPollLocationTimeFrame,
            parent: IPollVariation,
            children: IPollVariation[],
            ratings: IUserPollVariationRating[],
            ratingCounts: IPollVariationRatingCount[],
            variationLabels: IPollVariationLabel[],
            pollFactorPositionVariations: IPollFactorPositionVariation[],
            factors: IPollFactorVariation[],
            factorSkins: IPollFactorSkinVariation[],
            positions: IPollPositionVariation[],
            chosenTranslations: IChosenPollTranslation[],
            allTranslations: IPollVariationTranslation[],
            opinions: IPollOpinion[],
            opinionCounts: IPollVariationOpinionCount[],
            opinionRatingCounts: IPollVariationOpinionRatingCount[],
            voteCounts: IPollVariationVoteCount[]
        };
    }
}
DI.set(POLL_VARIATION_CONVERTER, PollVariationConverter);
//# sourceMappingURL=PollVariationConveter.js.map