import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { VoteType } from '../../ddl/vote/VoteType';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteTypeESelect extends SystemGeneratedRowESelect, VoteTypeEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteTypeEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteTypeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteTypeEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteTypeGraph extends VoteTypeEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteTypeEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    VOTE_TYPE_NAME?: string | IQStringField;
    VOTE_TYPE_DESCRIPTION?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteTypeECreateProperties extends Partial<VoteTypeEId>, VoteTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteTypeECreateColumns extends VoteTypeEId, VoteTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteType extends QSystemGeneratedRow<VoteType> {
    id: IQNumberField;
    name: IQStringField;
    description: IQStringField;
}
export interface QVoteTypeQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QVoteTypeQRelation extends QSystemGeneratedRowQRelation<VoteType, QVoteType>, QVoteTypeQId {
}
//# sourceMappingURL=qvotetype.d.ts.map