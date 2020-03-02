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
} from '../../infrastructure/row/qsystemgeneratedrow';
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
import {
	ChosenPollRevisionTypeECascadeGraph,
	ChosenPollRevisionTypeEId,
	ChosenPollRevisionTypeEOptionalId,
	ChosenPollRevisionTypeEUpdateProperties,
	ChosenPollRevisionTypeESelect,
	QChosenPollRevisionType,
	QChosenPollRevisionTypeQId,
	QChosenPollRevisionTypeQRelation,
} from './qchosenpollrevisiontype';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ChosenPollRevisionESelect
    extends SystemGeneratedRowESelect, ChosenPollRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	type?: ChosenPollRevisionTypeESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ChosenPollRevisionEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ChosenPollRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ChosenPollRevisionEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	type?: ChosenPollRevisionTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenPollRevisionECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenPollRevisionEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_ID?: number | IQNumberField;
	CHOSEN_POLL_REVISION_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ChosenPollRevisionECreateProperties
extends Partial<ChosenPollRevisionEId>, ChosenPollRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ChosenPollRevisionECreateColumns
extends ChosenPollRevisionEId, ChosenPollRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QChosenPollRevision extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	type: QChosenPollRevisionTypeQRelation;

}


// Entity Id Interface
export interface QChosenPollRevisionQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QChosenPollRevisionQRelation
	extends QSystemGeneratedRowQRelation<QChosenPollRevision>, QChosenPollRevisionQId {
}

