import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../../infrastructure/row/qimmutableactorrow';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from '../qoutcome';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../../infrastructure/qlanguage';
import { TranslationTypeGraph, TranslationTypeEOptionalId, TranslationTypeESelect, QTranslationTypeQRelation } from '../../../infrastructure/qtranslationtype';
import { OutcomeTranslation } from '../../../../ddl/poll/revision/translation/OutcomeTranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeTranslationESelect extends ImmutableActorRowESelect, OutcomeTranslationEOptionalId {
    name?: string | IQStringField;
    outcome?: OutcomeESelect;
    language?: LanguageESelect;
    type?: TranslationTypeESelect;
    parent?: OutcomeTranslationESelect;
    children?: OutcomeTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    outcome?: OutcomeEOptionalId;
    language?: LanguageEOptionalId;
    type?: TranslationTypeEOptionalId;
    parent?: OutcomeTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeTranslationGraph extends OutcomeTranslationEOptionalId, ImmutableActorRowGraph {
    name?: string | IQStringField;
    outcome?: OutcomeGraph;
    language?: LanguageGraph;
    type?: TranslationTypeGraph;
    parent?: OutcomeTranslationGraph;
    children?: OutcomeTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    OUTCOME_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    TRANSLATION_TYPE_ID?: number | IQNumberField;
    PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeTranslationECreateProperties extends Partial<OutcomeTranslationEId>, OutcomeTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeTranslationECreateColumns extends OutcomeTranslationEId, OutcomeTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeTranslation extends QImmutableActorRow<OutcomeTranslation> {
    id: IQNumberField;
    name: IQStringField;
    outcome: QOutcomeQRelation;
    language: QLanguageQRelation;
    type: QTranslationTypeQRelation;
    parent: QOutcomeTranslationQRelation;
    children: IQOneToManyRelation<OutcomeTranslation, QOutcomeTranslation>;
}
export interface QOutcomeTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QOutcomeTranslationQRelation extends QImmutableActorRowQRelation<OutcomeTranslation, QOutcomeTranslation>, QOutcomeTranslationQId {
}
//# sourceMappingURL=qoutcometranslation.d.ts.map