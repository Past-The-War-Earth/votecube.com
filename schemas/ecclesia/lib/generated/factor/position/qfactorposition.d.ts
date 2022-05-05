import { IQDateField, IQNumberField } from '@airport/air-traffic-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { FactorGraph, FactorEId, FactorEOptionalId, FactorESelect, QFactorQId, QFactorQRelation } from '../qfactor';
import { PositionGraph, PositionEId, PositionEOptionalId, PositionESelect, QPositionQId, QPositionQRelation } from './qposition';
import { FactorPosition } from '../../../ddl/factor/position/FactorPosition';
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
    factor: FactorEId;
    position: PositionEId;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorPositionGraph extends FactorPositionEOptionalId, ImmutableActorRowGraph {
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
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
export interface QFactorPosition extends QImmutableActorRow<FactorPosition> {
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QFactorPositionQId extends QImmutableActorRowQId {
    factor: QFactorQId;
    position: QPositionQId;
}
export interface QFactorPositionQRelation extends QImmutableActorRowQRelation<FactorPosition, QFactorPosition>, QFactorPositionQId {
}
//# sourceMappingURL=qfactorposition.d.ts.map