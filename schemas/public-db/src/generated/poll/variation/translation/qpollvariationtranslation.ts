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
} from '../../../infrastructure/qimmutableactorrow';
import {
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../qpollvariation';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../../../infrastructure/qlanguage';
import {
	TranslationTypeECascadeGraph,
	TranslationTypeEId,
	TranslationTypeEOptionalId,
	TranslationTypeEUpdateProperties,
	TranslationTypeESelect,
	QTranslationType,
	QTranslationTypeQId,
	QTranslationTypeQRelation,
} from '../../../infrastructure/qtranslationtype';
import {
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../../locationtimeframe/qpolllocationtimeframe';
import {
	UserPollVariationTranslationRatingECascadeGraph,
	UserPollVariationTranslationRatingEId,
	UserPollVariationTranslationRatingEOptionalId,
	UserPollVariationTranslationRatingEUpdateProperties,
	UserPollVariationTranslationRatingESelect,
	QUserPollVariationTranslationRating,
	QUserPollVariationTranslationRatingQId,
	QUserPollVariationTranslationRatingQRelation,
} from '../../user/quserpollvariationtranslationrating';
import {
	PollVariationTranslationRatingCountECascadeGraph,
	PollVariationTranslationRatingCountEId,
	PollVariationTranslationRatingCountEOptionalId,
	PollVariationTranslationRatingCountEUpdateProperties,
	PollVariationTranslationRatingCountESelect,
	QPollVariationTranslationRatingCount,
	QPollVariationTranslationRatingCountQId,
	QPollVariationTranslationRatingCountQRelation,
} from './count/qpollvariationtranslationratingcount';
import {
	PollVariationFactorTranslationECascadeGraph,
	PollVariationFactorTranslationEId,
	PollVariationFactorTranslationEOptionalId,
	PollVariationFactorTranslationEUpdateProperties,
	PollVariationFactorTranslationESelect,
	QPollVariationFactorTranslation,
	QPollVariationFactorTranslationQId,
	QPollVariationFactorTranslationQRelation,
} from './qpollvariationfactortranslation';
import {
	PollVariationPositionTranslationECascadeGraph,
	PollVariationPositionTranslationEId,
	PollVariationPositionTranslationEOptionalId,
	PollVariationPositionTranslationEUpdateProperties,
	PollVariationPositionTranslationESelect,
	QPollVariationPositionTranslation,
	QPollVariationPositionTranslationQId,
	QPollVariationPositionTranslationQRelation,
} from './qpollvariationpositiontranslation';
import {
	PollVariationTranslationOpinionCountECascadeGraph,
	PollVariationTranslationOpinionCountEId,
	PollVariationTranslationOpinionCountEOptionalId,
	PollVariationTranslationOpinionCountEUpdateProperties,
	PollVariationTranslationOpinionCountESelect,
	QPollVariationTranslationOpinionCount,
	QPollVariationTranslationOpinionCountQId,
	QPollVariationTranslationOpinionCountQRelation,
} from './count/qpollvariationtranslationopinioncount';
import {
	PollVariationTranslationOpinionRatingCountECascadeGraph,
	PollVariationTranslationOpinionRatingCountEId,
	PollVariationTranslationOpinionRatingCountEOptionalId,
	PollVariationTranslationOpinionRatingCountEUpdateProperties,
	PollVariationTranslationOpinionRatingCountESelect,
	QPollVariationTranslationOpinionRatingCount,
	QPollVariationTranslationOpinionRatingCountQId,
	QPollVariationTranslationOpinionRatingCountQRelation,
} from './count/qpollvariationtranslationopinionratingcount';
import {
	PollVariationTranslationVoteCountECascadeGraph,
	PollVariationTranslationVoteCountEId,
	PollVariationTranslationVoteCountEOptionalId,
	PollVariationTranslationVoteCountEUpdateProperties,
	PollVariationTranslationVoteCountESelect,
	QPollVariationTranslationVoteCount,
	QPollVariationTranslationVoteCountQId,
	QPollVariationTranslationVoteCountQRelation,
} from './count/qpollvariationtranslationvotecount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationTranslationESelect
    extends ImmutableActorRowESelect, PollVariationTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	language?: LanguageESelect;
	type?: TranslationTypeESelect;
	createdAtLocationTimeFrame?: PollLocationTimeFrameESelect;
	parent?: PollVariationTranslationESelect;
	children?: PollVariationTranslationESelect;
	ratings?: UserPollVariationTranslationRatingESelect;
	ratingCounts?: PollVariationTranslationRatingCountESelect;
	factors?: PollVariationFactorTranslationESelect;
	positions?: PollVariationPositionTranslationESelect;
	opinionCounts?: PollVariationTranslationOpinionCountESelect;
	opinionRatingCounts?: PollVariationTranslationOpinionRatingCountESelect;
	voteCounts?: PollVariationTranslationVoteCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	language?: LanguageEOptionalId;
	type?: TranslationTypeEOptionalId;
	createdAtLocationTimeFrame?: PollLocationTimeFrameEOptionalId;
	parent?: PollVariationTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollVariationTranslationECascadeGraph;
	ratings?: UserPollVariationTranslationRatingECascadeGraph;
	ratingCounts?: PollVariationTranslationRatingCountECascadeGraph;
	factors?: PollVariationFactorTranslationECascadeGraph;
	positions?: PollVariationPositionTranslationECascadeGraph;
	opinionCounts?: PollVariationTranslationOpinionCountECascadeGraph;
	opinionRatingCounts?: PollVariationTranslationOpinionRatingCountECascadeGraph;
	voteCounts?: PollVariationTranslationVoteCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_NAME?: string | IQStringField;
	POLL_DESCRIPTION?: string | IQStringField;
	POLL_VARIATION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	TRANSLATION_TYPE_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;
	PARENT_POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationTranslationECreateProperties
extends Partial<PollVariationTranslationEId>, PollVariationTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationTranslationECreateColumns
extends PollVariationTranslationEId, PollVariationTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	language: QLanguageQRelation;
	type: QTranslationTypeQRelation;
	createdAtLocationTimeFrame: QPollLocationTimeFrameQRelation;
	parent: QPollVariationTranslationQRelation;
	children: IQOneToManyRelation<QPollVariationTranslation>;
	ratings: IQOneToManyRelation<QUserPollVariationTranslationRating>;
	ratingCounts: IQOneToManyRelation<QPollVariationTranslationRatingCount>;
	factors: IQOneToManyRelation<QPollVariationFactorTranslation>;
	positions: IQOneToManyRelation<QPollVariationPositionTranslation>;
	opinionCounts: IQOneToManyRelation<QPollVariationTranslationOpinionCount>;
	opinionRatingCounts: IQOneToManyRelation<QPollVariationTranslationOpinionRatingCount>;
	voteCounts: IQOneToManyRelation<QPollVariationTranslationVoteCount>;

}


// Entity Id Interface
export interface QPollVariationTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollVariationTranslationQRelation
	extends QImmutableActorRowQRelation<QPollVariationTranslation>, QPollVariationTranslationQId {
}

