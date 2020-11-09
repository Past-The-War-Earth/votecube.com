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
	AgeSuitableRowGraph,
	AgeSuitableRowEId,
	AgeSuitableRowEUpdateColumns,
	AgeSuitableRowEUpdateProperties,
	AgeSuitableRowESelect,
	QAgeSuitableRowQId,
	QAgeSuitableRowQRelation,
	QAgeSuitableRow,
} from '../infrastructure/row/qagesuitablerow';
import {
	ThemeGraph,
	ThemeEId,
	ThemeEOptionalId,
	ThemeEUpdateProperties,
	ThemeESelect,
	QTheme,
	QThemeQId,
	QThemeQRelation,
} from './qtheme';
import {
	PollTypeGraph,
	PollTypeEId,
	PollTypeEOptionalId,
	PollTypeEUpdateProperties,
	PollTypeESelect,
	QPollType,
	QPollTypeQId,
	QPollTypeQRelation,
} from './qpolltype';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from './run/qpollrun';
import {
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './revision/qpollrevision';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect
    extends AgeSuitableRowESelect, PollEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeESelect;
	type?: PollTypeESelect;
	parent?: PollESelect;
	children?: PollESelect;
	runs?: PollRunESelect;
	revisions?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollEId
    extends AgeSuitableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollEUpdateProperties
	extends AgeSuitableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	theme?: ThemeEOptionalId;
	type?: PollTypeEOptionalId;
	parent?: PollEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollGraph
	extends PollEOptionalId, AgeSuitableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	theme?: ThemeGraph;
	type?: PollTypeGraph;
	parent?: PollGraph;
	children?: PollGraph[];
	runs?: PollRunGraph[];
	revisions?: PollRevisionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns
	extends AgeSuitableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	THEME_ID?: number | IQNumberField;
	POLL_TYPE_ID?: number | IQNumberField;
	PARENT_POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollECreateProperties
extends Partial<PollEId>, PollEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollECreateColumns
extends PollEId, PollEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPoll extends QAgeSuitableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	theme: QThemeQRelation;
	type: QPollTypeQRelation;
	parent: QPollQRelation;
	children: IQOneToManyRelation<QPoll>;
	runs: IQOneToManyRelation<QPollRun>;
	revisions: IQOneToManyRelation<QPollRevision>;

}


// Entity Id Interface
export interface QPollQId extends QAgeSuitableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollQRelation
	extends QAgeSuitableRowQRelation<QPoll>, QPollQId {
}

