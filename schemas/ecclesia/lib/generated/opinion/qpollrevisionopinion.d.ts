import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { MutableActorRowGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../infrastructure/row/qmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../poll/run/qpollrun';
import { VoteGraph, VoteEOptionalId, VoteESelect, QVoteQRelation } from '../vote/qvote';
import { PollRevisionOpinionRatingGraph, PollRevisionOpinionRatingESelect, QPollRevisionOpinionRating } from './rating/qpollrevisionopinionrating';
import { PollRevisionOpinionVersionGraph, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersion } from './qpollrevisionopinionversion';
import { FactorOpinionVersionGraph, FactorOpinionVersionESelect, QFactorOpinionVersion } from './qfactoropinionversion';
import { OutcomeOpinionVersionGraph, OutcomeOpinionVersionESelect, QOutcomeOpinionVersion } from './qoutcomeopinionversion';
import { PositionOpinionVersionGraph, PositionOpinionVersionESelect, QPositionOpinionVersion } from './qpositionopinionversion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionESelect extends MutableActorRowESelect, PollRevisionOpinionEOptionalId {
    pollRevision?: PollRevisionESelect;
    run?: PollRunESelect;
    vote?: VoteESelect;
    ratings?: PollRevisionOpinionRatingESelect;
    versions?: PollRevisionOpinionVersionESelect;
    factors?: FactorOpinionVersionESelect;
    outcomes?: OutcomeOpinionVersionESelect;
    positions?: PositionOpinionVersionESelect;
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
export interface PollRevisionOpinionGraph extends PollRevisionOpinionEOptionalId, MutableActorRowGraph {
    pollRevision?: PollRevisionGraph;
    run?: PollRunGraph;
    vote?: VoteGraph;
    ratings?: PollRevisionOpinionRatingGraph[];
    versions?: PollRevisionOpinionVersionGraph[];
    factors?: FactorOpinionVersionGraph[];
    outcomes?: OutcomeOpinionVersionGraph[];
    positions?: PositionOpinionVersionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
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
    ratings: IQOneToManyRelation<QPollRevisionOpinionRating>;
    versions: IQOneToManyRelation<QPollRevisionOpinionVersion>;
    factors: IQOneToManyRelation<QFactorOpinionVersion>;
    outcomes: IQOneToManyRelation<QOutcomeOpinionVersion>;
    positions: IQOneToManyRelation<QPositionOpinionVersion>;
}
export interface QPollRevisionOpinionQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionQRelation extends QMutableActorRowQRelation<QPollRevisionOpinion>, QPollRevisionOpinionQId {
}
//# sourceMappingURL=qpollrevisionopinion.d.ts.map