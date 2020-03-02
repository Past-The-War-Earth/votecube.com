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
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../infrastructure/row/qimmutablerow';
import {
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
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../poll/revision/qpollrevision';
import {
	VoteRevisionECascadeGraph,
	VoteRevisionEId,
	VoteRevisionEOptionalId,
	VoteRevisionEUpdateProperties,
	VoteRevisionESelect,
	QVoteRevision,
	QVoteRevisionQId,
	QVoteRevisionQRelation,
} from '../vote/qvoterevision';
import {
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
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../poll/run/qpollrun';
import {
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
	pollRevision?: PollRevisionESelect;
	voteRevision?: VoteRevisionESelect;
	language?: LanguageESelect;
	run?: PollRunESelect;
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
	pollRevision?: PollRevisionEOptionalId;
	voteRevision?: VoteRevisionEOptionalId;
	language?: LanguageEOptionalId;
	run?: PollRunEOptionalId;
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
	POLL_REVISION_ID?: number | IQNumberField;
	VOTE_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
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
	pollRevision: QPollRevisionQRelation;
	voteRevision: QVoteRevisionQRelation;
	language: QLanguageQRelation;
	run: QPollRunQRelation;
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

