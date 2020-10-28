import { IQDateField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { CountryGraph, CountryEId, CountryEOptionalId, CountryESelect, QCountryQId, QCountryQRelation } from './qcountry';
import { TownGraph, TownEId, TownEOptionalId, TownESelect, QTownQId, QTownQRelation } from './qtown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryTownESelect extends SystemGeneratedRowESelect, CountryTownEOptionalId {
    country?: CountryESelect;
    town?: TownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryTownEId extends SystemGeneratedRowEId {
    country: CountryEId;
    town: TownEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface CountryTownEOptionalId {
    country?: CountryEOptionalId;
    town?: TownEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryTownEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryTownGraph extends CountryTownEOptionalId, SystemGeneratedRowGraph {
    country?: CountryGraph;
    town?: TownGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryTownEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
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
    country: QCountryQRelation;
    town: QTownQRelation;
}
export interface QCountryTownQId extends QSystemGeneratedRowQId {
    country: QCountryQId;
    town: QTownQId;
}
export interface QCountryTownQRelation extends QSystemGeneratedRowQRelation<QCountryTown>, QCountryTownQId {
}
//# sourceMappingURL=qcountrytown.d.ts.map