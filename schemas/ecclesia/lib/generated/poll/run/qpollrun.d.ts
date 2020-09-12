import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevision, QPollRevisionQRelation } from '../revision/qpollrevision';
import { PollRunContinentGraph, PollRunContinentESelect, QPollRunContinent } from './location/qpollruncontinent';
import { PollRunCountryGraph, PollRunCountryESelect, QPollRunCountry } from './location/qpollruncountry';
import { PollRunStateGraph, PollRunStateESelect, QPollRunState } from './location/qpollrunstate';
import { PollRunCountyGraph, PollRunCountyESelect, QPollRunCounty } from './location/qpollruncounty';
import { PollRunTownGraph, PollRunTownESelect, QPollRunTown } from './location/qpollruntown';
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
export interface PollRunGraph extends ImmutableActorRowESelect, PollRunEOptionalId, ImmutableActorRowGraph {
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
    ACTOR_ID?: number | IQNumberField;
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
export interface QPollRun extends QImmutableActorRow {
    id: IQNumberField;
    endDate: IQDateField;
    startDate: IQDateField;
    pollRevision: QPollRevisionQRelation;
    createdAtRevisions: IQOneToManyRelation<QPollRevision>;
    pollContinents: IQOneToManyRelation<QPollRunContinent>;
    pollCountries: IQOneToManyRelation<QPollRunCountry>;
    pollStates: IQOneToManyRelation<QPollRunState>;
    pollCounties: IQOneToManyRelation<QPollRunCounty>;
    pollTowns: IQOneToManyRelation<QPollRunTown>;
}
export interface QPollRunQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRunQRelation extends QImmutableActorRowQRelation<QPollRun>, QPollRunQId {
}
