import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from './qsituationidea';
import { IIdeaRating } from './idearating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaRatingESelect extends AirEntityESelect, IdeaRatingEOptionalId {
    urgencyRating?: number | IQNumberField;
    idea?: IdeaESelect;
    situationIdea?: SituationIdeaESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaRatingEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaRatingEUpdateProperties extends AirEntityEUpdateProperties {
    urgencyRating?: number | IQNumberField;
    idea?: IdeaEOptionalId;
    situationIdea?: SituationIdeaEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaRatingGraph extends IdeaRatingEOptionalId, AirEntityGraph {
    urgencyRating?: number | IQNumberField;
    idea?: IdeaGraph;
    situationIdea?: SituationIdeaGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaRatingEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    URGENCY_RATING?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaRatingECreateProperties extends Partial<IdeaRatingEId>, IdeaRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaRatingECreateColumns extends IdeaRatingEId, IdeaRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QIdeaRating extends QAirEntity {
    urgencyRating: IQNumberField;
    idea: QIdeaQRelation;
    situationIdea: QSituationIdeaQRelation;
}
export interface QIdeaRatingQId extends QAirEntityQId {
}
export interface QIdeaRatingQRelation extends QAirEntityQRelation<IIdeaRating, QIdeaRating>, QIdeaRatingQId {
}
//# sourceMappingURL=qidearating.d.ts.map