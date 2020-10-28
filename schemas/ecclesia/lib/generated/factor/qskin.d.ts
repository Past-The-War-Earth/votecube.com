import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SkinESelect extends ImmutableActorRowESelect, SkinEOptionalId {
    backgroundColor?: number | IQNumberField;
    textColor?: number | IQNumberField;
    parent?: SkinESelect;
    children?: SkinESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SkinEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface SkinEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SkinEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    backgroundColor?: number | IQNumberField;
    textColor?: number | IQNumberField;
    parent?: SkinEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SkinGraph extends SkinEOptionalId, ImmutableActorRowGraph {
    backgroundColor?: number | IQNumberField;
    textColor?: number | IQNumberField;
    parent?: SkinGraph;
    children?: SkinGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SkinEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    BACKGROUND_COLOR_ID?: number | IQNumberField;
    TEXT_COLOR_ID?: number | IQNumberField;
    PARENT_SKIN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SkinECreateProperties extends Partial<SkinEId>, SkinEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SkinECreateColumns extends SkinEId, SkinEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSkin extends QImmutableActorRow {
    id: IQNumberField;
    backgroundColor: IQNumberField;
    textColor: IQNumberField;
    parent: QSkinQRelation;
    children: IQOneToManyRelation<QSkin>;
}
export interface QSkinQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QSkinQRelation extends QImmutableActorRowQRelation<QSkin>, QSkinQId {
}
//# sourceMappingURL=qskin.d.ts.map