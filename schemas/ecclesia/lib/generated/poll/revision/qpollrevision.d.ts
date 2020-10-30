import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { AgeSuitableRowGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../../infrastructure/row/qagesuitablerow';
import { PollGraph, PollEOptionalId, PollESelect, QPollQRelation } from '../qpoll';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../run/qpollrun';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { PollRevisionTranslationGraph, PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslation, QPollRevisionTranslationQRelation } from './translation/qpollrevisiontranslation';
import { PollRevisionRatingGraph, PollRevisionRatingESelect, QPollRevisionRating } from '../rating/qpollrevisionrating';
import { PollRevisionFactorPositionGraph, PollRevisionFactorPositionESelect, QPollRevisionFactorPosition } from './qpollrevisionfactorposition';
import { PollRevisionOpinionGraph, PollRevisionOpinionESelect, QPollRevisionOpinion } from '../../opinion/qpollrevisionopinion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionESelect extends AgeSuitableRowESelect, PollRevisionEOptionalId {
    depth?: number | IQNumberField;
    poll?: PollESelect;
    createdAtRun?: PollRunESelect;
    outcomeVersionA?: OutcomeESelect;
    outcomeVersionB?: OutcomeESelect;
    parent?: PollRevisionESelect;
    parentTranslation?: PollRevisionTranslationESelect;
    children?: PollRevisionESelect;
    ratings?: PollRevisionRatingESelect;
    factorPositions?: PollRevisionFactorPositionESelect;
    allTranslations?: PollRevisionTranslationESelect;
    opinions?: PollRevisionOpinionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionEId extends AgeSuitableRowEId {
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
export interface PollRevisionEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    depth?: number | IQNumberField;
    poll?: PollEOptionalId;
    createdAtRun?: PollRunEOptionalId;
    outcomeVersionA?: OutcomeEOptionalId;
    outcomeVersionB?: OutcomeEOptionalId;
    parent?: PollRevisionEOptionalId;
    parentTranslation?: PollRevisionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionGraph extends PollRevisionEOptionalId, AgeSuitableRowGraph {
    depth?: number | IQNumberField;
    poll?: PollGraph;
    createdAtRun?: PollRunGraph;
    outcomeVersionA?: OutcomeGraph;
    outcomeVersionB?: OutcomeGraph;
    parent?: PollRevisionGraph;
    parentTranslation?: PollRevisionTranslationGraph;
    children?: PollRevisionGraph[];
    ratings?: PollRevisionRatingGraph[];
    factorPositions?: PollRevisionFactorPositionGraph[];
    allTranslations?: PollRevisionTranslationGraph[];
    opinions?: PollRevisionOpinionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    DEPTH?: number | IQNumberField;
    POLL_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    OUTCOME_A_VERSION_ID?: number | IQNumberField;
    OUTCOME_B_VERSION_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
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
export interface QPollRevision extends QAgeSuitableRow {
    id: IQNumberField;
    depth: IQNumberField;
    poll: QPollQRelation;
    createdAtRun: QPollRunQRelation;
    outcomeVersionA: QOutcomeQRelation;
    outcomeVersionB: QOutcomeQRelation;
    parent: QPollRevisionQRelation;
    parentTranslation: QPollRevisionTranslationQRelation;
    children: IQOneToManyRelation<QPollRevision>;
    ratings: IQOneToManyRelation<QPollRevisionRating>;
    factorPositions: IQOneToManyRelation<QPollRevisionFactorPosition>;
    allTranslations: IQOneToManyRelation<QPollRevisionTranslation>;
    opinions: IQOneToManyRelation<QPollRevisionOpinion>;
}
export interface QPollRevisionQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QPollRevisionQRelation extends QAgeSuitableRowQRelation<QPollRevision>, QPollRevisionQId {
}
//# sourceMappingURL=qpollrevision.d.ts.map