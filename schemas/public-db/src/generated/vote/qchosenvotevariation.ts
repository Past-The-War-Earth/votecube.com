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
	ISystemGeneratedRow,
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/qsystemgeneratedrow';
import {
	IVote,
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
	IChosenVoteVariationType,
	ChosenVoteVariationTypeECascadeGraph,
	ChosenVoteVariationTypeEId,
	ChosenVoteVariationTypeEOptionalId,
	ChosenVoteVariationTypeEUpdateProperties,
	ChosenVoteVariationTypeESelect,
	QChosenVoteVariationType,
	QChosenVoteVariationTypeQId,
	QChosenVoteVariationTypeQRelation,
} from './qchosenvotevariationtype';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenVoteVariation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	vote?: IVote;
	type?: IChosenVoteVariationType;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ChosenVoteVariationESelect
    extends SystemGeneratedRowESelect, ChosenVoteVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	vote?: VoteESelect;
	type?: ChosenVoteVariationTypeESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ChosenVoteVariationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ChosenVoteVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ChosenVoteVariationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	vote?: VoteEOptionalId;
	type?: ChosenVoteVariationTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenVoteVariationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenVoteVariationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	VOTE_ID?: number | IQNumberField;
	CHOSEN_VOTE_VARIATION_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ChosenVoteVariationECreateProperties
extends Partial<ChosenVoteVariationEId>, ChosenVoteVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ChosenVoteVariationECreateColumns
extends ChosenVoteVariationEId, ChosenVoteVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QChosenVoteVariation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	vote: QVoteQRelation;
	type: QChosenVoteVariationTypeQRelation;

}


// Entity Id Interface
export interface QChosenVoteVariationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QChosenVoteVariationQRelation
	extends QSystemGeneratedRowQRelation<QChosenVoteVariation>, QChosenVoteVariationQId {
}

