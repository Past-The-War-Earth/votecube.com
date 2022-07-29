import { IQBooleanField, IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from '../idea/qidea';
import { ReasonGraph, ReasonEOptionalId, ReasonESelect, QReasonQRelation } from './qreason';
import { ReasonCubeDisplayGraph, ReasonCubeDisplayEOptionalId, ReasonCubeDisplayESelect, QReasonCubeDisplayQRelation } from './qreasoncubedisplay';
import { IIdeaReason } from './ideareason';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaReasonESelect extends AirEntityESelect, IdeaReasonEOptionalId {
    isPositiveOutcome?: boolean | IQBooleanField;
    idea?: IdeaESelect;
    reason?: ReasonESelect;
    reasonCubeDisplay?: ReasonCubeDisplayESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaReasonEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaReasonEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaReasonEUpdateProperties extends AirEntityEUpdateProperties {
    isPositiveOutcome?: boolean | IQBooleanField;
    idea?: IdeaEOptionalId;
    reason?: ReasonEOptionalId;
    reasonCubeDisplay?: ReasonCubeDisplayEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaReasonGraph extends IdeaReasonEOptionalId, AirEntityGraph {
    isPositiveOutcome?: boolean | IQBooleanField;
    idea?: IdeaGraph;
    reason?: ReasonGraph;
    reasonCubeDisplay?: ReasonCubeDisplayGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaReasonEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    IS_POSITIVE_OUTCOME?: boolean | IQBooleanField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    REASONS_RID_1?: number | IQNumberField;
    REASONS_AID_1?: number | IQNumberField;
    REASONS_ARID_1?: number | IQNumberField;
    REASONS_CUBE_DISPLAYS_RID_1?: number | IQNumberField;
    REASONS_CUBE_DISPLAYS_AID_1?: number | IQNumberField;
    REASONS_CUBE_DISPLAYS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaReasonECreateProperties extends Partial<IdeaReasonEId>, IdeaReasonEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaReasonECreateColumns extends IdeaReasonEId, IdeaReasonEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaReason extends QAirEntity {
    isPositiveOutcome: IQBooleanField;
    idea: QIdeaQRelation;
    reason: QReasonQRelation;
    reasonCubeDisplay: QReasonCubeDisplayQRelation;
}
export interface QIdeaReasonQId extends QAirEntityQId {
}
export interface QIdeaReasonQRelation extends QAirEntityQRelation<IIdeaReason, QIdeaReason>, QIdeaReasonQId {
}
//# sourceMappingURL=qideareason.d.ts.map