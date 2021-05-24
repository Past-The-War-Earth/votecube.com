import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { VoteGraph, VoteEOptionalId, VoteESelect, QVoteQRelation } from './qvote';
import { VoteFactorGraph, VoteFactorESelect, QVoteFactor } from './qvotefactor';
import { VoteFactor } from '../../ddl/vote/VoteFactor';
import { VoteVersion } from '../../ddl/vote/VoteVersion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteVersionESelect extends ImmutableActorRowESelect, VoteVersionEOptionalId {
    vote?: VoteESelect;
    factors?: VoteFactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteVersionEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteVersionEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    vote?: VoteEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteVersionGraph extends VoteVersionEOptionalId, ImmutableActorRowGraph {
    vote?: VoteGraph;
    factors?: VoteFactorGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteVersionEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    VOTE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteVersionECreateProperties extends Partial<VoteVersionEId>, VoteVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteVersionECreateColumns extends VoteVersionEId, VoteVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteVersion extends QImmutableActorRow<VoteVersion> {
    id: IQNumberField;
    vote: QVoteQRelation;
    factors: IQOneToManyRelation<VoteFactor, QVoteFactor>;
}
export interface QVoteVersionQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QVoteVersionQRelation extends QImmutableActorRowQRelation<VoteVersion, QVoteVersion>, QVoteVersionQId {
}
//# sourceMappingURL=qvoteversion.d.ts.map