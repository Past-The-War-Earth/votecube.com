import { IQDateField, IQNumberField } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../revision/qpollrevision';
import { RatingGraph, RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
import { PollRevisionRating } from '../../../ddl/poll/rating/PollRevisionRating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionRatingESelect extends ImmutableActorRowESelect, PollRevisionRatingEOptionalId {
    value?: number | IQNumberField;
    pollRevision?: PollRevisionESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    value?: number | IQNumberField;
    pollRevision?: PollRevisionEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionRatingGraph extends PollRevisionRatingEOptionalId, ImmutableActorRowGraph {
    value?: number | IQNumberField;
    pollRevision?: PollRevisionGraph;
    rating?: RatingGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    VALUE?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionRatingECreateProperties extends Partial<PollRevisionRatingEId>, PollRevisionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionRatingECreateColumns extends PollRevisionRatingEId, PollRevisionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionRating extends QImmutableActorRow<PollRevisionRating> {
    id: IQNumberField;
    value: IQNumberField;
    pollRevision: QPollRevisionQRelation;
    rating: QRatingQRelation;
}
export interface QPollRevisionRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionRatingQRelation extends QImmutableActorRowQRelation<PollRevisionRating, QPollRevisionRating>, QPollRevisionRatingQId {
}
//# sourceMappingURL=qpollrevisionrating.d.ts.map