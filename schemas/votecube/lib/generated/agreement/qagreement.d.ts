import { IQDateField, IQNumberField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '../idea/qsituationidea';
import { AgreementReasonGraph, AgreementReasonESelect, QAgreementReason } from './qagreementreason';
import { IAgreementReason } from './agreementreason';
import { IAgreement } from './agreement';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementESelect extends RepositoryEntityESelect, AgreementEOptionalId {
    situationIdea?: SituationIdeaESelect;
    agreementReasons?: AgreementReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgreementEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementEUpdateProperties extends RepositoryEntityEUpdateProperties {
    situationIdea?: SituationIdeaEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementGraph extends AgreementEOptionalId, RepositoryEntityGraph {
    situationIdea?: SituationIdeaGraph;
    agreementReasons?: AgreementReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementECreateProperties extends Partial<AgreementEId>, AgreementEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementECreateColumns extends AgreementEId, AgreementEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreement extends QRepositoryEntity {
    situationIdea: QSituationIdeaQRelation;
    agreementReasons: IQRepositoryEntityOneToManyRelation<IAgreementReason, QAgreementReason>;
}
export interface QAgreementQId extends QRepositoryEntityQId {
}
export interface QAgreementQRelation extends QRepositoryEntityQRelation<IAgreement, QAgreement>, QAgreementQId {
}
//# sourceMappingURL=qagreement.d.ts.map