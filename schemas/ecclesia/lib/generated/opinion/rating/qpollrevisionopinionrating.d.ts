import { IQDateField, IQNumberField } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionOpinionGraph, PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from '../qpollrevisionopinion';
import { RatingGraph, RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
import { PollRevisionOpinionRating } from '../../../ddl/opinion/rating/PollRevisionOpinionRating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionRatingESelect extends ImmutableActorRowESelect, PollRevisionOpinionRatingEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionRatingGraph extends PollRevisionOpinionRatingEOptionalId, ImmutableActorRowGraph {
    pollRevisionOpinion?: PollRevisionOpinionGraph;
    rating?: RatingGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionRatingECreateProperties extends Partial<PollRevisionOpinionRatingEId>, PollRevisionOpinionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionRatingECreateColumns extends PollRevisionOpinionRatingEId, PollRevisionOpinionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionRating extends QImmutableActorRow<PollRevisionOpinionRating> {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    rating: QRatingQRelation;
}
export interface QPollRevisionOpinionRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionRatingQRelation extends QImmutableActorRowQRelation<PollRevisionOpinionRating, QPollRevisionOpinionRating>, QPollRevisionOpinionRatingQId {
}
//# sourceMappingURL=qpollrevisionopinionrating.d.ts.map