import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { Outcome } from '../../ddl/situation/Outcome';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect extends RepositoryEntityESelect, OutcomeEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeGraph extends OutcomeEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns extends OutcomeEId, OutcomeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QRepositoryEntity<Outcome> {
    name: IQStringField;
}
export interface QOutcomeQId extends QRepositoryEntityQId {
}
export interface QOutcomeQRelation extends QRepositoryEntityQRelation<Outcome, QOutcome>, QOutcomeQId {
}
//# sourceMappingURL=qoutcome.d.ts.map