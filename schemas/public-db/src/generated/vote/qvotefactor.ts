import {
	IQEntityInternal,
	IEntityIdProperties,
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
	IChildRepoRow,
	ChildRepoRowEId,
	ChildRepoRowEUpdateColumns,
	ChildRepoRowEUpdateProperties,
	ChildRepoRowESelect,
	QChildRepoRowQId,
	QChildRepoRowQRelation,
	QChildRepoRow,
} from '@airport/holding-pattern';
import {
	IVote,
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

export interface IVoteFactor extends IChildRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	voteId?: number;
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
    extends ChildRepoRowESelect, VoteFactorEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	voteId?: number | IQNumberField;
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
    extends ChildRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorEUpdateProperties
	extends ChildRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	voteId?: number | IQNumberField;
	share?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	vote?: VoteEOptionalId;
	pollFactorPos?: PollFactorPositionEOptionalId;
	type?: VoteFactorTypeEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorEUpdateColumns
	extends ChildRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	VOTE_FACTOR_ID?: number | IQNumberField;
	VOTE_ID?: number | IQNumberField;
	SHARE?: string | IQStringField;
	VOTES_RID?: number | IQNumberField;
	VOTES_AID?: number | IQNumberField;
	VOTES_ARID?: number | IQNumberField;
	POLL_FACTOR_POSITIONS_RID?: number | IQNumberField;
	POLL_FACTOR_POSITIONS_AID?: number | IQNumberField;
	POLL_FACTOR_POSITIONS_ARID?: number | IQNumberField;
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
export interface QVoteFactor extends QChildRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	voteId: IQNumberField;
	share: IQStringField;

	// Non-Id Relations
	vote: QVoteQRelation;
	pollFactorPos: QPollFactorPositionQRelation;
	type: QVoteFactorTypeQRelation;

}


// Entity Id Interface
export interface QVoteFactorQId extends QChildRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QVoteFactorQRelation
	extends QChildRepoRowQRelation<QVoteFactor>, QVoteFactorQId {
}

