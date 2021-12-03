import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SolutionGraph, SolutionEOptionalId, SolutionESelect, QSolutionQRelation } from './qsolution';
import { SituationFactorPositionGraph, SituationFactorPositionEOptionalId, SituationFactorPositionESelect, QSituationFactorPositionQRelation } from '../situation/qsituationfactorposition';
import { SolutionFactor } from '../../ddl/solution/SolutionFactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SolutionFactorESelect extends RepositoryEntityESelect, SolutionFactorEOptionalId {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    solution?: SolutionESelect;
    situationFactorPosition?: SituationFactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SolutionFactorEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SolutionFactorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SolutionFactorEUpdateProperties extends RepositoryEntityEUpdateProperties {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    solution?: SolutionEOptionalId;
    situationFactorPosition?: SituationFactorPositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SolutionFactorGraph extends SolutionFactorEOptionalId, RepositoryEntityGraph {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    solution?: SolutionGraph;
    situationFactorPosition?: SituationFactorPositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SolutionFactorEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    AXIS?: string | IQStringField;
    SHARE?: number | IQNumberField;
    SOLUTIONS_RID_1?: number | IQNumberField;
    SOLUTIONS_AID_1?: number | IQNumberField;
    SOLUTIONS_ARID_1?: number | IQNumberField;
    SITUATION_FACTOR_POSITIONS_RID_1?: number | IQNumberField;
    SITUATION_FACTOR_POSITIONS_AID_1?: number | IQNumberField;
    SITUATION_FACTOR_POSITIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SolutionFactorECreateProperties extends Partial<SolutionFactorEId>, SolutionFactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SolutionFactorECreateColumns extends SolutionFactorEId, SolutionFactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSolutionFactor extends QRepositoryEntity<SolutionFactor> {
    axis: IQStringField;
    share: IQNumberField;
    solution: QSolutionQRelation;
    situationFactorPosition: QSituationFactorPositionQRelation;
}
export interface QSolutionFactorQId extends QRepositoryEntityQId {
}
export interface QSolutionFactorQRelation extends QRepositoryEntityQRelation<SolutionFactor, QSolutionFactor>, QSolutionFactorQId {
}
//# sourceMappingURL=qsolutionfactor.d.ts.map