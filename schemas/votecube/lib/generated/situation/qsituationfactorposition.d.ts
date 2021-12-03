import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from './qsituation';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../factor/qfactor';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from '../factor/qposition';
import { SituationFactorPosition } from '../../ddl/situation/SituationFactorPosition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationFactorPositionESelect extends RepositoryEntityESelect, SituationFactorPositionEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situation?: SituationESelect;
    factor?: FactorESelect;
    position?: PositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationFactorPositionEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationFactorPositionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationFactorPositionEUpdateProperties extends RepositoryEntityEUpdateProperties {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situation?: SituationEOptionalId;
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationFactorPositionGraph extends SituationFactorPositionEOptionalId, RepositoryEntityGraph {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    situation?: SituationGraph;
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationFactorPositionEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    FACTOR_COORDINATE_AXIS?: string | IQStringField;
    POSITION_ORIENTATION?: number | IQNumberField;
    FACTOR_NUMBER?: number | IQNumberField;
    COLOR_BLUE?: number | IQNumberField;
    COLOR_GREEN?: number | IQNumberField;
    COLOR_RED?: number | IQNumberField;
    OUTCOME_ORDINAL?: string | IQStringField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
    FACTORS_RID_1?: number | IQNumberField;
    FACTORS_AID_1?: number | IQNumberField;
    FACTORS_ARID_1?: number | IQNumberField;
    POSITIONS_RID_1?: number | IQNumberField;
    POSITIONS_AID_1?: number | IQNumberField;
    POSITIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationFactorPositionECreateProperties extends Partial<SituationFactorPositionEId>, SituationFactorPositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationFactorPositionECreateColumns extends SituationFactorPositionEId, SituationFactorPositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationFactorPosition extends QRepositoryEntity<SituationFactorPosition> {
    axis: IQStringField;
    dir: IQNumberField;
    factorNumber: IQNumberField;
    blue: IQNumberField;
    green: IQNumberField;
    red: IQNumberField;
    outcomeOrdinal: IQStringField;
    situation: QSituationQRelation;
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QSituationFactorPositionQId extends QRepositoryEntityQId {
}
export interface QSituationFactorPositionQRelation extends QRepositoryEntityQRelation<SituationFactorPosition, QSituationFactorPosition>, QSituationFactorPositionQId {
}
//# sourceMappingURL=qsituationfactorposition.d.ts.map