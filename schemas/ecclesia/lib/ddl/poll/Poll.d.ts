import { Poll_Id } from '../../types/poll/Poll';
import { AgeSuitableRow } from '../infrastructure/row/AgeSuitableRow';
import { PollType } from './PollType';
import { PollRevision } from './revision/PollRevision';
import { PollRun } from './run/PollRun';
import { Theme } from './Theme';
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