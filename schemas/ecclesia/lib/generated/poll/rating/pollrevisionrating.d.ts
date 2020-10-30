import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../revision/pollrevision';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionRating extends IImmutableActorRow {
    id: number;
    value?: number;
    pollRevision?: IPollRevision;
    rating?: IRating;
}
//# sourceMappingURL=pollrevisionrating.d.ts.map