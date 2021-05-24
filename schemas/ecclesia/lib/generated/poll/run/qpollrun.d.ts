import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevision, QPollRevisionQRelation } from '../revision/qpollrevision';
import { PollRevision } from '../../../ddl/poll/revision/PollRevision';
import { PollRunContinentGraph, PollRunContinentESelect, QPollRunContinent } from './location/qpollruncontinent';
import { PollRunContinent } from '../../../ddl/poll/run/location/PollRunContinent';
import { PollRunCountryGraph, PollRunCountryESelect, QPollRunCountry } from './location/qpollruncountry';
import { PollRunCountry } from '../../../ddl/poll/run/location/PollRunCountry';
import { PollRunStateGraph, PollRunStateESelect, QPollRunState } from './location/qpollrunstate';
import { PollRunState } from '../../../ddl/poll/run/location/PollRunState';
import { PollRunCountyGraph, PollRunCountyESelect, QPollRunCounty } from './location/qpollruncounty';
import { PollRunCounty } from '../../../ddl/poll/run/location/PollRunCounty';
import { PollRunTownGraph, PollRunTownESelect, QPollRunTown } from './location/qpollruntown';
import { PollRunTown } from '../../../ddl/poll/run/location/PollRunTown';
import { PollRun } from '../../../ddl/poll/run/PollRun';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunESelect extends ImmutableActorRowESelect, PollRunEOptionalId {
    endDate?: Date | IQDateField;
    startDate?: Date | IQDateField;
    pollRevision?: PollRevisionESelect;
    createdAtRevisions?: PollRevisionESelect;
    pollContinents?: PollRunContinentESelect;
    pollCountries?: PollRunCountryESelect;
    pollStates?: PollRunStateESelect;
    pollCounties?: PollRunCountyESelect;
    pollTowns?: PollRunTownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    endDate?: Date | IQDateField;
    startDate?: Date | IQDateField;
    pollRevision?: PollRevisionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunGraph extends PollRunEOptionalId, ImmutableActorRowGraph {
    endDate?: Date | IQDateField;
    startDate?: Date | IQDateField;
    pollRevision?: PollRevisionGraph;
    createdAtRevisions?: PollRevisionGraph[];
    pollContinents?: PollRunContinentGraph[];
    pollCountries?: PollRunCountryGraph[];
    pollStates?: PollRunStateGraph[];
    pollCounties?: PollRunCountyGraph[];
    pollTowns?: PollRunTownGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    END_DATE?: Date | IQDateField;
    START_DATE?: Date | IQDateField;
    POLL_REVISION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunECreateProperties extends Partial<PollRunEId>, PollRunEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunECreateColumns extends PollRunEId, PollRunEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRun extends QImmutableActorRow<PollRun> {
    id: IQNumberField;
    endDate: IQDateField;
    startDate: IQDateField;
    pollRevision: QPollRevisionQRelation;
    createdAtRevisions: IQOneToManyRelation<PollRevision, QPollRevision>;
    pollContinents: IQOneToManyRelation<PollRunContinent, QPollRunContinent>;
    pollCountries: IQOneToManyRelation<PollRunCountry, QPollRunCountry>;
    pollStates: IQOneToManyRelation<PollRunState, QPollRunState>;
    pollCounties: IQOneToManyRelation<PollRunCounty, QPollRunCounty>;
    pollTowns: IQOneToManyRelation<PollRunTown, QPollRunTown>;
}
export interface QPollRunQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRunQRelation extends QImmutableActorRowQRelation<PollRun, QPollRun>, QPollRunQId {
}
//# sourceMappingURL=qpollrun.d.ts.map