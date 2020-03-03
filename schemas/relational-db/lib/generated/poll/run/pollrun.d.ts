import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../revision/pollrevision';
import { IPollRunContinent } from './location/pollruncontinent';
import { IPollRunCountry } from './location/pollruncountry';
import { IPollRunState } from './location/pollrunstate';
import { IPollRunCounty } from './location/pollruncounty';
import { IPollRunTown } from './location/pollruntown';
export interface IPollRun extends IImmutableActorRow {
    id: number;
    endDate?: Date;
    startDate?: Date;
    pollRevision?: IPollRevision;
    createdAtRevisions?: IPollRevision[];
    pollContinents?: IPollRunContinent[];
    pollCountries?: IPollRunCountry[];
    pollStates?: IPollRunState[];
    pollCounties?: IPollRunCounty[];
    pollTowns?: IPollRunTown[];
}
