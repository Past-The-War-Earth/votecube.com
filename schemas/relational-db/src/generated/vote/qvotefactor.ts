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
	VoteRevisionECascadeGraph,
	VoteRevisionEId,
	VoteRevisionEOptionalId,
	VoteRevisionEUpdateProperties,
	VoteRevisionESelect,
	QVoteRevision,
	QVoteRevisionQId,
	QVoteRevisionQRelation,
} from './qvoterevision';
import {
	PollRevisionFactorPositionECascadeGraph,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionEOptionalId,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionESelect,
	QPollRevisionFactorPosition,
	QPollRevisionFactorPositionQId,
	QPollRevisionFactorPositionQRelation,
} from '../poll/revision/qpollrevisionfactorposition';
import {
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
	voteRevision?: VoteRevisionESelect;
	pollFactorPos?: PollRevisionFactorPositionESelect;
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
	voteRevision?: VoteRevisionEOptionalId;
	pollFactorPos?: PollRevisionFactorPositionEOptionalId;
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
	VOTE_REVISION_ID?: number | IQNumberField;
	POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;
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
	voteRevision: QVoteRevisionQRelation;
	pollFactorPos: QPollRevisionFactorPositionQRelation;
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

