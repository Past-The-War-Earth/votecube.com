import { IQNumberField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IdeaGraph, IdeaEOptionalId, IdeaESelect, QIdeaQRelation } from './qidea';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '@sapoto/core/lib/app';
import { AgreementGraph, AgreementESelect, QAgreement } from '../agreement/qagreement';
import { IAgreement } from '../agreement/agreement';
import { ReasonGraph, ReasonESelect, QReason } from './qreason';
import { IReason } from './reason';
import { IIdeaSituation } from './ideasituation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaSituationESelect extends RepositoryEntityESelect, IdeaSituationEOptionalId {
    idea?: IdeaESelect;
    situation?: SituationESelect;
    agreements?: AgreementESelect;
    reasons?: ReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaSituationEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaSituationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaSituationEUpdateProperties extends RepositoryEntityEUpdateProperties {
    idea?: IdeaEOptionalId;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaSituationGraph extends IdeaSituationEOptionalId, RepositoryEntityGraph {
    idea?: IdeaGraph;
    situation?: SituationGraph;
    agreements?: AgreementGraph[];
    reasons?: ReasonGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaSituationEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
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
export interface IdeaSituationECreateProperties extends Partial<IdeaSituationEId>, IdeaSituationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaSituationECreateColumns extends IdeaSituationEId, IdeaSituationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaSituation extends QRepositoryEntity {
    idea: QIdeaQRelation;
    situation: QSituationQRelation;
    agreements: IQRepositoryEntityOneToManyRelation<IAgreement, QAgreement>;
    reasons: IQRepositoryEntityOneToManyRelation<IReason, QReason>;
}
export interface QIdeaSituationQId extends QRepositoryEntityQId {
}
export interface QIdeaSituationQRelation extends QRepositoryEntityQRelation<IIdeaSituation, QIdeaSituation>, QIdeaSituationQId {
}
//# sourceMappingURL=qideasituation.d.ts.map