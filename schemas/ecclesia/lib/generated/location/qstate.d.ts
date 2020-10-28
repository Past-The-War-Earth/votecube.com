import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { CountryGraph, CountryEOptionalId, CountryESelect, QCountryQRelation } from './qcountry';
import { StateTownGraph, StateTownESelect, QStateTownQRelation } from './qstatetown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface StateESelect extends SystemGeneratedRowESelect, StateEOptionalId {
    name?: string | IQStringField;
    country?: CountryESelect;
    stateTowns?: StateTownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface StateEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface StateEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface StateEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    country?: CountryEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface StateGraph extends StateEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    country?: CountryGraph;
    stateTowns?: StateTownGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface StateEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    STATE_NAME?: string | IQStringField;
    COUNTRY_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface StateECreateProperties extends Partial<StateEId>, StateEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface StateECreateColumns extends StateEId, StateEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QState extends QSystemGeneratedRow {
    id: IQNumberField;
    name: IQStringField;
    country: QCountryQRelation;
    stateTowns: QStateTownQRelation;
}
export interface QStateQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QStateQRelation extends QSystemGeneratedRowQRelation<QState>, QStateQId {
}
//# sourceMappingURL=qstate.d.ts.map