import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-control';
import { CountyGraph, CountyEOptionalId, CountyESelect, QCountyQRelation } from '../../../location/qcounty';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../qpollrun';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunCountyESelect extends IEntitySelectProperties, PollRunCountyEOptionalId {
    country?: CountyESelect;
    run?: PollRunESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunCountyEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunCountyEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunCountyEUpdateProperties extends IEntityUpdateProperties {
    country?: CountyEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunCountyGraph extends PollRunCountyEOptionalId, IEntityCascadeGraph {
    country?: CountyGraph;
    run?: PollRunGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunCountyEUpdateColumns extends IEntityUpdateColumns {
    COUNTY_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunCountyECreateProperties extends Partial<PollRunCountyEId>, PollRunCountyEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunCountyECreateColumns extends PollRunCountyEId, PollRunCountyEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunCounty extends IQEntity {
    id: IQNumberField;
    country: QCountyQRelation;
    run: QPollRunQRelation;
}
export interface QPollRunCountyQId {
    id: IQNumberField;
}
export interface QPollRunCountyQRelation extends IQRelation<QPollRunCounty>, QPollRunCountyQId {
}
//# sourceMappingURL=qpollruncounty.d.ts.map