import { AgeSuitability } from '../../types/common';
import { Poll_Id } from '../../types/poll/Poll';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { PollRun } from './run/PollRun';
import { PollType } from './PollType';
import { Theme } from './Theme';
import { PollRevision } from './revision/PollRevision';
export declare class Poll extends ImmutableActorRow {
    id: Poll_Id;
    ageSuitability: AgeSuitability;
    theme: Theme;
    type: PollType;
    parent: Poll;
    children: Poll[];
    runs: PollRun[];
    revisions: PollRevision[];
}
