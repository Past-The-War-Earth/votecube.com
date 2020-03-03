import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { VoteEOptionalId, VoteESelect, QVoteQRelation } from './qvote';
import { PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslationQRelation } from '../poll/revision/translation/qpollrevisiontranslation';
import { PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../poll/run/qpollrun';
import { VoteFactorECascadeGraph, VoteFactorESelect, QVoteFactor } from './qvotefactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteRevisionESelect extends ImmutableActorRowESelect, VoteRevisionEOptionalId {
    revision?: PollRevisionESelect;
    vote?: VoteESelect;
    revisionTranslation?: PollRevisionTranslationESelect;
    run?: PollRunESelect;
    factors?: VoteFactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteRevisionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteRevisionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteRevisionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    revision?: PollRevisionEOptionalId;
    vote?: VoteEOptionalId;
    revisionTranslation?: PollRevisionTranslationEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteRevisionECascadeGraph extends ImmutableActorRowECascadeGraph {
    factors?: VoteFactorECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteRevisionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    VOTE_ID?: number | IQNumberField;
    POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteRevisionECreateProperties extends Partial<VoteRevisionEId>, VoteRevisionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteRevisionECreateColumns extends VoteRevisionEId, VoteRevisionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteRevision extends QImmutableActorRow {
    id: IQNumberField;
    revision: QPollRevisionQRelation;
    vote: QVoteQRelation;
    revisionTranslation: QPollRevisionTranslationQRelation;
    run: QPollRunQRelation;
    factors: IQOneToManyRelation<QVoteFactor>;
}
export interface QVoteRevisionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QVoteRevisionQRelation extends QImmutableActorRowQRelation<QVoteRevision>, QVoteRevisionQId {
}
