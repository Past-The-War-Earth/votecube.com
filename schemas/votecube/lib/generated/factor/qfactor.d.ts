import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { FactorPositionGraph, FactorPositionESelect, QFactorPosition } from './position/qfactorposition';
import { FactorPosition } from '../../ddl/factor/position/FactorPosition';
import { Factor } from '../../ddl/factor/Factor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect extends RepositoryEntityESelect, FactorEOptionalId {
    name?: string | IQStringField;
    factorPositions?: FactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorGraph extends FactorEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    factorPositions?: FactorPositionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties extends Partial<FactorEId>, FactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns extends FactorEId, FactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QRepositoryEntity<Factor> {
    name: IQStringField;
    factorPositions: IQOneToManyRelation<FactorPosition, QFactorPosition>;
}
export interface QFactorQId extends QRepositoryEntityQId {
}
export interface QFactorQRelation extends QRepositoryEntityQRelation<Factor, QFactor>, QFactorQId {
}
//# sourceMappingURL=qfactor.d.ts.map