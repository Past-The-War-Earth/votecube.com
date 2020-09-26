import { PollRun_EndDate, PollRun_Id, PollRun_StartDate } from '../../../types/poll/run/PollRun';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevision } from '../revision/PollRevision';
import { PollRunContinent } from './location/PollRunContinent';
import { PollRunCountry } from './location/PollRunCountry';
import { PollRunCounty } from './location/PollRunCounty';
import { PollRunState } from './location/PollRunState';
import { PollRunTown } from './location/PollRunTown';
export declare class PollRun extends ImmutableActorRow {
    id: PollRun_Id;
    endDate: PollRun_EndDate;
    startDate: PollRun_StartDate;
    pollRevision: PollRevision;
    createdAtRevisions: PollRevision[];
    pollContinents: PollRunContinent[];
    pollCountries: PollRunCountry[];
    pollStates: PollRunState[];
    pollCounties: PollRunCounty[];
    pollTowns: PollRunTown[];
}
//# sourceMappingURL=PollRun.d.ts.map