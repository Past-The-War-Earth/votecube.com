import { IQDateField, IQNumberField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '@sapoto/core';
import { AgreementGraph, AgreementESelect, QAgreement } from '../agreement/qagreement';
import { IAgreement } from '../agreement/agreement';
import { ReasonGraph, ReasonESelect, QReason } from './qreason';
import { IReason } from './reason';
import { ISituationIdea } from './situationidea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationIdeaESelect extends RepositoryEntityESelect, SituationIdeaEOptionalId {
    agreementTotal?: number | IQNumberField;
    numberOfAgreementRatings?: number | IQNumberField;
    idea?: IdeaESelect;
    situation?: SituationESelect;
    agreements?: AgreementESelect;
    reasons?: ReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationIdeaEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationIdeaEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationIdeaEUpdateProperties extends RepositoryEntityEUpdateProperties {
    agreementTotal?: number | IQNumberField;
    numberOfAgreementRatings?: number | IQNumberField;
    idea?: IdeaEOptionalId;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationIdeaGraph extends SituationIdeaEOptionalId, RepositoryEntityGraph {
    agreementTotal?: number | IQNumberField;
    numberOfAgreementRatings?: number | IQNumberField;
    idea?: IdeaGraph;
    situation?: SituationGraph;
    agreements?: AgreementGraph[];
    reasons?: ReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationIdeaEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    AGREEMENTTOTAL?: number | IQNumberField;
    NUMBEROFAGREEMENTRATINGS?: number | IQNumberField;
    IDEAS_RID_1?: number | IQNumberField;
    IDEAS_AID_1?: number | IQNumberField;
    IDEAS_ARID_1?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationIdeaECreateProperties extends Partial<SituationIdeaEId>, SituationIdeaEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationIdeaECreateColumns extends SituationIdeaEId, SituationIdeaEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationIdea extends QRepositoryEntity {
    agreementTotal: IQNumberField;
    numberOfAgreementRatings: IQNumberField;
    idea: QIdeaQRelation;
    situation: QSituationQRelation;
    agreements: IQRepositoryEntityOneToManyRelation<IAgreement, QAgreement>;
    reasons: IQRepositoryEntityOneToManyRelation<IReason, QReason>;
}
export interface QSituationIdeaQId extends QRepositoryEntityQId {
}
export interface QSituationIdeaQRelation extends QRepositoryEntityQRelation<ISituationIdea, QSituationIdea>, QSituationIdeaQId {
}
//# sourceMappingURL=qsituationidea.d.ts.map