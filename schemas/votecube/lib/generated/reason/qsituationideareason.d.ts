import { IQBooleanField, IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '../idea/qsituationidea';
import { ReasonGraph, ReasonEOptionalId, ReasonESelect, QReasonQRelation } from './qreason';
import { ReasonCubeDisplayGraph, ReasonCubeDisplayEOptionalId, ReasonCubeDisplayESelect, QReasonCubeDisplayQRelation } from './qreasoncubedisplay';
import { ISituationIdeaReason } from './situationideareason';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationIdeaReasonESelect extends AirEntityESelect, SituationIdeaReasonEOptionalId {
    isPositiveOutcome?: boolean | IQBooleanField;
    situationIdea?: SituationIdeaESelect;
    reason?: ReasonESelect;
    reasonCubeDisplay?: ReasonCubeDisplayESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationIdeaReasonEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationIdeaReasonEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationIdeaReasonEUpdateProperties extends AirEntityEUpdateProperties {
    isPositiveOutcome?: boolean | IQBooleanField;
    situationIdea?: SituationIdeaEOptionalId;
    reason?: ReasonEOptionalId;
    reasonCubeDisplay?: ReasonCubeDisplayEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationIdeaReasonGraph extends SituationIdeaReasonEOptionalId, AirEntityGraph {
    isPositiveOutcome?: boolean | IQBooleanField;
    situationIdea?: SituationIdeaGraph;
    reason?: ReasonGraph;
    reasonCubeDisplay?: ReasonCubeDisplayGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationIdeaReasonEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    IS_POSITIVE_OUTCOME?: boolean | IQBooleanField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
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
export interface SituationIdeaReasonECreateProperties extends Partial<SituationIdeaReasonEId>, SituationIdeaReasonEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationIdeaReasonECreateColumns extends SituationIdeaReasonEId, SituationIdeaReasonEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationIdeaReason extends QAirEntity {
    isPositiveOutcome: IQBooleanField;
    situationIdea: QSituationIdeaQRelation;
    reason: QReasonQRelation;
    reasonCubeDisplay: QReasonCubeDisplayQRelation;
}
export interface QSituationIdeaReasonQId extends QAirEntityQId {
}
export interface QSituationIdeaReasonQRelation extends QAirEntityQRelation<ISituationIdeaReason, QSituationIdeaReason>, QSituationIdeaReasonQId {
}
//# sourceMappingURL=qsituationideareason.d.ts.map