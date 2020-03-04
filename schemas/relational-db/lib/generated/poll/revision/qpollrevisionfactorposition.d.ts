import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableRowECascadeGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from '../../infrastructure/row/qimmutablerow';
import { SkinEOptionalId, SkinESelect, QSkinQRelation } from '../../factor/qskin';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from './qpollrevision';
import { FactorPositionEOptionalId, FactorPositionESelect, QFactorPositionQRelation } from '../../factor/position/qfactorposition';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorPositionESelect extends ImmutableRowESelect, PollRevisionFactorPositionEOptionalId {
    axis?: string | IQStringField;
    dir?: number | IQNumberField;
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
    skin?: SkinEOptionalId;
    pollRevision?: PollRevisionEOptionalId;
    factorPosition?: FactorPositionEOptionalId;
    parent?: PollRevisionFactorPositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorPositionECascadeGraph extends ImmutableRowECascadeGraph {
    children?: PollRevisionFactorPositionECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorPositionEUpdateColumns extends ImmutableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    FACTOR_COORDINATE_AXIS?: string | IQStringField;
    POSITION_ORIENTATION?: number | IQNumberField;
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
export interface QPollRevisionFactorPosition extends QImmutableRow {
    id: IQNumberField;
    axis: IQStringField;
    dir: IQNumberField;
    skin: QSkinQRelation;
    pollRevision: QPollRevisionQRelation;
    factorPosition: QFactorPositionQRelation;
    parent: QPollRevisionFactorPositionQRelation;
    children: IQOneToManyRelation<QPollRevisionFactorPosition>;
}
export interface QPollRevisionFactorPositionQId extends QImmutableRowQId {
    id: IQNumberField;
}
export interface QPollRevisionFactorPositionQRelation extends QImmutableRowQRelation<QPollRevisionFactorPosition>, QPollRevisionFactorPositionQId {
}
