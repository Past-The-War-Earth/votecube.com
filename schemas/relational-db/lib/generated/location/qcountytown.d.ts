import { IQDateField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { CountyEId, CountyEOptionalId, CountyESelect, QCountyQId, QCountyQRelation } from './qcounty';
import { TownEId, TownEOptionalId, TownESelect, QTownQId, QTownQRelation } from './qtown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CountyTownESelect extends SystemGeneratedRowESelect, CountyTownEOptionalId {
    county?: CountyESelect;
    town?: TownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountyTownEId extends SystemGeneratedRowEId {
    county: CountyEId;
    town: TownEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface CountyTownEOptionalId {
    county?: CountyEOptionalId;
    town?: TownEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountyTownEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountyTownECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CountyTownEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountyTownECreateProperties extends Partial<CountyTownEId>, CountyTownEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountyTownECreateColumns extends CountyTownEId, CountyTownEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountyTown extends QSystemGeneratedRow {
    county: QCountyQRelation;
    town: QTownQRelation;
}
export interface QCountyTownQId extends QSystemGeneratedRowQId {
    county: QCountyQId;
    town: QTownQId;
}
export interface QCountyTownQRelation extends QSystemGeneratedRowQRelation<QCountyTown>, QCountyTownQId {
}
