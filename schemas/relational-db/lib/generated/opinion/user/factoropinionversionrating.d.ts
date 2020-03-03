import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IFactorOpinionVersion } from '../factoropinionversion';
import { IRating } from '../../infrastructure/rating/rating';
export interface IFactorOpinionVersionRating extends IImmutableActorRow {
    id: number;
    isCurrent?: boolean;
    factorOpinionVersion?: IFactorOpinionVersion;
    rating?: IRating;
    parent?: IFactorOpinionVersionRating;
    child?: IFactorOpinionVersionRating[];
}
