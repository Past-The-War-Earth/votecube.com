import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRun } from '../run/pollrun';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionTranslationRating extends IImmutableActorRow {
    id: number;
    value?: number;
    run?: IPollRun;
    rating?: IRating;
    parent?: IPollRevisionTranslationRating;
    child?: IPollRevisionTranslationRating[];
}
