import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteFactorTypeESelect extends SystemGeneratedRowESelect, VoteFactorTypeEOptionalId {
    value?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteFactorTypeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorTypeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorTypeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    value?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteFactorTypeECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorTypeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    VOTE_FACTOR_TYPE_VALUE?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteFactorTypeECreateProperties extends Partial<VoteFactorTypeEId>, VoteFactorTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteFactorTypeECreateColumns extends VoteFactorTypeEId, VoteFactorTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteFactorType extends QSystemGeneratedRow {
    id: IQNumberField;
    value: IQStringField;
}
export interface QVoteFactorTypeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QVoteFactorTypeQRelation extends QSystemGeneratedRowQRelation<QVoteFactorType>, QVoteFactorTypeQId {
}
