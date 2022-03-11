import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { ForumThreadGraph, ForumThreadEOptionalId, ForumThreadESelect, QForumThreadQRelation } from '@votecube/forum/lib/server';
import { IdeaLabelGraph, IdeaLabelESelect, QIdeaLabel } from './qidealabel';
import { IdeaLabel } from '../../ddl/idea/IdeaLabel';
import { IdeaFactorPositionGraph, IdeaFactorPositionESelect, QIdeaFactorPosition } from './qideafactorposition';
import { IdeaFactorPosition } from '../../ddl/idea/IdeaFactorPosition';
import { AgreementGraph, AgreementESelect, QAgreement } from '../agreement/qagreement';
import { Agreement } from '../../ddl/agreement/Agreement';
import { Idea } from '../../ddl/idea/Idea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect extends RepositoryEntityESelect, IdeaEOptionalId {
    name?: string | IQStringField;
    outcomeA?: OutcomeESelect;
    outcomeB?: OutcomeESelect;
    thread?: ForumThreadESelect;
    children?: IdeaESelect;
    ideaLabels?: IdeaLabelESelect;
    ideaFactorPositions?: IdeaFactorPositionESelect;
    agreements?: AgreementESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
    outcomeA?: OutcomeEOptionalId;
    outcomeB?: OutcomeEOptionalId;
    thread?: ForumThreadEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph extends IdeaEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    outcomeA?: OutcomeGraph;
    outcomeB?: OutcomeGraph;
    thread?: ForumThreadGraph;
    children?: IdeaGraph[];
    ideaLabels?: IdeaLabelGraph[];
    ideaFactorPositions?: IdeaFactorPositionGraph[];
    agreements?: AgreementGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
    OUTCOMES_RID_1?: number | IQNumberField;
    OUTCOMES_AID_1?: number | IQNumberField;
    OUTCOMES_ARID_1?: number | IQNumberField;
    OUTCOMES_RID_2?: number | IQNumberField;
    OUTCOMES_AID_2?: number | IQNumberField;
    OUTCOMES_ARID_2?: number | IQNumberField;
    FORUM_THREAD_RID_1?: number | IQNumberField;
    FORUM_THREAD_AID_1?: number | IQNumberField;
    FORUM_THREAD_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaECreateProperties extends Partial<IdeaEId>, IdeaEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaECreateColumns extends IdeaEId, IdeaEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdea extends QRepositoryEntity<Idea> {
    name: IQStringField;
    outcomeA: QOutcomeQRelation;
    outcomeB: QOutcomeQRelation;
    thread: QForumThreadQRelation;
    children: IQOneToManyRelation<Idea, QIdea>;
    ideaLabels: IQOneToManyRelation<IdeaLabel, QIdeaLabel>;
    ideaFactorPositions: IQOneToManyRelation<IdeaFactorPosition, QIdeaFactorPosition>;
    agreements: IQOneToManyRelation<Agreement, QAgreement>;
}
export interface QIdeaQId extends QRepositoryEntityQId {
}
export interface QIdeaQRelation extends QRepositoryEntityQRelation<Idea, QIdea>, QIdeaQId {
}
//# sourceMappingURL=qidea.d.ts.map