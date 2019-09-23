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
	IImmutableActorRow,
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
	ITheme,
	ThemeECascadeGraph,
	ThemeEId,
	ThemeEOptionalId,
	ThemeEUpdateProperties,
	ThemeESelect,
	QTheme,
	QThemeQId,
	QThemeQRelation,
} from './qtheme';
import {
	IPollType,
	PollTypeECascadeGraph,
	PollTypeEId,
	PollTypeEOptionalId,
	PollTypeEUpdateProperties,
	PollTypeESelect,
	QPollType,
	QPollTypeQId,
	QPollTypeQRelation,
} from './qpolltype';
import {
	IUserPollRating,
	UserPollRatingECascadeGraph,
	UserPollRatingEId,
	UserPollRatingEOptionalId,
	UserPollRatingEUpdateProperties,
	UserPollRatingESelect,
	QUserPollRating,
	QUserPollRatingQId,
	QUserPollRatingQRelation,
} from './user/quserpollrating';
import {
	IPollRatingCount,
	PollRatingCountECascadeGraph,
	PollRatingCountEId,
	PollRatingCountEOptionalId,
	PollRatingCountEUpdateProperties,
	PollRatingCountESelect,
	QPollRatingCount,
	QPollRatingCountQId,
	QPollRatingCountQRelation,
} from './count/qpollratingcount';
import {
	IChosenPollTranslation,
	ChosenPollTranslationECascadeGraph,
	ChosenPollTranslationEId,
	ChosenPollTranslationEOptionalId,
	ChosenPollTranslationEUpdateProperties,
	ChosenPollTranslationESelect,
	QChosenPollTranslation,
	QChosenPollTranslationQId,
	QChosenPollTranslationQRelation,
} from './translation/qchosenpolltranslation';
import {
	IChosenPollVariation,
	ChosenPollVariationECascadeGraph,
	ChosenPollVariationEId,
	ChosenPollVariationEOptionalId,
	ChosenPollVariationEUpdateProperties,
	ChosenPollVariationESelect,
	QChosenPollVariation,
	QChosenPollVariationQId,
	QChosenPollVariationQRelation,
} from './variation/qchosenpollvariation';
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
} from './locationtimeframe/qpolllocationtimeframe';
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
} from './variation/qpollvariation';
import {
	IPollOpinionsCount,
	PollOpinionsCountECascadeGraph,
	PollOpinionsCountEId,
	PollOpinionsCountEOptionalId,
	PollOpinionsCountEUpdateProperties,
	PollOpinionsCountESelect,
	QPollOpinionsCount,
	QPollOpinionsCountQId,
	QPollOpinionsCountQRelation,
} from './count/qpollopinionscount';
import {
	IPollOpinionsRatingCount,
	PollOpinionsRatingCountECascadeGraph,
	PollOpinionsRatingCountEId,
	PollOpinionsRatingCountEOptionalId,
	PollOpinionsRatingCountEUpdateProperties,
	PollOpinionsRatingCountESelect,
	QPollOpinionsRatingCount,
	QPollOpinionsRatingCountQId,
	QPollOpinionsRatingCountQRelation,
} from './count/qpollopinionsratingcount';
import {
	IPollVoteCount,
	PollVoteCountECascadeGraph,
	PollVoteCountEId,
	PollVoteCountEOptionalId,
	PollVoteCountEUpdateProperties,
	PollVoteCountESelect,
	QPollVoteCount,
	QPollVoteCountQId,
	QPollVoteCountQRelation,
} from './count/qpollvotecount';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPoll extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	theme?: ITheme;
	type?: IPollType;
	parent?: IPoll;
	children?: IPoll[];
	ratings?: IUserPollRating[];
	ratingCounts?: IPollRatingCount[];
	chosenPollTranslations?: IChosenPollTranslation[];
	chosenVariations?: IChosenPollVariation[];
	locationTimeFrames?: IPollLocationTimeFrame[];
	allPollVariations?: IPollVariation[];
	opinionCounts?: IPollOpinionsCount[];
	opinionRatingCounts?: IPollOpinionsRatingCount[];
	voteCounts?: IPollVoteCount[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect
    extends ImmutableActorRowESelect, PollEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeESelect;
	type?: PollTypeESelect;
	parent?: PollESelect;
	children?: PollESelect;
	ratings?: UserPollRatingESelect;
	ratingCounts?: PollRatingCountESelect;
	chosenPollTranslations?: ChosenPollTranslationESelect;
	chosenVariations?: ChosenPollVariationESelect;
	locationTimeFrames?: PollLocationTimeFrameESelect;
	allPollVariations?: PollVariationESelect;
	opinionCounts?: PollOpinionsCountESelect;
	opinionRatingCounts?: PollOpinionsRatingCountESelect;
	voteCounts?: PollVoteCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollEId
    extends ImmutableActorRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	theme?: ThemeEOptionalId;
	type?: PollTypeEOptionalId;
	parent?: PollEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollECascadeGraph;
	ratings?: UserPollRatingECascadeGraph;
	ratingCounts?: PollRatingCountECascadeGraph;
	chosenPollTranslations?: ChosenPollTranslationECascadeGraph;
	chosenVariations?: ChosenPollVariationECascadeGraph;
	locationTimeFrames?: PollLocationTimeFrameECascadeGraph;
	allPollVariations?: PollVariationECascadeGraph;
	opinionCounts?: PollOpinionsCountECascadeGraph;
	opinionRatingCounts?: PollOpinionsRatingCountECascadeGraph;
	voteCounts?: PollVoteCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	THEME_ID?: number | IQNumberField;
	POLL_TYPE_ID?: number | IQNumberField;
	PARENT_POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollECreateProperties
extends Partial<PollEId>, PollEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollECreateColumns
extends PollEId, PollEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPoll extends QImmutableActorRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	theme: QThemeQRelation;
	type: QPollTypeQRelation;
	parent: QPollQRelation;
	children: IQOneToManyRelation<QPoll>;
	ratings: IQOneToManyRelation<QUserPollRating>;
	ratingCounts: IQOneToManyRelation<QPollRatingCount>;
	chosenPollTranslations: IQOneToManyRelation<QChosenPollTranslation>;
	chosenVariations: IQOneToManyRelation<QChosenPollVariation>;
	locationTimeFrames: IQOneToManyRelation<QPollLocationTimeFrame>;
	allPollVariations: IQOneToManyRelation<QPollVariation>;
	opinionCounts: IQOneToManyRelation<QPollOpinionsCount>;
	opinionRatingCounts: IQOneToManyRelation<QPollOpinionsRatingCount>;
	voteCounts: IQOneToManyRelation<QPollVoteCount>;

}


// Entity Id Interface
export interface QPollQId extends QImmutableActorRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollQRelation
	extends QImmutableActorRowQRelation<QPoll>, QPollQId {
}

