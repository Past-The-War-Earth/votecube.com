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
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeVersionESelect
    extends IEntitySelectProperties, OutcomeVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: OutcomeVersionESelect;
	children?: OutcomeVersionESelect;
	pollRevisionsA?: PollRevisionESelect;
	pollRevisionsB?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	parent?: OutcomeVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeVersionECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations
	children?: OutcomeVersionECascadeGraph;
	pollRevisionsA?: PollRevisionECascadeGraph;
	pollRevisionsB?: PollRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	PARENT_OUTCOME_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeVersionECreateProperties
extends Partial<OutcomeVersionEId>, OutcomeVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeVersionECreateColumns
extends OutcomeVersionEId, OutcomeVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeVersion extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	parent: QOutcomeVersionQRelation;
	children: IQOneToManyRelation<QOutcomeVersion>;
	pollRevisionsA: IQOneToManyRelation<QPollRevision>;
	pollRevisionsB: IQOneToManyRelation<QPollRevision>;

}


// Entity Id Interface
export interface QOutcomeVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeVersionQRelation
	extends IQRelation<QOutcomeVersion>, QOutcomeVersionQId {
}

