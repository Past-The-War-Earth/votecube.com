import { IQDateField, IQNumberField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { TownEId, TownEOptionalId, TownESelect, QTownQId, QTownQRelation } from './qtown';
import { CountryEOptionalId, CountryESelect, QCountryQRelation } from './qcountry';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryTownESelect extends SystemGeneratedRowESelect, CountryTownEOptionalId {
    town?: TownESelect;
    country?: CountryESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryTownEId extends SystemGeneratedRowEId {
    town: TownEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface CountryTownEOptionalId {
    town?: TownEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryTownEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    country?: CountryEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryTownECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryTownEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    COUNTRY_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountryTownECreateProperties extends Partial<CountryTownEId>, CountryTownEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountryTownECreateColumns extends CountryTownEId, CountryTownEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountryTown extends QSystemGeneratedRow {
    town: QTownQRelation;
    country: QCountryQRelation;
}
export interface QCountryTownQId extends QSystemGeneratedRowQId {
    town: QTownQId;
}
export interface QCountryTownQRelation extends QSystemGeneratedRowQRelation<QCountryTown>, QCountryTownQId {
}
