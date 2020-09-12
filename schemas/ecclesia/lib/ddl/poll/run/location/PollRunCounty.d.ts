import { PollRunCounty_Id } from '../../../../types/poll/run/location/PollRunCounty';
import { County } from '../../../location/County';
import { PollRun } from '../PollRun';
export declare class PollRunCounty {
    id: PollRunCounty_Id;
    country: County;
    run: PollRun;
}
