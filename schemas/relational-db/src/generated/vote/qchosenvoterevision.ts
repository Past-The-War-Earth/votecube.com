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
} from '../infrastructure/row/qsystemgeneratedrow';
import {
	VoteECascadeGraph,
	VoteEId,
	VoteEOptionalId,
	VoteEUpdateProperties,
	VoteESelect,
	QVote,
	QVoteQId,
	QVoteQRelation,
} from './qvote';
import {
	ChosenVoteRevisionTypeECascadeGraph,
	ChosenVoteRevisionTypeEId,
	ChosenVoteRevisionTypeEOptionalId,
	ChosenVoteRevisionTypeEUpdateProperties,
	ChosenVoteRevisionTypeESelect,
	QChosenVoteRevisionType,
	QChosenVoteRevisionTypeQId,
	QChosenVoteRevisionTypeQRelation,
} from './qchosenvoterevisiontype';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ChosenVoteRevisionESelect
    extends SystemGeneratedRowESelect, ChosenVoteRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	vote?: VoteESelect;
	type?: ChosenVoteRevisionTypeESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ChosenVoteRevisionEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ChosenVoteRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ChosenVoteRevisionEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	vote?: VoteEOptionalId;
	type?: ChosenVoteRevisionTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenVoteRevisionECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenVoteRevisionEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	VOTE_ID?: number | IQNumberField;
	CHOSEN_VOTE_REVISION_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ChosenVoteRevisionECreateProperties
extends Partial<ChosenVoteRevisionEId>, ChosenVoteRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ChosenVoteRevisionECreateColumns
extends ChosenVoteRevisionEId, ChosenVoteRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QChosenVoteRevision extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	vote: QVoteQRelation;
	type: QChosenVoteRevisionTypeQRelation;

}


// Entity Id Interface
export interface QChosenVoteRevisionQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QChosenVoteRevisionQRelation
	extends QSystemGeneratedRowQRelation<QChosenVoteRevision>, QChosenVoteRevisionQId {
}

