import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
import { IRatingType } from './ratingtype';
import { IRatingSetting } from './ratingsetting';
export interface IRating extends ISystemGeneratedRow {
    id: number;
    cssClass?: string;
    type?: IRatingType;
    settings?: IRatingSetting[];
}
//# sourceMappingURL=rating.d.ts.map