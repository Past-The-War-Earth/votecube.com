import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../factor/qfactor';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from '../factor/qposition';
import { IReason } from './reason';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonESelect extends AirEntityESelect, ReasonEOptionalId {
    factor?: FactorESelect;
    position?: PositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReasonEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReasonEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReasonEUpdateProperties extends AirEntityEUpdateProperties {
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonGraph extends ReasonEOptionalId, AirEntityGraph {
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    FACTORS_RID_1?: number | IQNumberField;
    FACTORS_AID_1?: number | IQNumberField;
    FACTORS_ARID_1?: number | IQNumberField;
    POSITIONS_RID_1?: number | IQNumberField;
    POSITIONS_AID_1?: number | IQNumberField;
    POSITIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReasonECreateProperties extends Partial<ReasonEId>, ReasonEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReasonECreateColumns extends ReasonEId, ReasonEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QReason extends QAirEntity {
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QReasonQId extends QAirEntityQId {
}
export interface QReasonQRelation extends QAirEntityQRelation<IReason, QReason>, QReasonQId {
}
//# sourceMappingURL=qreason.d.ts.map