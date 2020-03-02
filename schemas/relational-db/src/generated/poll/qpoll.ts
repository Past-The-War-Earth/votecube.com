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
} from '../infrastructure/row/qimmutableactorrow';
import {
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
	ChosenPollRevisionECascadeGraph,
	ChosenPollRevisionEId,
	ChosenPollRevisionEOptionalId,
	ChosenPollRevisionEUpdateProperties,
	ChosenPollRevisionESelect,
	QChosenPollRevision,
	QChosenPollRevisionQId,
	QChosenPollRevisionQRelation,
} from './revision/qchosenpollrevision';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from './run/qpollrun';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './revision/qpollrevision';
import {
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
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect
    extends ImmutableActorRowESelect, PollEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	ageSuitability?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeESelect;
	type?: PollTypeESelect;
	parent?: PollESelect;
	children?: PollESelect;
	ratings?: UserPollRatingESelect;
	ratingCounts?: PollRatingCountESelect;
	chosenPollTranslations?: ChosenPollTranslationESelect;
	chosenRevisions?: ChosenPollRevisionESelect;
	runs?: PollRunESelect;
	allPollRevisions?: PollRevisionESelect;
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
	ageSuitability?: number | IQNumberField;

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
	chosenRevisions?: ChosenPollRevisionECascadeGraph;
	runs?: PollRunECascadeGraph;
	allPollRevisions?: PollRevisionECascadeGraph;
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
	AGE_SUITABILITY?: number | IQNumberField;
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
	ageSuitability: IQNumberField;

	// Non-Id Relations
	theme: QThemeQRelation;
	type: QPollTypeQRelation;
	parent: QPollQRelation;
	children: IQOneToManyRelation<QPoll>;
	ratings: IQOneToManyRelation<QUserPollRating>;
	ratingCounts: IQOneToManyRelation<QPollRatingCount>;
	chosenPollTranslations: IQOneToManyRelation<QChosenPollTranslation>;
	chosenRevisions: IQOneToManyRelation<QChosenPollRevision>;
	runs: IQOneToManyRelation<QPollRun>;
	allPollRevisions: IQOneToManyRelation<QPollRevision>;
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

