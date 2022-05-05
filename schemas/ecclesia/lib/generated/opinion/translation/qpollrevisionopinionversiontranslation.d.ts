import { IQBooleanField, IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../../infrastructure/row/qsystemgeneratedrow';
import { PollRevisionOpinionVersionGraph, PollRevisionOpinionVersionEOptionalId, PollRevisionOpinionVersionESelect, QPollRevisionOpinionVersionQRelation } from '../qpollrevisionopinionversion';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
import { PollRevisionOpinionVersionTranslation } from '../../../ddl/opinion/translation/PollRevisionOpinionVersionTranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationESelect extends SystemGeneratedRowESelect, PollRevisionOpinionVersionTranslationEOptionalId {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    opinionVersion?: PollRevisionOpinionVersionESelect;
    language?: LanguageESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionTranslationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    opinionVersion?: PollRevisionOpinionVersionEOptionalId;
    language?: LanguageEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationGraph extends PollRevisionOpinionVersionTranslationEOptionalId, SystemGeneratedRowGraph {
    original?: boolean | IQBooleanField;
    title?: string | IQStringField;
    text?: string | IQStringField;
    opinionVersion?: PollRevisionOpinionVersionGraph;
    language?: LanguageGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionTranslationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL?: boolean | IQBooleanField;
    POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE?: string | IQStringField;
    POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT?: string | IQStringField;
    POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationECreateProperties extends Partial<PollRevisionOpinionVersionTranslationEId>, PollRevisionOpinionVersionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionTranslationECreateColumns extends PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersionTranslation extends QSystemGeneratedRow<PollRevisionOpinionVersionTranslation> {
    id: IQNumberField;
    original: IQBooleanField;
    title: IQStringField;
    text: IQStringField;
    opinionVersion: QPollRevisionOpinionVersionQRelation;
    language: QLanguageQRelation;
}
export interface QPollRevisionOpinionVersionTranslationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QPollRevisionOpinionVersionTranslationQRelation extends QSystemGeneratedRowQRelation<PollRevisionOpinionVersionTranslation, QPollRevisionOpinionVersionTranslation>, QPollRevisionOpinionVersionTranslationQId {
}
//# sourceMappingURL=qpollrevisionopinionversiontranslation.d.ts.map