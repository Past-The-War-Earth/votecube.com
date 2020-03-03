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
	PollRevisionOpinionECascadeGraph,
	PollRevisionOpinionEId,
	PollRevisionOpinionEOptionalId,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionESelect,
	QPollRevisionOpinion,
	QPollRevisionOpinionQId,
	QPollRevisionOpinionQRelation,
} from './qpollrevisionopinion';
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
	PollRevisionOpinionVersionRatingECascadeGraph,
	PollRevisionOpinionVersionRatingEId,
	PollRevisionOpinionVersionRatingEOptionalId,
	PollRevisionOpinionVersionRatingEUpdateProperties,
	PollRevisionOpinionVersionRatingESelect,
	QPollRevisionOpinionVersionRating,
	QPollRevisionOpinionVersionRatingQId,
	QPollRevisionOpinionVersionRatingQRelation,
} from './user/qpollrevisionopinionversionrating';
import {
	PollRevisionOpinionVersionTranslationECascadeGraph,
	PollRevisionOpinionVersionTranslationEId,
	PollRevisionOpinionVersionTranslationEOptionalId,
	PollRevisionOpinionVersionTranslationEUpdateProperties,
	PollRevisionOpinionVersionTranslationESelect,
	QPollRevisionOpinionVersionTranslation,
	QPollRevisionOpinionVersionTranslationQId,
	QPollRevisionOpinionVersionTranslationQRelation,
} from './translation/qpollrevisionopinionversiontranslation';
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


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionESelect
    extends ImmutableRowESelect, PollRevisionOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinion?: PollRevisionOpinionESelect;
	voteRevision?: VoteRevisionESelect;
	language?: LanguageESelect;
	parent?: PollRevisionOpinionVersionESelect;
	children?: PollRevisionOpinionVersionESelect;
	ratings?: PollRevisionOpinionVersionRatingESelect;
	translations?: PollRevisionOpinionVersionTranslationESelect;
	factors?: FactorOpinionVersionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinion?: PollRevisionOpinionEOptionalId;
	voteRevision?: VoteRevisionEOptionalId;
	language?: LanguageEOptionalId;
	parent?: PollRevisionOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollRevisionOpinionVersionECascadeGraph;
	ratings?: PollRevisionOpinionVersionRatingECascadeGraph;
	translations?: PollRevisionOpinionVersionTranslationECascadeGraph;
	factors?: FactorOpinionVersionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_OPINION_ID?: number | IQNumberField;
	VOTE_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionECreateProperties
extends Partial<PollRevisionOpinionVersionEId>, PollRevisionOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionECreateColumns
extends PollRevisionOpinionVersionEId, PollRevisionOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersion extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinion: QPollRevisionOpinionQRelation;
	voteRevision: QVoteRevisionQRelation;
	language: QLanguageQRelation;
	parent: QPollRevisionOpinionVersionQRelation;
	children: IQOneToManyRelation<QPollRevisionOpinionVersion>;
	ratings: IQOneToManyRelation<QPollRevisionOpinionVersionRating>;
	translations: IQOneToManyRelation<QPollRevisionOpinionVersionTranslation>;
	factors: IQOneToManyRelation<QFactorOpinionVersion>;

}


// Entity Id Interface
export interface QPollRevisionOpinionVersionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionVersionQRelation
	extends QImmutableRowQRelation<QPollRevisionOpinionVersion>, QPollRevisionOpinionVersionQId {
}

