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
} from '../infrastructure/qimmutablerow';
import {
	IPollOpinion,
	PollOpinionECascadeGraph,
	PollOpinionEId,
	PollOpinionEOptionalId,
	PollOpinionEUpdateProperties,
	PollOpinionESelect,
	QPollOpinion,
	QPollOpinionQId,
	QPollOpinionQRelation,
} from './qpollopinion';
import {
	IPollVariation,
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
	IVoteVariation,
	VoteVariationECascadeGraph,
	VoteVariationEId,
	VoteVariationEOptionalId,
	VoteVariationEUpdateProperties,
	VoteVariationESelect,
	QVoteVariation,
	QVoteVariationQId,
	QVoteVariationQRelation,
} from '../vote/qvotevariation';
import {
	ILanguage,
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../infrastructure/qlanguage';
import {
	IPollLocationTimeFrame,
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
	IPollOpinionVersionRating,
	PollOpinionVersionRatingECascadeGraph,
	PollOpinionVersionRatingEId,
	PollOpinionVersionRatingEOptionalId,
	PollOpinionVersionRatingEUpdateProperties,
	PollOpinionVersionRatingESelect,
	QPollOpinionVersionRating,
	QPollOpinionVersionRatingQId,
	QPollOpinionVersionRatingQRelation,
} from './user/qpollopinionversionrating';
import {
	IPollOpinionVersionTranslation,
	PollOpinionVersionTranslationECascadeGraph,
	PollOpinionVersionTranslationEId,
	PollOpinionVersionTranslationEOptionalId,
	PollOpinionVersionTranslationEUpdateProperties,
	PollOpinionVersionTranslationESelect,
	QPollOpinionVersionTranslation,
	QPollOpinionVersionTranslationQId,
	QPollOpinionVersionTranslationQRelation,
} from './translation/qpollopinionversiontranslation';
import {
	IFactorOpinionVersion,
	FactorOpinionVersionECascadeGraph,
	FactorOpinionVersionEId,
	FactorOpinionVersionEOptionalId,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionESelect,
	QFactorOpinionVersion,
	QFactorOpinionVersionQId,
	QFactorOpinionVersionQRelation,
} from './qfactoropinionversion';
import {
	IPollOpinionVersionRatingCount,
	PollOpinionVersionRatingCountECascadeGraph,
	PollOpinionVersionRatingCountEId,
	PollOpinionVersionRatingCountEOptionalId,
	PollOpinionVersionRatingCountEUpdateProperties,
	PollOpinionVersionRatingCountESelect,
	QPollOpinionVersionRatingCount,
	QPollOpinionVersionRatingCountQId,
	QPollOpinionVersionRatingCountQRelation,
} from './count/qpollopinionversionratingcount';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersion extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollOpinion?: IPollOpinion;
	pollVariation?: IPollVariation;
	voteVariation?: IVoteVariation;
	language?: ILanguage;
	locationTimeFrame?: IPollLocationTimeFrame;
	parent?: IPollOpinionVersion;
	children?: IPollOpinionVersion[];
	ratings?: IPollOpinionVersionRating[];
	translations?: IPollOpinionVersionTranslation[];
	factors?: IFactorOpinionVersion[];
	ratingCounts?: IPollOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollOpinionVersionESelect
    extends ImmutableRowESelect, PollOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollOpinion?: PollOpinionESelect;
	pollVariation?: PollVariationESelect;
	voteVariation?: VoteVariationESelect;
	language?: LanguageESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;
	parent?: PollOpinionVersionESelect;
	children?: PollOpinionVersionESelect;
	ratings?: PollOpinionVersionRatingESelect;
	translations?: PollOpinionVersionTranslationESelect;
	factors?: FactorOpinionVersionESelect;
	ratingCounts?: PollOpinionVersionRatingCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollOpinionVersionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollOpinionVersionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollOpinion?: PollOpinionEOptionalId;
	pollVariation?: PollVariationEOptionalId;
	voteVariation?: VoteVariationEOptionalId;
	language?: LanguageEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;
	parent?: PollOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollOpinionVersionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollOpinionVersionECascadeGraph;
	ratings?: PollOpinionVersionRatingECascadeGraph;
	translations?: PollOpinionVersionTranslationECascadeGraph;
	factors?: FactorOpinionVersionECascadeGraph;
	ratingCounts?: PollOpinionVersionRatingCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollOpinionVersionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_OPINION_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	VOTE_VARIATION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;
	PARENT_POLL_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollOpinionVersionECreateProperties
extends Partial<PollOpinionVersionEId>, PollOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollOpinionVersionECreateColumns
extends PollOpinionVersionEId, PollOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollOpinionVersion extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollOpinion: QPollOpinionQRelation;
	pollVariation: QPollVariationQRelation;
	voteVariation: QVoteVariationQRelation;
	language: QLanguageQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;
	parent: QPollOpinionVersionQRelation;
	children: IQOneToManyRelation<QPollOpinionVersion>;
	ratings: IQOneToManyRelation<QPollOpinionVersionRating>;
	translations: IQOneToManyRelation<QPollOpinionVersionTranslation>;
	factors: IQOneToManyRelation<QFactorOpinionVersion>;
	ratingCounts: IQOneToManyRelation<QPollOpinionVersionRatingCount>;

}


// Entity Id Interface
export interface QPollOpinionVersionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollOpinionVersionQRelation
	extends QImmutableRowQRelation<QPollOpinionVersion>, QPollOpinionVersionQId {
}

