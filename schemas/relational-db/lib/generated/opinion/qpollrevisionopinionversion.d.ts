import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableRowECascadeGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from '../infrastructure/row/qimmutablerow';
import { PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from './qpollrevisionopinion';
import { VoteRevisionEOptionalId, VoteRevisionESelect, QVoteRevisionQRelation } from '../vote/qvoterevision';
import { LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../infrastructure/qlanguage';
import { PollRevisionOpinionVersionRatingECascadeGraph, PollRevisionOpinionVersionRatingESelect, QPollRevisionOpinionVersionRating } from './user/qpollrevisionopinionversionrating';
import { PollRevisionOpinionVersionTranslationECascadeGraph, PollRevisionOpinionVersionTranslationESelect, QPollRevisionOpinionVersionTranslation } from './translation/qpollrevisionopinionversiontranslation';
import { FactorOpinionVersionECascadeGraph, FactorOpinionVersionESelect, QFactorOpinionVersion } from './qfactoropinionversion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionESelect extends ImmutableRowESelect, PollRevisionOpinionVersionEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    voteRevision?: VoteRevisionESelect;
    language?: LanguageESelect;
    parent?: PollRevisionOpinionVersionESelect;
    children?: PollRevisionOpinionVersionESelect;
    ratings?: PollRevisionOpinionVersionRatingESelect;
    translations?: PollRevisionOpinionVersionTranslationESelect;
    factors?: FactorOpinionVersionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionEId extends ImmutableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionEUpdateProperties extends ImmutableRowEUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    voteRevision?: VoteRevisionEOptionalId;
    language?: LanguageEOptionalId;
    parent?: PollRevisionOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionECascadeGraph extends ImmutableRowECascadeGraph {
    children?: PollRevisionOpinionVersionECascadeGraph;
    ratings?: PollRevisionOpinionVersionRatingECascadeGraph;
    translations?: PollRevisionOpinionVersionTranslationECascadeGraph;
    factors?: FactorOpinionVersionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionEUpdateColumns extends ImmutableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    VOTE_REVISION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionECreateProperties extends Partial<PollRevisionOpinionVersionEId>, PollRevisionOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionECreateColumns extends PollRevisionOpinionVersionEId, PollRevisionOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersion extends QImmutableRow {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    voteRevision: QVoteRevisionQRelation;
    language: QLanguageQRelation;
    parent: QPollRevisionOpinionVersionQRelation;
    children: IQOneToManyRelation<QPollRevisionOpinionVersion>;
    ratings: IQOneToManyRelation<QPollRevisionOpinionVersionRating>;
    translations: IQOneToManyRelation<QPollRevisionOpinionVersionTranslation>;
    factors: IQOneToManyRelation<QFactorOpinionVersion>;
}
export interface QPollRevisionOpinionVersionQId extends QImmutableRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionVersionQRelation extends QImmutableRowQRelation<QPollRevisionOpinionVersion>, QPollRevisionOpinionVersionQId {
}
