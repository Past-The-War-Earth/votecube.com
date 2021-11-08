import { IQNumberField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from './qsituation';
import { LabelGraph, LabelEOptionalId, LabelESelect, QLabelQRelation } from '../qlabel';
import { SituationLabel } from '../../ddl/situation/SituationLabel';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationLabelESelect extends RepositoryEntityESelect, SituationLabelEOptionalId {
    situation?: SituationESelect;
    label?: LabelESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationLabelEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationLabelEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationLabelEUpdateProperties extends RepositoryEntityEUpdateProperties {
    situation?: SituationEOptionalId;
    label?: LabelEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationLabelGraph extends SituationLabelEOptionalId, RepositoryEntityGraph {
    situation?: SituationGraph;
    label?: LabelGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationLabelEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
    LABELS_RID_1?: number | IQNumberField;
    LABELS_AID_1?: number | IQNumberField;
    LABELS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationLabelECreateProperties extends Partial<SituationLabelEId>, SituationLabelEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationLabelECreateColumns extends SituationLabelEId, SituationLabelEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationLabel extends QRepositoryEntity<SituationLabel> {
    situation: QSituationQRelation;
    label: QLabelQRelation;
}
export interface QSituationLabelQId extends QRepositoryEntityQId {
}
export interface QSituationLabelQRelation extends QRepositoryEntityQRelation<SituationLabel, QSituationLabel>, QSituationLabelQId {
}
//# sourceMappingURL=qsituationlabel.d.ts.map