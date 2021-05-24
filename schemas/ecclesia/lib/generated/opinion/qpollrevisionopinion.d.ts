import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../poll/run/qpollrun';
import { VoteGraph, VoteEOptionalId, VoteESelect, QVoteQRelation } from '../vote/qvote';
import { PollRevisionOpinionRatingGraph, PollRevisionOpinionRatingESelect, QPollRevisionOpinionRating } from './rating/qpollrevisionopinionrating';
import { PollRevisionOpinionRating } from '../../ddl/opinion/rating/PollRevisionOpinionRating';
import { PollRevisionOpinionVersionGraph, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersion } from './qpollrevisionopinionversion';
import { PollRevisionOpinionVersion } from '../../ddl/opinion/PollRevisionOpinionVersion';
import { FactorOpinionVersionGraph, FactorOpinionVersionESelect, QFactorOpinionVersion } from './qfactoropinionversion';
import { FactorOpinionVersion } from '../../ddl/opinion/FactorOpinionVersion';
import { OutcomeOpinionVersionGraph, OutcomeOpinionVersionESelect, QOutcomeOpinionVersion } from './qoutcomeopinionversion';
import { OutcomeOpinionVersion } from '../../ddl/opinion/OutcomeOpinionVersion';
import { PositionOpinionVersionGraph, PositionOpinionVersionESelect, QPositionOpinionVersion } from './qpositionopinionversion';
import { PositionOpinionVersion } from '../../ddl/opinion/PositionOpinionVersion';
import { PollRevisionOpinion } from '../../ddl/opinion/PollRevisionOpinion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionESelect extends ImmutableActorRowESelect, PollRevisionOpinionEOptionalId {
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
export interface PollRevisionOpinionEId extends ImmutableActorRowEId {
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
export interface PollRevisionOpinionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    pollRevision?: PollRevisionEOptionalId;
    run?: PollRunEOptionalId;
    vote?: VoteEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionGraph extends PollRevisionOpinionEOptionalId, ImmutableActorRowGraph {
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
export interface PollRevisionOpinionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
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
export interface QPollRevisionOpinion extends QImmutableActorRow<PollRevisionOpinion> {
    id: IQNumberField;
    pollRevision: QPollRevisionQRelation;
    run: QPollRunQRelation;
    vote: QVoteQRelation;
    ratings: IQOneToManyRelation<PollRevisionOpinionRating, QPollRevisionOpinionRating>;
    versions: IQOneToManyRelation<PollRevisionOpinionVersion, QPollRevisionOpinionVersion>;
    factors: IQOneToManyRelation<FactorOpinionVersion, QFactorOpinionVersion>;
    outcomes: IQOneToManyRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>;
    positions: IQOneToManyRelation<PositionOpinionVersion, QPositionOpinionVersion>;
}
export interface QPollRevisionOpinionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionQRelation extends QImmutableActorRowQRelation<PollRevisionOpinion, QPollRevisionOpinion>, QPollRevisionOpinionQId {
}
//# sourceMappingURL=qpollrevisionopinion.d.ts.map