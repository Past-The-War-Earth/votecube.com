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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../infrastructure/qimmutableactorrow';
import {
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../poll/variation/qpollvariation';
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
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from '../poll/variation/translation/qpollvariationtranslation';
import {
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../poll/locationtimeframe/qpolllocationtimeframe';
import {
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
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteVariationESelect
    extends ImmutableActorRowESelect, VoteVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	variation?: PollVariationESelect;
	vote?: VoteESelect;
	variationTranslation?: PollVariationTranslationESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;
	factors?: VoteFactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteVariationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteVariationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	variation?: PollVariationEOptionalId;
	vote?: VoteEOptionalId;
	variationTranslation?: PollVariationTranslationEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteVariationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	factors?: VoteFactorECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteVariationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	VOTE_ID?: number | IQNumberField;
	POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteVariationECreateProperties
extends Partial<VoteVariationEId>, VoteVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteVariationECreateColumns
extends VoteVariationEId, VoteVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteVariation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	variation: QPollVariationQRelation;
	vote: QVoteQRelation;
	variationTranslation: QPollVariationTranslationQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;
	factors: IQOneToManyRelation<QVoteFactor>;

}


// Entity Id Interface
export interface QVoteVariationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteVariationQRelation
	extends QImmutableActorRowQRelation<QVoteVariation>, QVoteVariationQId {
}

