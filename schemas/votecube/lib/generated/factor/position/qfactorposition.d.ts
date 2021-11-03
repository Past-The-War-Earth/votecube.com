import { IQNumberField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../qfactor';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from './qposition';
import { FactorPosition } from '../../../ddl/factor/position/FactorPosition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorPositionESelect extends RepositoryEntityESelect, FactorPositionEOptionalId {
    factor?: FactorESelect;
    position?: PositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorPositionEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties extends RepositoryEntityEUpdateProperties {
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorPositionGraph extends FactorPositionEOptionalId, RepositoryEntityGraph {
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
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
export interface FactorPositionECreateProperties extends Partial<FactorPositionEId>, FactorPositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorPositionECreateColumns extends FactorPositionEId, FactorPositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorPosition extends QRepositoryEntity<FactorPosition> {
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QFactorPositionQId extends QRepositoryEntityQId {
}
export interface QFactorPositionQRelation extends QRepositoryEntityQRelation<FactorPosition, QFactorPosition>, QFactorPositionQId {
}
//# sourceMappingURL=qfactorposition.d.ts.map