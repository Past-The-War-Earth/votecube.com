import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPositionOpinionVersion } from '../positionopinionversion';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPositionOpinionVersionRating extends IImmutableActorRow {
    id: number;
    isCurrent?: boolean;
    positionOpinionVersion?: IPositionOpinionVersion;
    rating?: IRating;
    parent?: IPositionOpinionVersionRating;
    child?: IPositionOpinionVersionRating[];
}
