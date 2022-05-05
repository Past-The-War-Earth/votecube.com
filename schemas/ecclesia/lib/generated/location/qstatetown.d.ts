import { IQDateField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { StateGraph, StateEId, StateEOptionalId, StateESelect, QStateQId, QStateQRelation } from './qstate';
import { TownGraph, TownEId, TownEOptionalId, TownESelect, QTownQId, QTownQRelation } from './qtown';
import { StateTown } from '../../ddl/location/StateTown';
/**
 * SELECT - All fields and relations (optional).
 */
export interface StateTownESelect extends SystemGeneratedRowESelect, StateTownEOptionalId {
    state?: StateESelect;
    town?: TownESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface StateTownEId extends SystemGeneratedRowEId {
    state: StateEId;
    town: TownEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface StateTownEOptionalId {
    state?: StateEOptionalId;
    town?: TownEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface StateTownEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface StateTownGraph extends StateTownEOptionalId, SystemGeneratedRowGraph {
    state?: StateGraph;
    town?: TownGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface StateTownEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface StateTownECreateProperties extends Partial<StateTownEId>, StateTownEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface StateTownECreateColumns extends StateTownEId, StateTownEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QStateTown extends QSystemGeneratedRow<StateTown> {
    state: QStateQRelation;
    town: QTownQRelation;
}
export interface QStateTownQId extends QSystemGeneratedRowQId {
    state: QStateQId;
    town: QTownQId;
}
export interface QStateTownQRelation extends QSystemGeneratedRowQRelation<StateTown, QStateTown>, QStateTownQId {
}
//# sourceMappingURL=qstatetown.d.ts.map