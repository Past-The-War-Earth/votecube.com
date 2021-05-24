import { IQBooleanField, IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
import { OutcomeOpinionVersionGraph, OutcomeOpinionVersionEOptionalId, OutcomeOpinionVersionESelect, QOutcomeOpinionVersionQRelation } from '../qoutcomeopinionversion';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
import { OutcomeOpinionVersionTranslation } from '../../../ddl/opinion/translation/OutcomeOpinionVersionTranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationESelect extends SystemGeneratedRowESelect, OutcomeOpinionVersionTranslationEOptionalId {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    outcomeOpinionVersion?: OutcomeOpinionVersionESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    outcomeOpinionVersion?: OutcomeOpinionVersionEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionTranslationGraph extends OutcomeOpinionVersionTranslationEOptionalId, SystemGeneratedRowGraph {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    outcomeOpinionVersion?: OutcomeOpinionVersionGraph;
    language?: LanguageGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    IS_ORIGINAL?: boolean | IQBooleanField;
    TITLE?: string | IQStringField;
    TEXT?: string | IQStringField;
    OUTCOME_OPINION_VERSION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationECreateProperties extends Partial<OutcomeOpinionVersionTranslationEId>, OutcomeOpinionVersionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionTranslationECreateColumns extends OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersionTranslation extends QSystemGeneratedRow<OutcomeOpinionVersionTranslation> {
    id: IQNumberField;
    original: IQBooleanField;
    title: IQStringField;
    text: IQStringField;
    outcomeOpinionVersion: QOutcomeOpinionVersionQRelation;
    language: QLanguageQRelation;
}
export interface QOutcomeOpinionVersionTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QOutcomeOpinionVersionTranslationQRelation extends QSystemGeneratedRowQRelation<OutcomeOpinionVersionTranslation, QOutcomeOpinionVersionTranslation>, QOutcomeOpinionVersionTranslationQId {
}
//# sourceMappingURL=qoutcomeopinionversiontranslation.d.ts.map