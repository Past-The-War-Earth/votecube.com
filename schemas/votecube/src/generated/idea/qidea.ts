import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQRepositoryEntityOneToManyRelation,
	IQRepositoryEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	OutcomeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from './qoutcome';
import {
	IOutcome,
} from './outcome';
import {
	IdeaLabelGraph,
	IdeaLabelEId,
	IdeaLabelEOptionalId,
	IdeaLabelEUpdateProperties,
	IdeaLabelESelect,
	QIdeaLabel,
	QIdeaLabelQId,
	QIdeaLabelQRelation,
} from './qidealabel';
import {
	IIdeaLabel,
} from './idealabel';
import {
	IdeaSituationGraph,
	IdeaSituationEId,
	IdeaSituationEOptionalId,
	IdeaSituationEUpdateProperties,
	IdeaSituationESelect,
	QIdeaSituation,
	QIdeaSituationQId,
	QIdeaSituationQRelation,
} from './qideasituation';
import {
	IIdeaSituation,
} from './ideasituation';
import {
	IIdea,
} from './idea';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaESelect
    extends RepositoryEntityESelect, IdeaEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	outcomeA?: OutcomeESelect;
	outcomeB?: OutcomeESelect;
	children?: IdeaESelect;
	ideaLabels?: IdeaLabelESelect;
	ideaSituations?: IdeaSituationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	outcomeA?: OutcomeEOptionalId;
	outcomeB?: OutcomeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaGraph
	extends IdeaEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	outcomeA?: OutcomeGraph;
	outcomeB?: OutcomeGraph;
	children?: IdeaGraph[];
	ideaLabels?: IdeaLabelGraph[];
	ideaSituations?: IdeaSituationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
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
export interface IdeaECreateProperties
extends Partial<IdeaEId>, IdeaEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaECreateColumns
extends IdeaEId, IdeaEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdea extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	outcomeA: QOutcomeQRelation;
	outcomeB: QOutcomeQRelation;
	children: IQRepositoryEntityOneToManyRelation<IIdea, QIdea>;
	ideaLabels: IQRepositoryEntityOneToManyRelation<IIdeaLabel, QIdeaLabel>;
	ideaSituations: IQRepositoryEntityOneToManyRelation<IIdeaSituation, QIdeaSituation>;

}


// Entity Id Interface
export interface QIdeaQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaQRelation
	extends QRepositoryEntityQRelation<IIdea, QIdea>, QIdeaQId {
}

