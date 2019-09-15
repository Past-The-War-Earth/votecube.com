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
	IPollFactorPosition,
	PollFactorPositionECascadeGraph,
	PollFactorPositionEId,
	PollFactorPositionEOptionalId,
	PollFactorPositionEUpdateProperties,
	PollFactorPositionESelect,
	QPollFactorPosition,
	QPollFactorPositionQId,
	QPollFactorPositionQRelation,
} from '../poll/qpollfactorposition';
import {
	IVoteFactorType,
	VoteFactorTypeECascadeGraph,
	VoteFactorTypeEId,
	VoteFactorTypeEOptionalId,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeESelect,
	QVoteFactorType,
	QVoteFactorTypeQId,
	QVoteFactorTypeQRelation,
} from './qvotefactortype';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteFactor {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	share?: string;

	// Non-Id Relations
	vote?: IVote;
	pollFactorPos?: IPollFactorPosition;
	type?: IVoteFactorType;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteFactorESelect
    extends IEntitySelectProperties, VoteFactorEOptionalId {
	// Non-Id Properties
	share?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	vote?: VoteESelect;
	pollFactorPos?: PollFactorPositionESelect;
	type?: VoteFactorTypeESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteFactorEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	share?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	vote?: VoteEOptionalId;
	pollFactorPos?: PollFactorPositionEOptionalId;
	type?: VoteFactorTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteFactorECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	SHARE?: string | IQStringField;
	VOTE_ID?: number | IQNumberField;
	POLL_FACTOR_POSITION_ID?: number | IQNumberField;
	VOTE_FACTOR_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteFactorECreateProperties
extends Partial<VoteFactorEId>, VoteFactorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteFactorECreateColumns
extends VoteFactorEId, VoteFactorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteFactor extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	share: IQStringField;

	// Non-Id Relations
	vote: QVoteQRelation;
	pollFactorPos: QPollFactorPositionQRelation;
	type: QVoteFactorTypeQRelation;

}


// Entity Id Interface
export interface QVoteFactorQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteFactorQRelation
	extends IQRelation<QVoteFactor>, QVoteFactorQId {
}

