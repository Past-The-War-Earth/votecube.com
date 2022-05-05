import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-traffic-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactor, QFactorQRelation } from './qfactor';
import { Factor } from '../../ddl/factor/Factor';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../infrastructure/qlanguage';
import { FactorTranslation } from '../../ddl/factor/FactorTranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorTranslationESelect extends ImmutableActorRowESelect, FactorTranslationEOptionalId {
    name?: string | IQStringField;
    factor?: FactorESelect;
    language?: LanguageESelect;
    parent?: FactorTranslationESelect;
    children?: FactorTranslationESelect;
    childFactors?: FactorESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    factor?: FactorEOptionalId;
    language?: LanguageEOptionalId;
    parent?: FactorTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorTranslationGraph extends FactorTranslationEOptionalId, ImmutableActorRowGraph {
    name?: string | IQStringField;
    factor?: FactorGraph;
    language?: LanguageGraph;
    parent?: FactorTranslationGraph;
    children?: FactorTranslationGraph[];
    childFactors?: FactorGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    FACTOR_NAME?: string | IQStringField;
    FACTOR_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorTranslationECreateProperties extends Partial<FactorTranslationEId>, FactorTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorTranslationECreateColumns extends FactorTranslationEId, FactorTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorTranslation extends QImmutableActorRow<FactorTranslation> {
    id: IQNumberField;
    name: IQStringField;
    factor: QFactorQRelation;
    language: QLanguageQRelation;
    parent: QFactorTranslationQRelation;
    children: IQOneToManyRelation<FactorTranslation, QFactorTranslation>;
    childFactors: IQOneToManyRelation<Factor, QFactor>;
}
export interface QFactorTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QFactorTranslationQRelation extends QImmutableActorRowQRelation<FactorTranslation, QFactorTranslation>, QFactorTranslationQId {
}
//# sourceMappingURL=qfactortranslation.d.ts.map