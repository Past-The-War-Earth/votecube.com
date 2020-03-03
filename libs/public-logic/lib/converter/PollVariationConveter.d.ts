import { IUiPollVariation } from '@votecube/model';
import { IPollVariation } from '@votecube/relational-db';
export interface IPollVariationConverter {
    dbToUi(variationDb: IPollVariation): IUiPollVariation;
    uiToDb(variationDoc: IUiPollVariation): IPollVariation;
}
export declare class PollVariationConverter implements IPollVariationConverter {
    dbToUi(variationDb: IPollVariation): IUiPollVariation;
    uiToDb(variationDoc: IUiPollVariation): IPollVariation;
}
