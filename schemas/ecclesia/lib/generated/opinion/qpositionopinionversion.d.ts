import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-traffic-control';
import { PollRevisionOpinionGraph, PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from './qpollrevisionopinion';
import { PollRevisionFactorPositionGraph, PollRevisionFactorPositionEOptionalId, PollRevisionFactorPositionESelect, QPollRevisionFactorPositionQRelation } from '../poll/revision/qpollrevisionfactorposition';
import { PositionOpinionVersionTranslationGraph, PositionOpinionVersionTranslationESelect, QPositionOpinionVersionTranslation } from './translation/qpositionopinionversiontranslation';
import { PositionOpinionVersionTranslation } from '../../ddl/opinion/translation/PositionOpinionVersionTranslation';
import { PositionOpinionVersion } from '../../ddl/opinion/PositionOpinionVersion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionESelect extends IEntitySelectProperties, PositionOpinionVersionEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    factorPosition?: PollRevisionFactorPositionESelect;
    parent?: PositionOpinionVersionESelect;
    children?: PositionOpinionVersionESelect;
    translations?: PositionOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    factorPosition?: PollRevisionFactorPositionEOptionalId;
    parent?: PositionOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionGraph extends PositionOpinionVersionEOptionalId, IEntityCascadeGraph {
    pollRevisionOpinion?: PollRevisionOpinionGraph;
    factorPosition?: PollRevisionFactorPositionGraph;
    parent?: PositionOpinionVersionGraph;
    children?: PositionOpinionVersionGraph[];
    translations?: PositionOpinionVersionTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;
    PARENT_POSITION_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionECreateProperties extends Partial<PositionOpinionVersionEId>, PositionOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionECreateColumns extends PositionOpinionVersionEId, PositionOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersion extends IQEntity<PositionOpinionVersion> {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    factorPosition: QPollRevisionFactorPositionQRelation;
    parent: QPositionOpinionVersionQRelation;
    children: IQOneToManyRelation<PositionOpinionVersion, QPositionOpinionVersion>;
    translations: IQOneToManyRelation<PositionOpinionVersionTranslation, QPositionOpinionVersionTranslation>;
}
export interface QPositionOpinionVersionQId {
    id: IQNumberField;
}
export interface QPositionOpinionVersionQRelation extends IQRelation<PositionOpinionVersion, QPositionOpinionVersion>, QPositionOpinionVersionQId {
}
//# sourceMappingURL=qpositionopinionversion.d.ts.map