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
} from '@airport/air-traffic-control';
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
	IdeaGraph,
	IdeaEId,
	IdeaEOptionalId,
	IdeaEUpdateProperties,
	IdeaESelect,
	QIdea,
	QIdeaQId,
	QIdeaQRelation,
} from './qidea';
import {
	IIdea,
} from './idea';
import {
	LabelGraph,
	LabelEId,
	LabelEOptionalId,
	LabelEUpdateProperties,
	LabelESelect,
	QLabel,
	QLabelQId,
	QLabelQRelation,
} from '../qlabel';
import {
	ILabel,
} from '../label';
import {
	IIdeaLabel,
} from './idealabel';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaLabelESelect
    extends RepositoryEntityESelect, IdeaLabelEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	label?: LabelESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaLabelEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaLabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaLabelEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	idea?: IdeaEOptionalId;
	label?: LabelEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaLabelGraph
	extends IdeaLabelEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	idea?: IdeaGraph;
	label?: LabelGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaLabelEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;
	LABELS_RID_1?: number | IQNumberField;
	LABELS_AID_1?: number | IQNumberField;
	LABELS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaLabelECreateProperties
extends Partial<IdeaLabelEId>, IdeaLabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaLabelECreateColumns
extends IdeaLabelEId, IdeaLabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaLabel extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	idea: QIdeaQRelation;
	label: QLabelQRelation;

}


// Entity Id Interface
export interface QIdeaLabelQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaLabelQRelation
	extends QRepositoryEntityQRelation<IIdeaLabel, QIdeaLabel>, QIdeaLabelQId {
}

