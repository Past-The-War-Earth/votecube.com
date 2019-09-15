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
	IImmutableRow,
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../qimmutablerow';
import {
	IPoll,
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../poll/qpoll';
import {
	IVoteFactor,
	VoteFactorECascadeGraph,
	VoteFactorEId,
	VoteFactorEOptionalId,
	VoteFactorEUpdateProperties,
	VoteFactorESelect,
	QVoteFactor,
	QVoteFactorQId,
	QVoteFactorQRelation,
} from './qvotefactor';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVote extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	poll?: IPoll;
	factors?: IVoteFactor[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteESelect
    extends ImmutableRowESelect, VoteEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	factors?: VoteFactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	factors?: VoteFactorECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteECreateProperties
extends Partial<VoteEId>, VoteEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteECreateColumns
extends VoteEId, VoteEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVote extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	poll: QPollQRelation;
	factors: IQOneToManyRelation<QVoteFactor>;

}


// Entity Id Interface
export interface QVoteQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteQRelation
	extends QImmutableRowQRelation<QVote>, QVoteQId {
}

