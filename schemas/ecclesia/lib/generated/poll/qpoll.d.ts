import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { AgeSuitableRowGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../infrastructure/row/qagesuitablerow';
import { ThemeGraph, ThemeEOptionalId, ThemeESelect, QThemeQRelation } from './qtheme';
import { PollTypeGraph, PollTypeEOptionalId, PollTypeESelect, QPollTypeQRelation } from './qpolltype';
import { PollRunGraph, PollRunESelect, QPollRun } from './run/qpollrun';
import { PollRun } from '../../ddl/poll/run/PollRun';
import { PollRevisionGraph, PollRevisionESelect, QPollRevision } from './revision/qpollrevision';
import { PollRevision } from '../../ddl/poll/revision/PollRevision';
import { Poll } from '../../ddl/poll/Poll';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect extends AgeSuitableRowESelect, PollEOptionalId {
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
export interface PollEId extends AgeSuitableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    theme?: ThemeEOptionalId;
    type?: PollTypeEOptionalId;
    parent?: PollEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollGraph extends PollEOptionalId, AgeSuitableRowGraph {
    theme?: ThemeGraph;
    type?: PollTypeGraph;
    parent?: PollGraph;
    children?: PollGraph[];
    runs?: PollRunGraph[];
    revisions?: PollRevisionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
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
export interface QPoll extends QAgeSuitableRow<Poll> {
    id: IQNumberField;
    theme: QThemeQRelation;
    type: QPollTypeQRelation;
    parent: QPollQRelation;
    children: IQOneToManyRelation<Poll, QPoll>;
    runs: IQOneToManyRelation<PollRun, QPollRun>;
    revisions: IQOneToManyRelation<PollRevision, QPollRevision>;
}
export interface QPollQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QPollQRelation extends QAgeSuitableRowQRelation<Poll, QPoll>, QPollQId {
}
//# sourceMappingURL=qpoll.d.ts.map