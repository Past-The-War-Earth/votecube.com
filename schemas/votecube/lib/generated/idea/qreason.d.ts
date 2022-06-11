import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from './qsituationidea';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../factor/qfactor';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from '../factor/qposition';
import { IReason } from './reason';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonESelect extends AirEntityESelect, ReasonEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situationIdea?: SituationIdeaESelect;
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
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situationIdea?: SituationIdeaEOptionalId;
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonGraph extends ReasonEOptionalId, AirEntityGraph {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situationIdea?: SituationIdeaGraph;
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    FACTOR_COORDINATE_AXIS?: string | IQStringField;
    POSITION_ORIENTATION?: number | IQNumberField;
    FACTOR_NUMBER?: number | IQNumberField;
    COLOR_BLUE?: number | IQNumberField;
    COLOR_GREEN?: number | IQNumberField;
    COLOR_RED?: number | IQNumberField;
    OUTCOME_ORDINAL?: string | IQStringField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReason extends QAirEntity {
    axis: IQStringField;
    dir: IQNumberField;
    factorNumber: IQNumberField;
    blue: IQNumberField;
    green: IQNumberField;
    red: IQNumberField;
    outcomeOrdinal: IQStringField;
    situationIdea: QSituationIdeaQRelation;
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QReasonQId extends QAirEntityQId {
}
export interface QReasonQRelation extends QAirEntityQRelation<IReason, QReason>, QReasonQId {
}
//# sourceMappingURL=qreason.d.ts.map