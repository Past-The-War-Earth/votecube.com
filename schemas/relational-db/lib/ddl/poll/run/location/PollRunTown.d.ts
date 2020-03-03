import { PollRunTown_Id } from '../../../../types/poll/run/location/PollRunTown';
import { Town } from '../../../location/Town';
import { PollRun } from '../PollRun';
export declare class PollRunTown {
    id: PollRunTown_Id;
    town: Town;
    run: PollRun;
}
