import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { UserPollRevisionEOptionalId, UserPollRevisionESelect, QUserPollRevisionQRelation } from './quserpollrevision';
import { PollRevisionTranslationEOptionalId, PollRevisionTranslationESelect, QPollRevisionTranslationQRelation } from '../revision/translation/qpollrevisiontranslation';
import { PollRevisionTranslationRatingECascadeGraph, PollRevisionTranslationRatingESelect, QPollRevisionTranslationRating } from './qpollrevisiontranslationrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionTranslationESelect extends MutableActorRowESelect, UserPollRevisionTranslationEOptionalId {
    userPollRevision?: UserPollRevisionESelect;
    revisionTranslation?: PollRevisionTranslationESelect;
    ratings?: PollRevisionTranslationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionTranslationEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationEUpdateProperties extends MutableActorRowEUpdateProperties {
    userPollRevision?: UserPollRevisionEOptionalId;
    revisionTranslation?: PollRevisionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionTranslationECascadeGraph extends MutableActorRowECascadeGraph {
    ratings?: PollRevisionTranslationRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionTranslationEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    USER_POLL_REVISION_ID?: number | IQNumberField;
    POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionTranslationECreateProperties extends Partial<UserPollRevisionTranslationEId>, UserPollRevisionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionTranslationECreateColumns extends UserPollRevisionTranslationEId, UserPollRevisionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevisionTranslation extends QMutableActorRow {
    id: IQNumberField;
    userPollRevision: QUserPollRevisionQRelation;
    revisionTranslation: QPollRevisionTranslationQRelation;
    ratings: IQOneToManyRelation<QPollRevisionTranslationRating>;
}
export interface QUserPollRevisionTranslationQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollRevisionTranslationQRelation extends QMutableActorRowQRelation<QUserPollRevisionTranslation>, QUserPollRevisionTranslationQId {
}
