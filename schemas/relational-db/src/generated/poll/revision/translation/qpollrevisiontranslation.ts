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
} from '../../../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../qpollrevision';
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
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../../run/qpollrun';
import {
	UserPollRevisionTranslationRatingECascadeGraph,
	UserPollRevisionTranslationRatingEId,
	UserPollRevisionTranslationRatingEOptionalId,
	UserPollRevisionTranslationRatingEUpdateProperties,
	UserPollRevisionTranslationRatingESelect,
	QUserPollRevisionTranslationRating,
	QUserPollRevisionTranslationRatingQId,
	QUserPollRevisionTranslationRatingQRelation,
} from '../../user/quserpollrevisiontranslationrating';
import {
	PollRevisionTranslationRatingCountECascadeGraph,
	PollRevisionTranslationRatingCountEId,
	PollRevisionTranslationRatingCountEOptionalId,
	PollRevisionTranslationRatingCountEUpdateProperties,
	PollRevisionTranslationRatingCountESelect,
	QPollRevisionTranslationRatingCount,
	QPollRevisionTranslationRatingCountQId,
	QPollRevisionTranslationRatingCountQRelation,
} from './count/qpollrevisiontranslationratingcount';
import {
	PollRevisionFactorTranslationECascadeGraph,
	PollRevisionFactorTranslationEId,
	PollRevisionFactorTranslationEOptionalId,
	PollRevisionFactorTranslationEUpdateProperties,
	PollRevisionFactorTranslationESelect,
	QPollRevisionFactorTranslation,
	QPollRevisionFactorTranslationQId,
	QPollRevisionFactorTranslationQRelation,
} from './qpollrevisionfactortranslation';
import {
	PollRevisionPositionTranslationECascadeGraph,
	PollRevisionPositionTranslationEId,
	PollRevisionPositionTranslationEOptionalId,
	PollRevisionPositionTranslationEUpdateProperties,
	PollRevisionPositionTranslationESelect,
	QPollRevisionPositionTranslation,
	QPollRevisionPositionTranslationQId,
	QPollRevisionPositionTranslationQRelation,
} from './qpollrevisionpositiontranslation';
import {
	PollRevisionTranslationOpinionCountECascadeGraph,
	PollRevisionTranslationOpinionCountEId,
	PollRevisionTranslationOpinionCountEOptionalId,
	PollRevisionTranslationOpinionCountEUpdateProperties,
	PollRevisionTranslationOpinionCountESelect,
	QPollRevisionTranslationOpinionCount,
	QPollRevisionTranslationOpinionCountQId,
	QPollRevisionTranslationOpinionCountQRelation,
} from './count/qpollrevisiontranslationopinioncount';
import {
	PollRevisionTranslationOpinionRatingCountECascadeGraph,
	PollRevisionTranslationOpinionRatingCountEId,
	PollRevisionTranslationOpinionRatingCountEOptionalId,
	PollRevisionTranslationOpinionRatingCountEUpdateProperties,
	PollRevisionTranslationOpinionRatingCountESelect,
	QPollRevisionTranslationOpinionRatingCount,
	QPollRevisionTranslationOpinionRatingCountQId,
	QPollRevisionTranslationOpinionRatingCountQRelation,
} from './count/qpollrevisiontranslationopinionratingcount';
import {
	PollRevisionTranslationVoteCountECascadeGraph,
	PollRevisionTranslationVoteCountEId,
	PollRevisionTranslationVoteCountEOptionalId,
	PollRevisionTranslationVoteCountEUpdateProperties,
	PollRevisionTranslationVoteCountESelect,
	QPollRevisionTranslationVoteCount,
	QPollRevisionTranslationVoteCountQId,
	QPollRevisionTranslationVoteCountQRelation,
} from './count/qpollrevisiontranslationvotecount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationESelect
    extends ImmutableActorRowESelect, PollRevisionTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	language?: LanguageESelect;
	type?: TranslationTypeESelect;
	createdAtRun?: PollRunESelect;
	parent?: PollRevisionTranslationESelect;
	children?: PollRevisionTranslationESelect;
	ratings?: UserPollRevisionTranslationRatingESelect;
	ratingCounts?: PollRevisionTranslationRatingCountESelect;
	factors?: PollRevisionFactorTranslationESelect;
	positions?: PollRevisionPositionTranslationESelect;
	opinionCounts?: PollRevisionTranslationOpinionCountESelect;
	opinionRatingCounts?: PollRevisionTranslationOpinionRatingCountESelect;
	voteCounts?: PollRevisionTranslationVoteCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	language?: LanguageEOptionalId;
	type?: TranslationTypeEOptionalId;
	createdAtRun?: PollRunEOptionalId;
	parent?: PollRevisionTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollRevisionTranslationECascadeGraph;
	ratings?: UserPollRevisionTranslationRatingECascadeGraph;
	ratingCounts?: PollRevisionTranslationRatingCountECascadeGraph;
	factors?: PollRevisionFactorTranslationECascadeGraph;
	positions?: PollRevisionPositionTranslationECascadeGraph;
	opinionCounts?: PollRevisionTranslationOpinionCountECascadeGraph;
	opinionRatingCounts?: PollRevisionTranslationOpinionRatingCountECascadeGraph;
	voteCounts?: PollRevisionTranslationVoteCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_NAME?: string | IQStringField;
	POLL_DESCRIPTION?: string | IQStringField;
	POLL_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	TRANSLATION_TYPE_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationECreateProperties
extends Partial<PollRevisionTranslationEId>, PollRevisionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationECreateColumns
extends PollRevisionTranslationEId, PollRevisionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	language: QLanguageQRelation;
	type: QTranslationTypeQRelation;
	createdAtRun: QPollRunQRelation;
	parent: QPollRevisionTranslationQRelation;
	children: IQOneToManyRelation<QPollRevisionTranslation>;
	ratings: IQOneToManyRelation<QUserPollRevisionTranslationRating>;
	ratingCounts: IQOneToManyRelation<QPollRevisionTranslationRatingCount>;
	factors: IQOneToManyRelation<QPollRevisionFactorTranslation>;
	positions: IQOneToManyRelation<QPollRevisionPositionTranslation>;
	opinionCounts: IQOneToManyRelation<QPollRevisionTranslationOpinionCount>;
	opinionRatingCounts: IQOneToManyRelation<QPollRevisionTranslationOpinionRatingCount>;
	voteCounts: IQOneToManyRelation<QPollRevisionTranslationVoteCount>;

}


// Entity Id Interface
export interface QPollRevisionTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionTranslationQRelation
	extends QImmutableActorRowQRelation<QPollRevisionTranslation>, QPollRevisionTranslationQId {
}

