import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollEOptionalId, PollESelect, QPollQRelation } from '../qpoll';
import { PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../run/qpollrun';
import { OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { PollRevisionRatingECascadeGraph, PollRevisionRatingESelect, QPollRevisionRating } from '../rating/qpollrevisionrating';
import { PollRevisionFactorPositionECascadeGraph, PollRevisionFactorPositionESelect, QPollRevisionFactorPosition } from './qpollrevisionfactorposition';
import { PollRevisionTranslationECascadeGraph, PollRevisionTranslationESelect, QPollRevisionTranslation } from './translation/qpollrevisiontranslation';
import { PollRevisionOpinionECascadeGraph, PollRevisionOpinionESelect, QPollRevisionOpinion } from '../../opinion/qpollrevisionopinion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionESelect extends ImmutableActorRowESelect, PollRevisionEOptionalId {
    ageSuitability?: number | IQNumberField;
    poll?: PollESelect;
    createdAtRun?: PollRunESelect;
    outcomeVersionA?: OutcomeESelect;
    outcomeVersionB?: OutcomeESelect;
    parent?: PollRevisionESelect;
    children?: PollRevisionESelect;
    ratings?: PollRevisionRatingESelect;
    factorPositions?: PollRevisionFactorPositionESelect;
    allTranslations?: PollRevisionTranslationESelect;
    opinions?: PollRevisionOpinionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    ageSuitability?: number | IQNumberField;
    poll?: PollEOptionalId;
    createdAtRun?: PollRunEOptionalId;
    outcomeVersionA?: OutcomeEOptionalId;
    outcomeVersionB?: OutcomeEOptionalId;
    parent?: PollRevisionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: PollRevisionECascadeGraph;
    ratings?: PollRevisionRatingECascadeGraph;
    factorPositions?: PollRevisionFactorPositionECascadeGraph;
    allTranslations?: PollRevisionTranslationECascadeGraph;
    opinions?: PollRevisionOpinionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    POLL_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    OUTCOME_A_VERSION_ID?: number | IQNumberField;
    OUTCOME_B_VERSION_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionECreateProperties extends Partial<PollRevisionEId>, PollRevisionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionECreateColumns extends PollRevisionEId, PollRevisionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevision extends QImmutableActorRow {
    id: IQNumberField;
    ageSuitability: IQNumberField;
    poll: QPollQRelation;
    createdAtRun: QPollRunQRelation;
    outcomeVersionA: QOutcomeQRelation;
    outcomeVersionB: QOutcomeQRelation;
    parent: QPollRevisionQRelation;
    children: IQOneToManyRelation<QPollRevision>;
    ratings: IQOneToManyRelation<QPollRevisionRating>;
    factorPositions: IQOneToManyRelation<QPollRevisionFactorPosition>;
    allTranslations: IQOneToManyRelation<QPollRevisionTranslation>;
    opinions: IQOneToManyRelation<QPollRevisionOpinion>;
}
export interface QPollRevisionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionQRelation extends QImmutableActorRowQRelation<QPollRevision>, QPollRevisionQId {
}
