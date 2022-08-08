import { IIdeaDao } from "../dao/IdeaDao";
import { IIdeaRatingDao } from "../dao/IdeaRatingDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { IdeaRating } from "../ddl/ddl";
import { IdeaRatingDvo } from "../dvo/IdeaRatingDvo";
export declare class IdeaRatingApi {
    ideaDao: IIdeaDao;
    ideaRatingDao: IIdeaRatingDao;
    ideaRatingDvo: IdeaRatingDvo;
    situationIdeaDao: ISituationIdeaDao;
    setIdeaRating(inIdeaRating: IdeaRating): Promise<void>;
    doSetIdeaRating(ideaRating: IdeaRating, isNewIdea: boolean, isNewSituationIdea: boolean): Promise<void>;
    private getUrgencyRatingDeltas;
    private updateUrgencyTotals;
}
//# sourceMappingURL=IdeaRatingApi.d.ts.map