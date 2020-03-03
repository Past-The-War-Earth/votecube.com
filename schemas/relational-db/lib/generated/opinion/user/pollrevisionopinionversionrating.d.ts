import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRevisionOpinionVersion } from '../pollrevisionopinionversion';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionOpinionVersionRating extends IImmutableActorRow {
    id: number;
    isCurrent?: boolean;
    pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
    rating?: IRating;
    parent?: IPollRevisionOpinionVersionRating;
    child?: IPollRevisionOpinionVersionRating[];
}
