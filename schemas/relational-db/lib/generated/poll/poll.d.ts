import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { ITheme } from './theme';
import { IPollType } from './polltype';
import { IUserPollRating } from './user/userpollrating';
import { IPollRun } from './run/pollrun';
import { IPollRevision } from './revision/pollrevision';
export interface IPoll extends IImmutableActorRow {
    id?: number;
    ageSuitability?: number;
    theme?: ITheme;
    type?: IPollType;
    parent?: IPoll;
    children?: IPoll[];
    ratings?: IUserPollRating[];
    runs?: IPollRun[];
    revisions?: IPollRevision[];
}
