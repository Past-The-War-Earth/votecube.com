import { IQDateField, IQNumberField } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { FactorEOptionalId, FactorESelect, QFactorQRelation } from '../qfactor';
import { PositionEOptionalId, PositionESelect, QPositionQRelation } from './qposition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorPositionESelect extends ImmutableActorRowESelect, FactorPositionEOptionalId {
    factor?: FactorESelect;
    position?: PositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorPositionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorPositionECascadeGraph extends ImmutableActorRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    FACTOR_ID?: number | IQNumberField;
    POSITION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorPositionECreateProperties extends Partial<FactorPositionEId>, FactorPositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorPositionECreateColumns extends FactorPositionEId, FactorPositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorPosition extends QImmutableActorRow {
    id: IQNumberField;
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QFactorPositionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorPositionQRelation extends QImmutableActorRowQRelation<QFactorPosition>, QFactorPositionQId {
}
