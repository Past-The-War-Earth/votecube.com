import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-traffic-control';
import { StateGraph, StateEOptionalId, StateESelect, QStateQRelation } from '../../../location/qstate';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../qpollrun';
import { PollRunState } from '../../../../ddl/poll/run/location/PollRunState';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunStateESelect extends IEntitySelectProperties, PollRunStateEOptionalId {
    state?: StateESelect;
    run?: PollRunESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunStateEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunStateEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunStateEUpdateProperties extends IEntityUpdateProperties {
    state?: StateEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunStateGraph extends PollRunStateEOptionalId, IEntityCascadeGraph {
    state?: StateGraph;
    run?: PollRunGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunStateEUpdateColumns extends IEntityUpdateColumns {
    STATE_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunStateECreateProperties extends Partial<PollRunStateEId>, PollRunStateEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunStateECreateColumns extends PollRunStateEId, PollRunStateEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunState extends IQEntity<PollRunState> {
    id: IQNumberField;
    state: QStateQRelation;
    run: QPollRunQRelation;
}
export interface QPollRunStateQId {
    id: IQNumberField;
}
export interface QPollRunStateQRelation extends IQRelation<PollRunState, QPollRunState>, QPollRunStateQId {
}
//# sourceMappingURL=qpollrunstate.d.ts.map