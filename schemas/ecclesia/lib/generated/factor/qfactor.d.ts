import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-control';
import { AgeSuitableRowGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../infrastructure/row/qagesuitablerow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../poll/revision/qpollrevision';
import { FactorTranslationGraph, FactorTranslationEOptionalId, FactorTranslationESelect, QFactorTranslation, QFactorTranslationQRelation } from './qfactortranslation';
import { FactorTranslation } from '../../ddl/factor/FactorTranslation';
import { FactorPositionGraph, FactorPositionESelect, QFactorPosition } from './position/qfactorposition';
import { FactorPosition } from '../../ddl/factor/position/FactorPosition';
import { Factor } from '../../ddl/factor/Factor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect extends AgeSuitableRowESelect, FactorEOptionalId {
    createdAtPollRevision?: PollRevisionESelect;
    parentTranslation?: FactorTranslationESelect;
    parent?: FactorESelect;
    children?: FactorESelect;
    factorPositions?: FactorPositionESelect;
    translations?: FactorTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId extends AgeSuitableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    createdAtPollRevision?: PollRevisionEOptionalId;
    parentTranslation?: FactorTranslationEOptionalId;
    parent?: FactorEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorGraph extends FactorEOptionalId, AgeSuitableRowGraph {
    createdAtPollRevision?: PollRevisionGraph;
    parentTranslation?: FactorTranslationGraph;
    parent?: FactorGraph;
    children?: FactorGraph[];
    factorPositions?: FactorPositionGraph[];
    translations?: FactorTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;
    PARENT_FACTOR_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties extends Partial<FactorEId>, FactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns extends FactorEId, FactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QAgeSuitableRow<Factor> {
    id: IQNumberField;
    createdAtPollRevision: QPollRevisionQRelation;
    parentTranslation: QFactorTranslationQRelation;
    parent: QFactorQRelation;
    children: IQOneToManyRelation<Factor, QFactor>;
    factorPositions: IQOneToManyRelation<FactorPosition, QFactorPosition>;
    translations: IQOneToManyRelation<FactorTranslation, QFactorTranslation>;
}
export interface QFactorQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QFactorQRelation extends QAgeSuitableRowQRelation<Factor, QFactor>, QFactorQId {
}
//# sourceMappingURL=qfactor.d.ts.map