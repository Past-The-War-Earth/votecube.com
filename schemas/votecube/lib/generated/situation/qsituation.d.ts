import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { ForumThreadGraph, ForumThreadEOptionalId, ForumThreadESelect, QForumThreadQRelation } from '@votecube/forum/lib/server';
import { SituationLabelGraph, SituationLabelESelect, QSituationLabel } from './qsituationlabel';
import { SituationLabel } from '../../ddl/situation/SituationLabel';
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
    outcomeA?: OutcomeESelect;
    outcomeB?: OutcomeESelect;
    thread?: ForumThreadESelect;
    children?: SituationESelect;
    situationLabels?: SituationLabelESelect;
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
    outcomeA?: OutcomeEOptionalId;
    outcomeB?: OutcomeEOptionalId;
    thread?: ForumThreadEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph extends SituationEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    outcomeA?: OutcomeGraph;
    outcomeB?: OutcomeGraph;
    thread?: ForumThreadGraph;
    children?: SituationGraph[];
    situationLabels?: SituationLabelGraph[];
    situationFactorPositions?: SituationFactorPositionGraph[];
    solutions?: SolutionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    OUTCOMES_RID_1?: number | IQNumberField;
    OUTCOMES_AID_1?: number | IQNumberField;
    OUTCOMES_ARID_1?: number | IQNumberField;
    OUTCOMES_RID_2?: number | IQNumberField;
    OUTCOMES_AID_2?: number | IQNumberField;
    OUTCOMES_ARID_2?: number | IQNumberField;
    FORUM_THREAD_RID_1?: number | IQNumberField;
    FORUM_THREAD_AID_1?: number | IQNumberField;
    FORUM_THREAD_ARID_1?: number | IQNumberField;
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
    outcomeA: QOutcomeQRelation;
    outcomeB: QOutcomeQRelation;
    thread: QForumThreadQRelation;
    children: IQOneToManyRelation<Situation, QSituation>;
    situationLabels: IQOneToManyRelation<SituationLabel, QSituationLabel>;
    situationFactorPositions: IQOneToManyRelation<SituationFactorPosition, QSituationFactorPosition>;
    solutions: IQOneToManyRelation<Solution, QSolution>;
}
export interface QSituationQId extends QRepositoryEntityQId {
}
export interface QSituationQRelation extends QRepositoryEntityQRelation<Situation, QSituation>, QSituationQId {
}
//# sourceMappingURL=qsituation.d.ts.map