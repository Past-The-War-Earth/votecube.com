import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { UserPollEOptionalId, UserPollESelect, QUserPollQRelation } from './quserpoll';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../revision/qpollrevision';
import { UserPollRevisionTranslationECascadeGraph, UserPollRevisionTranslationESelect, QUserPollRevisionTranslation } from './quserpollrevisiontranslation';
import { UserPollRevisionRatingECascadeGraph, UserPollRevisionRatingESelect, QUserPollRevisionRating } from './quserpollrevisionrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollRevisionESelect extends MutableActorRowESelect, UserPollRevisionEOptionalId {
    userPoll?: UserPollESelect;
    revision?: PollRevisionESelect;
    translations?: UserPollRevisionTranslationESelect;
    ratings?: UserPollRevisionRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollRevisionEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserPollRevisionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollRevisionEUpdateProperties extends MutableActorRowEUpdateProperties {
    userPoll?: UserPollEOptionalId;
    revision?: PollRevisionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollRevisionECascadeGraph extends MutableActorRowECascadeGraph {
    translations?: UserPollRevisionTranslationECascadeGraph;
    ratings?: UserPollRevisionRatingECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollRevisionEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    USER_POLL_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollRevisionECreateProperties extends Partial<UserPollRevisionEId>, UserPollRevisionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollRevisionECreateColumns extends UserPollRevisionEId, UserPollRevisionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPollRevision extends QMutableActorRow {
    id: IQNumberField;
    userPoll: QUserPollQRelation;
    revision: QPollRevisionQRelation;
    translations: IQOneToManyRelation<QUserPollRevisionTranslation>;
    ratings: IQOneToManyRelation<QUserPollRevisionRating>;
}
export interface QUserPollRevisionQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QUserPollRevisionQRelation extends QMutableActorRowQRelation<QUserPollRevision>, QUserPollRevisionQId {
}
