import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IPosition } from './position';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect extends AirEntityESelect, PositionEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionGraph extends PositionEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionECreateProperties extends Partial<PositionEId>, PositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionECreateColumns extends PositionEId, PositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPosition extends QAirEntity {
    name: IQStringField;
}
export interface QPositionQId extends QAirEntityQId {
}
export interface QPositionQRelation extends QAirEntityQRelation<IPosition, QPosition>, QPositionQId {
}
//# sourceMappingURL=qposition.d.ts.map