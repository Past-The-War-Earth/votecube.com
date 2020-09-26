import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRevisionOpinion } from '../pollrevisionopinion';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionOpinionRating extends IImmutableActorRow {
    id: number;
    pollRevisionOpinion?: IPollRevisionOpinion;
    rating?: IRating;
}
//# sourceMappingURL=pollrevisionopinionrating.d.ts.map