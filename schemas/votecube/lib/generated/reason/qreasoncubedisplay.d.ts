import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IReasonCubeDisplay } from './reasoncubedisplay';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonCubeDisplayESelect extends AirEntityESelect, ReasonCubeDisplayEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReasonCubeDisplayEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReasonCubeDisplayEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReasonCubeDisplayEUpdateProperties extends AirEntityEUpdateProperties {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonCubeDisplayGraph extends ReasonCubeDisplayEOptionalId, AirEntityGraph {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonCubeDisplayEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    FACTOR_COORDINATE_AXIS?: string | IQStringField;
    POSITION_ORIENTATION?: number | IQNumberField;
    FACTOR_NUMBER?: number | IQNumberField;
    COLOR_BLUE?: number | IQNumberField;
    COLOR_GREEN?: number | IQNumberField;
    COLOR_RED?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReasonCubeDisplayECreateProperties extends Partial<ReasonCubeDisplayEId>, ReasonCubeDisplayEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReasonCubeDisplayECreateColumns extends ReasonCubeDisplayEId, ReasonCubeDisplayEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QReasonCubeDisplay extends QAirEntity {
    axis: IQStringField;
    dir: IQNumberField;
    factorNumber: IQNumberField;
    blue: IQNumberField;
    green: IQNumberField;
    red: IQNumberField;
}
export interface QReasonCubeDisplayQId extends QAirEntityQId {
}
export interface QReasonCubeDisplayQRelation extends QAirEntityQRelation<IReasonCubeDisplay, QReasonCubeDisplay>, QReasonCubeDisplayQId {
}
//# sourceMappingURL=qreasoncubedisplay.d.ts.map