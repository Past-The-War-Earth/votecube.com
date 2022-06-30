import { IIdeaDao } from "../dao/IdeaDao";
import { IIdeaRatingDao } from "../dao/IdeaRatingDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { IdeaRating } from "../ddl/ddl";
export declare class IdeaRatingApi {
    ideaDao: IIdeaDao;
    ideaRatingDao: IIdeaRatingDao;
    situationIdeaDao: ISituationIdeaDao;
    setIdeaRating(inIdeaRating: IdeaRating): Promise<void>;
    private validateIdeas;
    private getUrgencyRatingDeltas;
    private updateUrgencyTotals;
}
//# sourceMappingURL=IdeaRatingApi.d.ts.map