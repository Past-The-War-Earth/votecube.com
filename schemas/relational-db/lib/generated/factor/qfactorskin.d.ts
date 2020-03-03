import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowECascadeGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { FactorEOptionalId, FactorESelect, QFactorQRelation } from './qfactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorSkinESelect extends ImmutableActorRowESelect, FactorSkinEOptionalId {
    backgroundColor?: number | IQNumberField;
    textColor?: number | IQNumberField;
    pollRevision?: PollRevisionESelect;
    factor?: FactorESelect;
    parent?: FactorSkinESelect;
    children?: FactorSkinESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorSkinEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorSkinEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorSkinEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    backgroundColor?: number | IQNumberField;
    textColor?: number | IQNumberField;
    pollRevision?: PollRevisionEOptionalId;
    factor?: FactorEOptionalId;
    parent?: FactorSkinEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorSkinECascadeGraph extends ImmutableActorRowECascadeGraph {
    children?: FactorSkinECascadeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorSkinEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    BACKGROUND_COLOR_ID?: number | IQNumberField;
    TEXT_COLOR_ID?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    FACTOR_ID?: number | IQNumberField;
    PARENT_FACTOR_SKIN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorSkinECreateProperties extends Partial<FactorSkinEId>, FactorSkinEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorSkinECreateColumns extends FactorSkinEId, FactorSkinEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorSkin extends QImmutableActorRow {
    id: IQNumberField;
    backgroundColor: IQNumberField;
    textColor: IQNumberField;
    pollRevision: QPollRevisionQRelation;
    factor: QFactorQRelation;
    parent: QFactorSkinQRelation;
    children: IQOneToManyRelation<QFactorSkin>;
}
export interface QFactorSkinQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorSkinQRelation extends QImmutableActorRowQRelation<QFactorSkin>, QFactorSkinQId {
}
