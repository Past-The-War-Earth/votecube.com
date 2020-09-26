import { Poll_Id } from '../../types/poll/Poll';
import { AgeSuitableRow } from '../infrastructure/row/AgeSuitableRow';
import { PollRun } from './run/PollRun';
import { PollType } from './PollType';
import { Theme } from './Theme';
import { PollRevision } from './revision/PollRevision';
export declare class Poll extends AgeSuitableRow {
    id: Poll_Id;
    theme: Theme;
    type: PollType;
    parent: Poll;
    children: Poll[];
    runs: PollRun[];
    revisions: PollRevision[];
}
//# sourceMappingURL=Poll.d.ts.map