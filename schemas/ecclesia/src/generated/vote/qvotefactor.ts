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
	VoteVersionGraph,
	VoteVersionEId,
	VoteVersionEOptionalId,
	VoteVersionEUpdateProperties,
	VoteVersionESelect,
	QVoteVersion,
	QVoteVersionQId,
	QVoteVersionQRelation,
} from './qvoteversion';
import {
	VoteVersion,
} from '../../ddl/vote/VoteVersion';
import {
	PollRevisionFactorPositionGraph,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionEOptionalId,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionESelect,
	QPollRevisionFactorPosition,
	QPollRevisionFactorPositionQId,
	QPollRevisionFactorPositionQRelation,
} from '../poll/revision/qpollrevisionfactorposition';
import {
	PollRevisionFactorPosition,
} from '../../ddl/poll/revision/PollRevisionFactorPosition';
import {
	VoteFactorTypeGraph,
	VoteFactorTypeEId,
	VoteFactorTypeEOptionalId,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeESelect,
	QVoteFactorType,
	QVoteFactorTypeQId,
	QVoteFactorTypeQRelation,
} from './qvotefactortype';
import {
	VoteFactorType,
} from '../../ddl/vote/VoteFactorType';
import {
	VoteFactor,
} from '../../ddl/vote/VoteFactor';


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
	voteRevision?: VoteVersionESelect;
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
	voteRevision?: VoteVersionEOptionalId;
	pollFactorPos?: PollRevisionFactorPositionEOptionalId;
	type?: VoteFactorTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteFactorGraph
	extends VoteFactorEOptionalId, IEntityCascadeGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	share?: string | IQStringField;

	// Relations
	voteRevision?: VoteVersionGraph;
	pollFactorPos?: PollRevisionFactorPositionGraph;
	type?: VoteFactorTypeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	SHARE?: string | IQStringField;
	VOTE_VERSION_ID?: number | IQNumberField;
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
export interface QVoteFactor extends IQEntity<VoteFactor>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	share: IQStringField;

	// Non-Id Relations
	voteRevision: QVoteVersionQRelation;
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
	extends IQRelation<VoteFactor, QVoteFactor>, QVoteFactorQId {
}

