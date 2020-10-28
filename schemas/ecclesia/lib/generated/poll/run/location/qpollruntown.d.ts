import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-control';
import { TownGraph, TownEOptionalId, TownESelect, QTownQRelation } from '../../../location/qtown';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../qpollrun';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunTownESelect extends IEntitySelectProperties, PollRunTownEOptionalId {
    town?: TownESelect;
    run?: PollRunESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunTownEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunTownEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunTownEUpdateProperties extends IEntityUpdateProperties {
    town?: TownEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunTownGraph extends PollRunTownEOptionalId, IEntityCascadeGraph {
    town?: TownGraph;
    run?: PollRunGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunTownEUpdateColumns extends IEntityUpdateColumns {
    TOWN_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunTownECreateProperties extends Partial<PollRunTownEId>, PollRunTownEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunTownECreateColumns extends PollRunTownEId, PollRunTownEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunTown extends IQEntity {
    id: IQNumberField;
    town: QTownQRelation;
    run: QPollRunQRelation;
}
export interface QPollRunTownQId {
    id: IQNumberField;
}
export interface QPollRunTownQRelation extends IQRelation<QPollRunTown>, QPollRunTownQId {
}
//# sourceMappingURL=qpollruntown.d.ts.map