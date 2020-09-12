import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionOpinionGraph, PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from './qpollrevisionopinion';
import { FactorGraph, FactorEOptionalId, FactorESelect, QFactorQRelation } from '../factor/qfactor';
import { FactorOpinionVersionTranslationGraph, FactorOpinionVersionTranslationESelect, QFactorOpinionVersionTranslation } from './translation/qfactoropinionversiontranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionESelect extends IEntitySelectProperties, FactorOpinionVersionEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    factor?: FactorESelect;
    parent?: FactorOpinionVersionESelect;
    children?: FactorOpinionVersionESelect;
    translations?: FactorOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    factor?: FactorEOptionalId;
    parent?: FactorOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionGraph extends IEntitySelectProperties, FactorOpinionVersionEOptionalId, IEntityCascadeGraph {
    pollRevisionOpinion?: PollRevisionOpinionGraph;
    factor?: FactorGraph;
    parent?: FactorOpinionVersionGraph;
    children?: FactorOpinionVersionGraph[];
    translations?: FactorOpinionVersionTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    FACTOR_ID?: number | IQNumberField;
    PARENT_FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionECreateProperties extends Partial<FactorOpinionVersionEId>, FactorOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionECreateColumns extends FactorOpinionVersionEId, FactorOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersion extends IQEntity {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    factor: QFactorQRelation;
    parent: QFactorOpinionVersionQRelation;
    children: IQOneToManyRelation<QFactorOpinionVersion>;
    translations: IQOneToManyRelation<QFactorOpinionVersionTranslation>;
}
export interface QFactorOpinionVersionQId {
    id: IQNumberField;
}
export interface QFactorOpinionVersionQRelation extends IQRelation<QFactorOpinionVersion>, QFactorOpinionVersionQId {
}
