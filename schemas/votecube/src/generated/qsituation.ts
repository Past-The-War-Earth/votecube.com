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
	CategoryGraph,
	CategoryEId,
	CategoryEOptionalId,
	CategoryEUpdateProperties,
	CategoryESelect,
	QCategory,
	QCategoryQId,
	QCategoryQRelation,
} from './qcategory';
import {
	Category,
} from '../ddl/Category';
import {
	Situation,
} from '../ddl/Situation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect
    extends RepositoryEntityESelect, SituationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: CategoryESelect;
	parent?: SituationESelect;
	children?: SituationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	theme?: CategoryEOptionalId;
	parent?: SituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph
	extends SituationEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	theme?: CategoryGraph;
	parent?: SituationGraph;
	children?: SituationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	CATEGORIES_RID?: number | IQNumberField;
	CATEGORIES_AID?: number | IQNumberField;
	CATEGORIES_ARID?: number | IQNumberField;
	SITUATIONS_RID?: number | IQNumberField;
	SITUATIONS_AID?: number | IQNumberField;
	SITUATIONS_ARID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties
extends Partial<SituationEId>, SituationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns
extends SituationEId, SituationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QRepositoryEntity<Situation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	theme: QCategoryQRelation;
	parent: QSituationQRelation;
	children: IQOneToManyRelation<Situation, QSituation>;

}


// Entity Id Interface
export interface QSituationQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationQRelation
	extends QRepositoryEntityQRelation<Situation, QSituation>, QSituationQId {
}

