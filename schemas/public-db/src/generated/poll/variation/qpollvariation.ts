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
} from '../../infrastructure/qimmutableactorrow';
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
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../locationtimeframe/qpolllocationtimeframe';
import {
	UserPollVariationRatingECascadeGraph,
	UserPollVariationRatingEId,
	UserPollVariationRatingEOptionalId,
	UserPollVariationRatingEUpdateProperties,
	UserPollVariationRatingESelect,
	QUserPollVariationRating,
	QUserPollVariationRatingQId,
	QUserPollVariationRatingQRelation,
} from '../user/quserpollvariationrating';
import {
	PollVariationRatingCountECascadeGraph,
	PollVariationRatingCountEId,
	PollVariationRatingCountEOptionalId,
	PollVariationRatingCountEUpdateProperties,
	PollVariationRatingCountESelect,
	QPollVariationRatingCount,
	QPollVariationRatingCountQId,
	QPollVariationRatingCountQRelation,
} from './count/qpollvariationratingcount';
import {
	PollVariationLabelECascadeGraph,
	PollVariationLabelEId,
	PollVariationLabelEOptionalId,
	PollVariationLabelEUpdateProperties,
	PollVariationLabelESelect,
	QPollVariationLabel,
	QPollVariationLabelQId,
	QPollVariationLabelQRelation,
} from './qpollvariationlabel';
import {
	PollFactorPositionVariationECascadeGraph,
	PollFactorPositionVariationEId,
	PollFactorPositionVariationEOptionalId,
	PollFactorPositionVariationEUpdateProperties,
	PollFactorPositionVariationESelect,
	QPollFactorPositionVariation,
	QPollFactorPositionVariationQId,
	QPollFactorPositionVariationQRelation,
} from './structure/qpollfactorpositionvariation';
import {
	PollFactorVariationECascadeGraph,
	PollFactorVariationEId,
	PollFactorVariationEOptionalId,
	PollFactorVariationEUpdateProperties,
	PollFactorVariationESelect,
	QPollFactorVariation,
	QPollFactorVariationQId,
	QPollFactorVariationQRelation,
} from './structure/qpollfactorvariation';
import {
	PollFactorSkinVariationECascadeGraph,
	PollFactorSkinVariationEId,
	PollFactorSkinVariationEOptionalId,
	PollFactorSkinVariationEUpdateProperties,
	PollFactorSkinVariationESelect,
	QPollFactorSkinVariation,
	QPollFactorSkinVariationQId,
	QPollFactorSkinVariationQRelation,
} from './structure/qpollfactorskinvariation';
import {
	PollPositionVariationECascadeGraph,
	PollPositionVariationEId,
	PollPositionVariationEOptionalId,
	PollPositionVariationEUpdateProperties,
	PollPositionVariationESelect,
	QPollPositionVariation,
	QPollPositionVariationQId,
	QPollPositionVariationQRelation,
} from './structure/qpollpositionvariation';
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
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from './translation/qpollvariationtranslation';
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
	PollVariationOpinionCountECascadeGraph,
	PollVariationOpinionCountEId,
	PollVariationOpinionCountEOptionalId,
	PollVariationOpinionCountEUpdateProperties,
	PollVariationOpinionCountESelect,
	QPollVariationOpinionCount,
	QPollVariationOpinionCountQId,
	QPollVariationOpinionCountQRelation,
} from './count/qpollvariationopinioncount';
import {
	PollVariationOpinionRatingCountECascadeGraph,
	PollVariationOpinionRatingCountEId,
	PollVariationOpinionRatingCountEOptionalId,
	PollVariationOpinionRatingCountEUpdateProperties,
	PollVariationOpinionRatingCountESelect,
	QPollVariationOpinionRatingCount,
	QPollVariationOpinionRatingCountQId,
	QPollVariationOpinionRatingCountQRelation,
} from './count/qpollvariationopinionratingcount';
import {
	PollVariationVoteCountECascadeGraph,
	PollVariationVoteCountEId,
	PollVariationVoteCountEOptionalId,
	PollVariationVoteCountEUpdateProperties,
	PollVariationVoteCountESelect,
	QPollVariationVoteCount,
	QPollVariationVoteCountQId,
	QPollVariationVoteCountQRelation,
} from './count/qpollvariationvotecount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationESelect
    extends ImmutableActorRowESelect, PollVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	createdAtLocationTimeFrame?: PollLocationTimeFrameESelect;
	parent?: PollVariationESelect;
	children?: PollVariationESelect;
	ratings?: UserPollVariationRatingESelect;
	ratingCounts?: PollVariationRatingCountESelect;
	variationLabels?: PollVariationLabelESelect;
	pollFactorPositionVariations?: PollFactorPositionVariationESelect;
	factors?: PollFactorVariationESelect;
	factorSkins?: PollFactorSkinVariationESelect;
	positions?: PollPositionVariationESelect;
	chosenTranslations?: ChosenPollTranslationESelect;
	allTranslations?: PollVariationTranslationESelect;
	opinions?: PollOpinionESelect;
	opinionCounts?: PollVariationOpinionCountESelect;
	opinionRatingCounts?: PollVariationOpinionRatingCountESelect;
	voteCounts?: PollVariationVoteCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	createdAtLocationTimeFrame?: PollLocationTimeFrameEOptionalId;
	parent?: PollVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollVariationECascadeGraph;
	ratings?: UserPollVariationRatingECascadeGraph;
	ratingCounts?: PollVariationRatingCountECascadeGraph;
	variationLabels?: PollVariationLabelECascadeGraph;
	pollFactorPositionVariations?: PollFactorPositionVariationECascadeGraph;
	factors?: PollFactorVariationECascadeGraph;
	factorSkins?: PollFactorSkinVariationECascadeGraph;
	positions?: PollPositionVariationECascadeGraph;
	chosenTranslations?: ChosenPollTranslationECascadeGraph;
	allTranslations?: PollVariationTranslationECascadeGraph;
	opinions?: PollOpinionECascadeGraph;
	opinionCounts?: PollVariationOpinionCountECascadeGraph;
	opinionRatingCounts?: PollVariationOpinionRatingCountECascadeGraph;
	voteCounts?: PollVariationVoteCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;
	PARENT_POLL_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationECreateProperties
extends Partial<PollVariationEId>, PollVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationECreateColumns
extends PollVariationEId, PollVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	poll: QPollQRelation;
	createdAtLocationTimeFrame: QPollLocationTimeFrameQRelation;
	parent: QPollVariationQRelation;
	children: IQOneToManyRelation<QPollVariation>;
	ratings: IQOneToManyRelation<QUserPollVariationRating>;
	ratingCounts: IQOneToManyRelation<QPollVariationRatingCount>;
	variationLabels: IQOneToManyRelation<QPollVariationLabel>;
	pollFactorPositionVariations: IQOneToManyRelation<QPollFactorPositionVariation>;
	factors: IQOneToManyRelation<QPollFactorVariation>;
	factorSkins: IQOneToManyRelation<QPollFactorSkinVariation>;
	positions: IQOneToManyRelation<QPollPositionVariation>;
	chosenTranslations: IQOneToManyRelation<QChosenPollTranslation>;
	allTranslations: IQOneToManyRelation<QPollVariationTranslation>;
	opinions: IQOneToManyRelation<QPollOpinion>;
	opinionCounts: IQOneToManyRelation<QPollVariationOpinionCount>;
	opinionRatingCounts: IQOneToManyRelation<QPollVariationOpinionRatingCount>;
	voteCounts: IQOneToManyRelation<QPollVariationVoteCount>;

}


// Entity Id Interface
export interface QPollVariationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollVariationQRelation
	extends QImmutableActorRowQRelation<QPollVariation>, QPollVariationQId {
}

