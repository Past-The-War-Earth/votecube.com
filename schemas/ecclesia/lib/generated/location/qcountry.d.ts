import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { ContinentGraph, ContinentEOptionalId, ContinentESelect, QContinentQRelation } from './qcontinent';
import { StateGraph, StateESelect, QState } from './qstate';
import { CountryTownGraph, CountryTownESelect, QCountryTownQRelation } from './qcountrytown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CountryESelect extends SystemGeneratedRowESelect, CountryEOptionalId {
    name?: string | IQStringField;
    continent?: ContinentESelect;
    states?: StateESelect;
    countryTowns?: CountryTownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountryEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface CountryEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountryEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    continent?: ContinentEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountryGraph extends SystemGeneratedRowESelect, CountryEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    continent?: ContinentGraph;
    states?: StateGraph[];
    countryTowns?: CountryTownGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CountryEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    COUNTRY_NAME?: string | IQStringField;
    CONTINENT_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountryECreateProperties extends Partial<CountryEId>, CountryEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountryECreateColumns extends CountryEId, CountryEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountry extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    continent: QContinentQRelation;
    states: IQOneToManyRelation<QState>;
    countryTowns: QCountryTownQRelation;
}
export interface QCountryQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QCountryQRelation extends QSystemGeneratedRowQRelation<QCountry>, QCountryQId {
}
//# sourceMappingURL=qcountry.d.ts.map