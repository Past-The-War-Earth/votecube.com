import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { CategoryGraph, CategoryEOptionalId, CategoryESelect, QCategoryQRelation } from '../qcategory';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { SituationFactorPositionGraph, SituationFactorPositionESelect, QSituationFactorPosition } from './qsituationfactorposition';
import { SituationFactorPosition } from '../../ddl/situation/SituationFactorPosition';
import { SolutionGraph, SolutionESelect, QSolution } from '../solution/qsolution';
import { Solution } from '../../ddl/solution/Solution';
import { Situation } from '../../ddl/situation/Situation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect extends RepositoryEntityESelect, SituationEOptionalId {
    name?: string | IQStringField;
    category?: CategoryESelect;
    parent?: SituationESelect;
    outcomeA?: OutcomeESelect;
    outcomeB?: OutcomeESelect;
    children?: SituationESelect;
    situationFactorPositions?: SituationFactorPositionESelect;
    solutions?: SolutionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
    category?: CategoryEOptionalId;
    parent?: SituationEOptionalId;
    outcomeA?: OutcomeEOptionalId;
    outcomeB?: OutcomeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph extends SituationEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    category?: CategoryGraph;
    parent?: SituationGraph;
    outcomeA?: OutcomeGraph;
    outcomeB?: OutcomeGraph;
    children?: SituationGraph[];
    situationFactorPositions?: SituationFactorPositionGraph[];
    solutions?: SolutionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    CATEGORIES_RID_1?: number | IQNumberField;
    CATEGORIES_AID_1?: number | IQNumberField;
    CATEGORIES_ARID_1?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
    OUTCOMES_RID_1?: number | IQNumberField;
    OUTCOMES_AID_1?: number | IQNumberField;
    OUTCOMES_ARID_1?: number | IQNumberField;
    OUTCOMES_RID_2?: number | IQNumberField;
    OUTCOMES_AID_2?: number | IQNumberField;
    OUTCOMES_ARID_2?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties extends Partial<SituationEId>, SituationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns extends SituationEId, SituationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QRepositoryEntity<Situation> {
    name: IQStringField;
    category: QCategoryQRelation;
    parent: QSituationQRelation;
    outcomeA: QOutcomeQRelation;
    outcomeB: QOutcomeQRelation;
    children: IQOneToManyRelation<Situation, QSituation>;
    situationFactorPositions: IQOneToManyRelation<SituationFactorPosition, QSituationFactorPosition>;
    solutions: IQOneToManyRelation<Solution, QSolution>;
}
export interface QSituationQId extends QRepositoryEntityQId {
}
export interface QSituationQRelation extends QRepositoryEntityQRelation<Situation, QSituation>, QSituationQId {
}
//# sourceMappingURL=qsituation.d.ts.map