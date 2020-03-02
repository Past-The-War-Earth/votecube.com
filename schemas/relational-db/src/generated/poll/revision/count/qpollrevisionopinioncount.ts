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
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../../infrastructure/row/qsystemgeneratedrow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../qpollrevision';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionCountESelect
    extends SystemGeneratedRowESelect, PollRevisionOpinionCountEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_OPINION_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionCountECreateProperties
extends Partial<PollRevisionOpinionCountEId>, PollRevisionOpinionCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionCountECreateColumns
extends PollRevisionOpinionCountEId, PollRevisionOpinionCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionCount extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	count: IQNumberField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;

}


// Entity Id Interface
export interface QPollRevisionOpinionCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionCountQRelation
	extends QSystemGeneratedRowQRelation<QPollRevisionOpinionCount>, QPollRevisionOpinionCountQId {
}

