import { IQDateField, IQNumberField, IQStringField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IdeaLabelGraph, IdeaLabelESelect, QIdeaLabel } from './qidealabel';
import { IIdeaLabel } from './idealabel';
import { SituationIdeaGraph, SituationIdeaESelect, QSituationIdea } from './qsituationidea';
import { ISituationIdea } from './situationidea';
import { IdeaTopicGraph, IdeaTopicESelect, QIdeaTopic } from './qideatopic';
import { IIdeaTopic } from './ideatopic';
import { IIdea } from './idea';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect extends RepositoryEntityESelect, IdeaEOptionalId {
    name?: string | IQStringField;
    children?: IdeaESelect;
    ideaLabels?: IdeaLabelESelect;
    situationIdeas?: SituationIdeaESelect;
    ideaTopics?: IdeaTopicESelect;
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
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph extends IdeaEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    children?: IdeaGraph[];
    ideaLabels?: IdeaLabelGraph[];
    situationIdeas?: SituationIdeaGraph[];
    ideaTopics?: IdeaTopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
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
    children: IQRepositoryEntityOneToManyRelation<IIdea, QIdea>;
    ideaLabels: IQRepositoryEntityOneToManyRelation<IIdeaLabel, QIdeaLabel>;
    situationIdeas: IQRepositoryEntityOneToManyRelation<ISituationIdea, QSituationIdea>;
    ideaTopics: IQRepositoryEntityOneToManyRelation<IIdeaTopic, QIdeaTopic>;
}
export interface QIdeaQId extends QRepositoryEntityQId {
}
export interface QIdeaQRelation extends QRepositoryEntityQRelation<IIdea, QIdea>, QIdeaQId {
}
//# sourceMappingURL=qidea.d.ts.map