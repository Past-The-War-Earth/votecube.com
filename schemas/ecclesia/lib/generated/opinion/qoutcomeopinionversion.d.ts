import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQOneToManyRelation, IQEntity, IQRelation } from '@airport/air-control';
import { PollRevisionOpinionGraph, PollRevisionOpinionEOptionalId, PollRevisionOpinionESelect, QPollRevisionOpinionQRelation } from './qpollrevisionopinion';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from '../poll/revision/qoutcome';
import { OutcomeOpinionVersionTranslationGraph, OutcomeOpinionVersionTranslationESelect, QOutcomeOpinionVersionTranslation } from './translation/qoutcomeopinionversiontranslation';
import { OutcomeOpinionVersionTranslation } from '../../ddl/opinion/translation/OutcomeOpinionVersionTranslation';
import { OutcomeOpinionVersion } from '../../ddl/opinion/OutcomeOpinionVersion';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionESelect extends IEntitySelectProperties, OutcomeOpinionVersionEOptionalId {
    pollRevisionOpinion?: PollRevisionOpinionESelect;
    outcome?: OutcomeESelect;
    parent?: OutcomeOpinionVersionESelect;
    children?: OutcomeOpinionVersionESelect;
    translations?: OutcomeOpinionVersionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionEUpdateProperties extends IEntityUpdateProperties {
    pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
    outcome?: OutcomeEOptionalId;
    parent?: OutcomeOpinionVersionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionGraph extends OutcomeOpinionVersionEOptionalId, IEntityCascadeGraph {
    pollRevisionOpinion?: PollRevisionOpinionGraph;
    outcome?: OutcomeGraph;
    parent?: OutcomeOpinionVersionGraph;
    children?: OutcomeOpinionVersionGraph[];
    translations?: OutcomeOpinionVersionTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionEUpdateColumns extends IEntityUpdateColumns {
    POLL_REVISION_OPINION_ID?: number | IQNumberField;
    OUTCOME_ID?: number | IQNumberField;
    PARENT_OUTCOME_OPINION_VERSION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionECreateProperties extends Partial<OutcomeOpinionVersionEId>, OutcomeOpinionVersionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionECreateColumns extends OutcomeOpinionVersionEId, OutcomeOpinionVersionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersion extends IQEntity<OutcomeOpinionVersion> {
    id: IQNumberField;
    pollRevisionOpinion: QPollRevisionOpinionQRelation;
    outcome: QOutcomeQRelation;
    parent: QOutcomeOpinionVersionQRelation;
    children: IQOneToManyRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>;
    translations: IQOneToManyRelation<OutcomeOpinionVersionTranslation, QOutcomeOpinionVersionTranslation>;
}
export interface QOutcomeOpinionVersionQId {
    id: IQNumberField;
}
export interface QOutcomeOpinionVersionQRelation extends IQRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>, QOutcomeOpinionVersionQId {
}
//# sourceMappingURL=qoutcomeopinionversion.d.ts.map