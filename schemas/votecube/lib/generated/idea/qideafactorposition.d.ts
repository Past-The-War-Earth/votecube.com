import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../factor/qfactor';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from '../factor/qposition';
import { IdeaFactorPosition } from '../../ddl/idea/IdeaFactorPosition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaFactorPositionESelect extends RepositoryEntityESelect, IdeaFactorPositionEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    idea?: IdeaESelect;
    factor?: FactorESelect;
    position?: PositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaFactorPositionEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaFactorPositionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaFactorPositionEUpdateProperties extends RepositoryEntityEUpdateProperties {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    idea?: IdeaEOptionalId;
    factor?: FactorEOptionalId;
    position?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaFactorPositionGraph extends IdeaFactorPositionEOptionalId, RepositoryEntityGraph {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    idea?: IdeaGraph;
    factor?: FactorGraph;
    position?: PositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaFactorPositionEUpdateColumns extends RepositoryEntityEUpdateColumns {
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
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
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
export interface IdeaFactorPositionECreateProperties extends Partial<IdeaFactorPositionEId>, IdeaFactorPositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaFactorPositionECreateColumns extends IdeaFactorPositionEId, IdeaFactorPositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaFactorPosition extends QRepositoryEntity<IdeaFactorPosition> {
    axis: IQStringField;
    dir: IQNumberField;
    factorNumber: IQNumberField;
    blue: IQNumberField;
    green: IQNumberField;
    red: IQNumberField;
    outcomeOrdinal: IQStringField;
    idea: QIdeaQRelation;
    factor: QFactorQRelation;
    position: QPositionQRelation;
}
export interface QIdeaFactorPositionQId extends QRepositoryEntityQId {
}
export interface QIdeaFactorPositionQRelation extends QRepositoryEntityQRelation<IdeaFactorPosition, QIdeaFactorPosition>, QIdeaFactorPositionQId {
}
//# sourceMappingURL=qideafactorposition.d.ts.map