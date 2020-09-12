import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-control';
import { CountryGraph, CountryEOptionalId, CountryESelect, QCountryQRelation } from '../../../location/qcountry';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../qpollrun';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunCountryESelect extends IEntitySelectProperties, PollRunCountryEOptionalId {
    country?: CountryESelect;
    run?: PollRunESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunCountryEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunCountryEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunCountryEUpdateProperties extends IEntityUpdateProperties {
    country?: CountryEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunCountryGraph extends IEntitySelectProperties, PollRunCountryEOptionalId, IEntityCascadeGraph {
    country?: CountryGraph;
    run?: PollRunGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunCountryEUpdateColumns extends IEntityUpdateColumns {
    COUNTRY_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunCountryECreateProperties extends Partial<PollRunCountryEId>, PollRunCountryEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunCountryECreateColumns extends PollRunCountryEId, PollRunCountryEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunCountry extends IQEntity {
    id: IQNumberField;
    country: QCountryQRelation;
    run: QPollRunQRelation;
}
export interface QPollRunCountryQId {
    id: IQNumberField;
}
export interface QPollRunCountryQRelation extends IQRelation<QPollRunCountry>, QPollRunCountryQId {
}
