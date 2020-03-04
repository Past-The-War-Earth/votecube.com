import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { ThemeEOptionalId, ThemeESelect, QThemeQRelation } from './qtheme';
import { PollTypeEOptionalId, PollTypeESelect, QPollTypeQRelation } from './qpolltype';
import { PollRunECascadeGraph, PollRunESelect, QPollRun } from './run/qpollrun';
import { PollRevisionECascadeGraph, PollRevisionESelect, QPollRevision } from './revision/qpollrevision';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect extends ImmutableActorRowESelect, PollEOptionalId {
    id?: number | IQNumberField;
    ageSuitability?: number | IQNumberField;
    theme?: ThemeESelect;
    type?: PollTypeESelect;
    parent?: PollESelect;
    children?: PollESelect;
    runs?: PollRunESelect;
    revisions?: PollRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollEId extends ImmutableActorRowEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    id?: number | IQNumberField;
    ageSuitability?: number | IQNumberField;
    theme?: ThemeEOptionalId;
    type?: PollTypeEOptionalId;
    parent?: PollEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: PollECascadeGraph;
    runs?: PollRunECascadeGraph;
    revisions?: PollRevisionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    POLL_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    THEME_ID?: number | IQNumberField;
    POLL_TYPE_ID?: number | IQNumberField;
    PARENT_POLL_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollECreateProperties extends Partial<PollEId>, PollEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollECreateColumns extends PollEId, PollEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPoll extends QImmutableActorRow {
    id: IQNumberField;
    ageSuitability: IQNumberField;
    theme: QThemeQRelation;
    type: QPollTypeQRelation;
    parent: QPollQRelation;
    children: IQOneToManyRelation<QPoll>;
    runs: IQOneToManyRelation<QPollRun>;
    revisions: IQOneToManyRelation<QPollRevision>;
}
export interface QPollQId extends QImmutableActorRowQId {
}
export interface QPollQRelation extends QImmutableActorRowQRelation<QPoll>, QPollQId {
}
