import { IQNumberField, IQStringField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { OutcomeGraph, OutcomeEOptionalId, OutcomeESelect, QOutcomeQRelation } from './qoutcome';
import { IdeaLabelGraph, IdeaLabelESelect, QIdeaLabel } from './qidealabel';
import { IIdeaLabel } from './idealabel';
import { IdeaSituationGraph, IdeaSituationESelect, QIdeaSituation } from './qideasituation';
import { IIdeaSituation } from './ideasituation';
import { IIdea } from './idea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect extends RepositoryEntityESelect, IdeaEOptionalId {
    name?: string | IQStringField;
    outcomeA?: OutcomeESelect;
    outcomeB?: OutcomeESelect;
    children?: IdeaESelect;
    ideaLabels?: IdeaLabelESelect;
    ideaSituations?: IdeaSituationESelect;
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
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph extends IdeaEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    outcomeA?: OutcomeGraph;
    outcomeB?: OutcomeGraph;
    children?: IdeaGraph[];
    ideaLabels?: IdeaLabelGraph[];
    ideaSituations?: IdeaSituationGraph[];
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
export interface QIdea extends QRepositoryEntity {
    name: IQStringField;
    outcomeA: QOutcomeQRelation;
    outcomeB: QOutcomeQRelation;
    children: IQRepositoryEntityOneToManyRelation<IIdea, QIdea>;
    ideaLabels: IQRepositoryEntityOneToManyRelation<IIdeaLabel, QIdeaLabel>;
    ideaSituations: IQRepositoryEntityOneToManyRelation<IIdeaSituation, QIdeaSituation>;
}
export interface QIdeaQId extends QRepositoryEntityQId {
}
export interface QIdeaQRelation extends QRepositoryEntityQRelation<IIdea, QIdea>, QIdeaQId {
}
//# sourceMappingURL=qidea.d.ts.map