import { IQNumberField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '../situation/qsituation';
import { SolutionFactorGraph, SolutionFactorESelect, QSolutionFactorQRelation } from './qsolutionfactor';
import { Solution } from '../../ddl/solution/Solution';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SolutionESelect extends RepositoryEntityESelect, SolutionEOptionalId {
    situation?: SituationESelect;
    factors?: SolutionFactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SolutionEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SolutionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SolutionEUpdateProperties extends RepositoryEntityEUpdateProperties {
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SolutionGraph extends SolutionEOptionalId, RepositoryEntityGraph {
    situation?: SituationGraph;
    factors?: SolutionFactorGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SolutionEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SolutionECreateProperties extends Partial<SolutionEId>, SolutionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SolutionECreateColumns extends SolutionEId, SolutionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSolution extends QRepositoryEntity<Solution> {
    situation: QSituationQRelation;
    factors: QSolutionFactorQRelation;
}
export interface QSolutionQId extends QRepositoryEntityQId {
}
export interface QSolutionQRelation extends QRepositoryEntityQRelation<Solution, QSolution>, QSolutionQId {
}
//# sourceMappingURL=qsolution.d.ts.map