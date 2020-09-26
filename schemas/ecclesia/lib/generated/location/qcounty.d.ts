import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { StateGraph, StateEOptionalId, StateESelect, QStateQRelation } from './qstate';
import { CountyTownGraph, CountyTownESelect, QCountyTownQRelation } from './qcountytown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CountyESelect extends SystemGeneratedRowESelect, CountyEOptionalId {
    name?: string | IQStringField;
    state?: StateESelect;
    countyTowns?: CountyTownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountyEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface CountyEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountyEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    state?: StateEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountyGraph extends SystemGeneratedRowESelect, CountyEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    state?: StateGraph;
    countyTowns?: CountyTownGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CountyEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    COUNTY_NAME?: string | IQStringField;
    STATE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountyECreateProperties extends Partial<CountyEId>, CountyEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountyECreateColumns extends CountyEId, CountyEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCounty extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    state: QStateQRelation;
    countyTowns: QCountyTownQRelation;
}
export interface QCountyQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QCountyQRelation extends QSystemGeneratedRowQRelation<QCounty>, QCountyQId {
}
//# sourceMappingURL=qcounty.d.ts.map