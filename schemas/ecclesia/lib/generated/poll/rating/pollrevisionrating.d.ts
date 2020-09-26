import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IPollRevision } from '../revision/pollrevision';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionRating extends IMutableActorRow {
    id: number;
    value?: number;
    pollRevision?: IPollRevision;
    rating?: IRating;
}
//# sourceMappingURL=pollrevisionrating.d.ts.map