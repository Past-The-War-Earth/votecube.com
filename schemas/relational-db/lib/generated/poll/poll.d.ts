import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { ITheme } from './theme';
import { IPollType } from './polltype';
import { IPollRun } from './run/pollrun';
import { IPollRevision } from './revision/pollrevision';
export interface IPoll extends IImmutableActorRow {
    id?: number;
    ageSuitability?: number;
    theme?: ITheme;
    type?: IPollType;
    parent?: IPoll;
    children?: IPoll[];
    runs?: IPollRun[];
    revisions?: IPollRevision[];
}
