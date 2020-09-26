import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { CountyGraph, CountyEOptionalId, CountyESelect, QCountyQRelation } from './qcounty';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TownESelect extends SystemGeneratedRowESelect, TownEOptionalId {
    name?: string | IQStringField;
    county?: CountyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TownEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface TownEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TownEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    county?: CountyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TownGraph extends SystemGeneratedRowESelect, TownEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    county?: CountyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TownEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    TOWN_NAME?: string | IQStringField;
    COUNTY_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TownECreateProperties extends Partial<TownEId>, TownEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TownECreateColumns extends TownEId, TownEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTown extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    county: QCountyQRelation;
}
export interface QTownQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QTownQRelation extends QSystemGeneratedRowQRelation<QTown>, QTownQId {
}
//# sourceMappingURL=qtown.d.ts.map