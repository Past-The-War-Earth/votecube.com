import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { CountryGraph, CountryESelect, QCountry } from './qcountry';
import { Country } from '../../ddl/location/Country';
import { Continent } from '../../ddl/location/Continent';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ContinentESelect extends SystemGeneratedRowESelect, ContinentEOptionalId {
    name?: string | IQStringField;
    countries?: CountryESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ContinentEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface ContinentEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ContinentEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ContinentGraph extends ContinentEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    countries?: CountryGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ContinentEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    CONTINENT_NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ContinentECreateProperties extends Partial<ContinentEId>, ContinentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ContinentECreateColumns extends ContinentEId, ContinentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QContinent extends QSystemGeneratedRow<Continent> {
    id: IQNumberField;
    name: IQStringField;
    countries: IQOneToManyRelation<Country, QCountry>;
}
export interface QContinentQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QContinentQRelation extends QSystemGeneratedRowQRelation<Continent, QContinent>, QContinentQId {
}
//# sourceMappingURL=qcontinent.d.ts.map