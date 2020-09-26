import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollTypeESelect extends SystemGeneratedRowESelect, PollTypeEOptionalId {
    value?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollTypeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollTypeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollTypeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    value?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollTypeGraph extends SystemGeneratedRowESelect, PollTypeEOptionalId, SystemGeneratedRowGraph {
    value?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollTypeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    POLL_TYPE_VALUE?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollTypeECreateProperties extends Partial<PollTypeEId>, PollTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollTypeECreateColumns extends PollTypeEId, PollTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollType extends QSystemGeneratedRow {
    id: IQNumberField;
    value: IQStringField;
}
export interface QPollTypeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QPollTypeQRelation extends QSystemGeneratedRowQRelation<QPollType>, QPollTypeQId {
}
//# sourceMappingURL=qpolltype.d.ts.map