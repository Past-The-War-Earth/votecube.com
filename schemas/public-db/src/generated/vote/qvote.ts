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
	IImmutableRepoRow,
	ImmutableRepoRowEId,
	ImmutableRepoRowEUpdateColumns,
	ImmutableRepoRowEUpdateProperties,
	ImmutableRepoRowESelect,
	QImmutableRepoRowQId,
	QImmutableRepoRowQRelation,
	QImmutableRepoRow,
} from '@airport/holding-pattern';
import {
	IPoll,
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

export interface IVote extends IImmutableRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	pollId?: number;

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
    extends ImmutableRepoRowESelect, VoteEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	factors?: VoteFactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteEId
    extends ImmutableRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteEUpdateProperties
	extends ImmutableRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns
	extends ImmutableRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	CREATED_AT?: Date | IQDateField;
	VOTE_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;

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
export interface QVote extends QImmutableRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	pollId: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	factors: IQOneToManyRelation<QVoteFactor>;

}


// Entity Id Interface
export interface QVoteQId extends QImmutableRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QVoteQRelation
	extends QImmutableRepoRowQRelation<QVote>, QVoteQId {
}

