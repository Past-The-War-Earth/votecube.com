import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../../infrastructure/row/qimmutableactorrow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../qpollrevision';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../../infrastructure/qlanguage';
import { TranslationTypeGraph, TranslationTypeEOptionalId, TranslationTypeESelect, QTranslationTypeQRelation } from '../../../infrastructure/qtranslationtype';
import { PollRevisionTranslationRatingGraph, PollRevisionTranslationRatingESelect, QPollRevisionTranslationRating } from '../../rating/qpollrevisiontranslationrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationESelect extends ImmutableActorRowESelect, PollRevisionTranslationEOptionalId {
    name?: string | IQStringField;
    pollRevision?: PollRevisionESelect;
    language?: LanguageESelect;
    type?: TranslationTypeESelect;
    parent?: PollRevisionTranslationESelect;
    children?: PollRevisionTranslationESelect;
    ratings?: PollRevisionTranslationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    pollRevision?: PollRevisionEOptionalId;
    language?: LanguageEOptionalId;
    type?: TranslationTypeEOptionalId;
    parent?: PollRevisionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationGraph extends ImmutableActorRowESelect, PollRevisionTranslationEOptionalId, ImmutableActorRowGraph {
    name?: string | IQStringField;
    pollRevision?: PollRevisionGraph;
    language?: LanguageGraph;
    type?: TranslationTypeGraph;
    parent?: PollRevisionTranslationGraph;
    children?: PollRevisionTranslationGraph[];
    ratings?: PollRevisionTranslationRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    POLL_NAME?: string | IQStringField;
    POLL_REVISION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    TRANSLATION_TYPE_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationECreateProperties extends Partial<PollRevisionTranslationEId>, PollRevisionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationECreateColumns extends PollRevisionTranslationEId, PollRevisionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslation extends QImmutableActorRow {
    id: IQNumberField;
    name: IQStringField;
    pollRevision: QPollRevisionQRelation;
    language: QLanguageQRelation;
    type: QTranslationTypeQRelation;
    parent: QPollRevisionTranslationQRelation;
    children: IQOneToManyRelation<QPollRevisionTranslation>;
    ratings: IQOneToManyRelation<QPollRevisionTranslationRating>;
}
export interface QPollRevisionTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionTranslationQRelation extends QImmutableActorRowQRelation<QPollRevisionTranslation>, QPollRevisionTranslationQId {
}
