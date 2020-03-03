import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../infrastructure/row/qmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../poll/run/qpollrun';
import { VoteEOptionalId, VoteESelect, QVoteQRelation } from '../vote/qvote';
import { PollRevisionOpinionVersionECascadeGraph, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersion } from './qpollrevisionopinionversion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionESelect extends MutableActorRowESelect, PollRevisionOpinionEOptionalId {
    pollRevision?: PollRevisionESelect;
    run?: PollRunESelect;
    vote?: VoteESelect;
    versions?: PollRevisionOpinionVersionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionEUpdateProperties extends MutableActorRowEUpdateProperties {
    pollRevision?: PollRevisionEOptionalId;
    run?: PollRunEOptionalId;
    vote?: VoteEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionECascadeGraph extends MutableActorRowECascadeGraph {
    versions?: PollRevisionOpinionVersionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    POLL_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    VOTE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionECreateProperties extends Partial<PollRevisionOpinionEId>, PollRevisionOpinionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionECreateColumns extends PollRevisionOpinionEId, PollRevisionOpinionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinion extends QMutableActorRow {
    id: IQNumberField;
    pollRevision: QPollRevisionQRelation;
    run: QPollRunQRelation;
    vote: QVoteQRelation;
    versions: IQOneToManyRelation<QPollRevisionOpinionVersion>;
}
export interface QPollRevisionOpinionQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionQRelation extends QMutableActorRowQRelation<QPollRevisionOpinion>, QPollRevisionOpinionQId {
}
