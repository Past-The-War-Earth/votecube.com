import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableRowGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from '../../infrastructure/row/qimmutablerow';
import { SkinGraph, SkinEOptionalId, SkinESelect, QSkinQRelation } from '../../factor/qskin';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from './qpollrevision';
import { FactorPositionGraph, FactorPositionEOptionalId, FactorPositionESelect, QFactorPositionQRelation } from '../../factor/position/qfactorposition';
import { PollRevisionFactorPosition } from '../../../ddl/poll/revision/PollRevisionFactorPosition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorPositionESelect extends ImmutableRowESelect, PollRevisionFactorPositionEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    skin?: SkinESelect;
    pollRevision?: PollRevisionESelect;
    factorPosition?: FactorPositionESelect;
    parent?: PollRevisionFactorPositionESelect;
    children?: PollRevisionFactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionFactorPositionEId extends ImmutableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionFactorPositionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionEUpdateProperties extends ImmutableRowEUpdateProperties {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    skin?: SkinEOptionalId;
    pollRevision?: PollRevisionEOptionalId;
    factorPosition?: FactorPositionEOptionalId;
    parent?: PollRevisionFactorPositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorPositionGraph extends PollRevisionFactorPositionEOptionalId, ImmutableRowGraph {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
    factorNumber?: number | IQNumberField;
    blue?: number | IQNumberField;
    green?: number | IQNumberField;
    red?: number | IQNumberField;
    outcomeOrdinal?: string | IQStringField;
    skin?: SkinGraph;
    pollRevision?: PollRevisionGraph;
    factorPosition?: FactorPositionGraph;
    parent?: PollRevisionFactorPositionGraph;
    children?: PollRevisionFactorPositionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorPositionEUpdateColumns extends ImmutableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    FACTOR_COORDINATE_AXIS?: string | IQStringField;
    POSITION_ORIENTATION?: number | IQNumberField;
    FACTOR_NUMBER?: number | IQNumberField;
    COLOR_BLUE?: number | IQNumberField;
    COLOR_GREEN?: number | IQNumberField;
    COLOR_RED?: number | IQNumberField;
    OUTCOME_ORDINAL?: string | IQStringField;
    SKIN_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    FACTOR_ID?: number | IQNumberField;
    POSITION_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionECreateProperties extends Partial<PollRevisionFactorPositionEId>, PollRevisionFactorPositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionFactorPositionECreateColumns extends PollRevisionFactorPositionEId, PollRevisionFactorPositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionFactorPosition extends QImmutableRow<PollRevisionFactorPosition> {
    id: IQNumberField;
    axis: IQStringField;
    dir: IQNumberField;
    factorNumber: IQNumberField;
    blue: IQNumberField;
    green: IQNumberField;
    red: IQNumberField;
    outcomeOrdinal: IQStringField;
    skin: QSkinQRelation;
    pollRevision: QPollRevisionQRelation;
    factorPosition: QFactorPositionQRelation;
    parent: QPollRevisionFactorPositionQRelation;
    children: IQOneToManyRelation<PollRevisionFactorPosition, QPollRevisionFactorPosition>;
}
export interface QPollRevisionFactorPositionQId extends QImmutableRowQId {
    id: IQNumberField;
}
export interface QPollRevisionFactorPositionQRelation extends QImmutableRowQRelation<PollRevisionFactorPosition, QPollRevisionFactorPosition>, QPollRevisionFactorPositionQId {
}
//# sourceMappingURL=qpollrevisionfactorposition.d.ts.map