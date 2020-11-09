import { IAgeSuitableRow } from '../infrastructure/row/agesuitablerow';
import { ITheme } from './theme';
import { IPollType } from './polltype';
import { IPollRun } from './run/pollrun';
import { IPollRevision } from './revision/pollrevision';
export interface IPoll extends IAgeSuitableRow {
    id: number;
    theme?: ITheme;
    type?: IPollType;
    parent?: IPoll;
    children?: IPoll[];
    runs?: IPollRun[];
    revisions?: IPollRevision[];
}
//# sourceMappingURL=poll.d.ts.map