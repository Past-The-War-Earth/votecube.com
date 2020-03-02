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
} from '../../infrastructure/row/qimmutableactorrow';
import {
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../run/qpollrun';
import {
	UserPollRevisionRatingECascadeGraph,
	UserPollRevisionRatingEId,
	UserPollRevisionRatingEOptionalId,
	UserPollRevisionRatingEUpdateProperties,
	UserPollRevisionRatingESelect,
	QUserPollRevisionRating,
	QUserPollRevisionRatingQId,
	QUserPollRevisionRatingQRelation,
} from '../user/quserpollrevisionrating';
import {
	PollRevisionRatingCountECascadeGraph,
	PollRevisionRatingCountEId,
	PollRevisionRatingCountEOptionalId,
	PollRevisionRatingCountEUpdateProperties,
	PollRevisionRatingCountESelect,
	QPollRevisionRatingCount,
	QPollRevisionRatingCountQId,
	QPollRevisionRatingCountQRelation,
} from './count/qpollrevisionratingcount';
import {
	PollRevisionLabelECascadeGraph,
	PollRevisionLabelEId,
	PollRevisionLabelEOptionalId,
	PollRevisionLabelEUpdateProperties,
	PollRevisionLabelESelect,
	QPollRevisionLabel,
	QPollRevisionLabelQId,
	QPollRevisionLabelQRelation,
} from './qpollrevisionlabel';
import {
	PollFactorPositionRevisionECascadeGraph,
	PollFactorPositionRevisionEId,
	PollFactorPositionRevisionEOptionalId,
	PollFactorPositionRevisionEUpdateProperties,
	PollFactorPositionRevisionESelect,
	QPollFactorPositionRevision,
	QPollFactorPositionRevisionQId,
	QPollFactorPositionRevisionQRelation,
} from './structure/qpollfactorpositionrevision';
import {
	PollFactorRevisionECascadeGraph,
	PollFactorRevisionEId,
	PollFactorRevisionEOptionalId,
	PollFactorRevisionEUpdateProperties,
	PollFactorRevisionESelect,
	QPollFactorRevision,
	QPollFactorRevisionQId,
	QPollFactorRevisionQRelation,
} from './structure/qpollfactorrevision';
import {
	PollFactorSkinRevisionECascadeGraph,
	PollFactorSkinRevisionEId,
	PollFactorSkinRevisionEOptionalId,
	PollFactorSkinRevisionEUpdateProperties,
	PollFactorSkinRevisionESelect,
	QPollFactorSkinRevision,
	QPollFactorSkinRevisionQId,
	QPollFactorSkinRevisionQRelation,
} from './structure/qpollfactorskinrevision';
import {
	PollPositionRevisionECascadeGraph,
	PollPositionRevisionEId,
	PollPositionRevisionEOptionalId,
	PollPositionRevisionEUpdateProperties,
	PollPositionRevisionESelect,
	QPollPositionRevision,
	QPollPositionRevisionQId,
	QPollPositionRevisionQRelation,
} from './structure/qpollpositionrevision';
import {
	ChosenPollTranslationECascadeGraph,
	ChosenPollTranslationEId,
	ChosenPollTranslationEOptionalId,
	ChosenPollTranslationEUpdateProperties,
	ChosenPollTranslationESelect,
	QChosenPollTranslation,
	QChosenPollTranslationQId,
	QChosenPollTranslationQRelation,
} from '../translation/qchosenpolltranslation';
import {
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from './translation/qpollrevisiontranslation';
import {
	PollOpinionECascadeGraph,
	PollOpinionEId,
	PollOpinionEOptionalId,
	PollOpinionEUpdateProperties,
	PollOpinionESelect,
	QPollOpinion,
	QPollOpinionQId,
	QPollOpinionQRelation,
} from '../../opinion/qpollopinion';
import {
	PollRevisionOpinionCountECascadeGraph,
	PollRevisionOpinionCountEId,
	PollRevisionOpinionCountEOptionalId,
	PollRevisionOpinionCountEUpdateProperties,
	PollRevisionOpinionCountESelect,
	QPollRevisionOpinionCount,
	QPollRevisionOpinionCountQId,
	QPollRevisionOpinionCountQRelation,
} from './count/qpollrevisionopinioncount';
import {
	PollRevisionOpinionRatingCountECascadeGraph,
	PollRevisionOpinionRatingCountEId,
	PollRevisionOpinionRatingCountEOptionalId,
	PollRevisionOpinionRatingCountEUpdateProperties,
	PollRevisionOpinionRatingCountESelect,
	QPollRevisionOpinionRatingCount,
	QPollRevisionOpinionRatingCountQId,
	QPollRevisionOpinionRatingCountQRelation,
} from './count/qpollrevisionopinionratingcount';
import {
	PollRevisionVoteCountECascadeGraph,
	PollRevisionVoteCountEId,
	PollRevisionVoteCountEOptionalId,
	PollRevisionVoteCountEUpdateProperties,
	PollRevisionVoteCountESelect,
	QPollRevisionVoteCount,
	QPollRevisionVoteCountQId,
	QPollRevisionVoteCountQRelation,
} from './count/qpollrevisionvotecount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionESelect
    extends ImmutableActorRowESelect, PollRevisionEOptionalId {
	// Non-Id Properties
	ageSuitability?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	createdAtRun?: PollRunESelect;
	parent?: PollRevisionESelect;
	children?: PollRevisionESelect;
	ratings?: UserPollRevisionRatingESelect;
	ratingCounts?: PollRevisionRatingCountESelect;
	revisionLabels?: PollRevisionLabelESelect;
	pollFactorPositionRevisions?: PollFactorPositionRevisionESelect;
	factors?: PollFactorRevisionESelect;
	factorSkins?: PollFactorSkinRevisionESelect;
	positions?: PollPositionRevisionESelect;
	chosenTranslations?: ChosenPollTranslationESelect;
	allTranslations?: PollRevisionTranslationESelect;
	opinions?: PollOpinionESelect;
	opinionCounts?: PollRevisionOpinionCountESelect;
	opinionRatingCounts?: PollRevisionOpinionRatingCountESelect;
	voteCounts?: PollRevisionVoteCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	ageSuitability?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	createdAtRun?: PollRunEOptionalId;
	parent?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollRevisionECascadeGraph;
	ratings?: UserPollRevisionRatingECascadeGraph;
	ratingCounts?: PollRevisionRatingCountECascadeGraph;
	revisionLabels?: PollRevisionLabelECascadeGraph;
	pollFactorPositionRevisions?: PollFactorPositionRevisionECascadeGraph;
	factors?: PollFactorRevisionECascadeGraph;
	factorSkins?: PollFactorSkinRevisionECascadeGraph;
	positions?: PollPositionRevisionECascadeGraph;
	chosenTranslations?: ChosenPollTranslationECascadeGraph;
	allTranslations?: PollRevisionTranslationECascadeGraph;
	opinions?: PollOpinionECascadeGraph;
	opinionCounts?: PollRevisionOpinionCountECascadeGraph;
	opinionRatingCounts?: PollRevisionOpinionRatingCountECascadeGraph;
	voteCounts?: PollRevisionVoteCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionECreateProperties
extends Partial<PollRevisionEId>, PollRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionECreateColumns
extends PollRevisionEId, PollRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevision extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	ageSuitability: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	createdAtRun: QPollRunQRelation;
	parent: QPollRevisionQRelation;
	children: IQOneToManyRelation<QPollRevision>;
	ratings: IQOneToManyRelation<QUserPollRevisionRating>;
	ratingCounts: IQOneToManyRelation<QPollRevisionRatingCount>;
	revisionLabels: IQOneToManyRelation<QPollRevisionLabel>;
	pollFactorPositionRevisions: IQOneToManyRelation<QPollFactorPositionRevision>;
	factors: IQOneToManyRelation<QPollFactorRevision>;
	factorSkins: IQOneToManyRelation<QPollFactorSkinRevision>;
	positions: IQOneToManyRelation<QPollPositionRevision>;
	chosenTranslations: IQOneToManyRelation<QChosenPollTranslation>;
	allTranslations: IQOneToManyRelation<QPollRevisionTranslation>;
	opinions: IQOneToManyRelation<QPollOpinion>;
	opinionCounts: IQOneToManyRelation<QPollRevisionOpinionCount>;
	opinionRatingCounts: IQOneToManyRelation<QPollRevisionOpinionRatingCount>;
	voteCounts: IQOneToManyRelation<QPollRevisionVoteCount>;

}


// Entity Id Interface
export interface QPollRevisionQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionQRelation
	extends QImmutableActorRowQRelation<QPollRevision>, QPollRevisionQId {
}

