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
	OutcomeVersionECascadeGraph,
	OutcomeVersionEId,
	OutcomeVersionEOptionalId,
	OutcomeVersionEUpdateProperties,
	OutcomeVersionESelect,
	QOutcomeVersion,
	QOutcomeVersionQId,
	QOutcomeVersionQRelation,
} from './qoutcomeversion';
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
	PollRevisionFactorPositionECascadeGraph,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionEOptionalId,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionESelect,
	QPollRevisionFactorPosition,
	QPollRevisionFactorPositionQId,
	QPollRevisionFactorPositionQRelation,
} from './qpollrevisionfactorposition';
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
	PollRevisionOpinionECascadeGraph,
	PollRevisionOpinionEId,
	PollRevisionOpinionEOptionalId,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionESelect,
	QPollRevisionOpinion,
	QPollRevisionOpinionQId,
	QPollRevisionOpinionQRelation,
} from '../../opinion/qpollrevisionopinion';


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
	outcomeVersionA?: OutcomeVersionESelect;
	outcomeVersionB?: OutcomeVersionESelect;
	parent?: PollRevisionESelect;
	children?: PollRevisionESelect;
	ratings?: UserPollRevisionRatingESelect;
	factorPositions?: PollRevisionFactorPositionESelect;
	allTranslations?: PollRevisionTranslationESelect;
	opinions?: PollRevisionOpinionESelect;

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
	outcomeVersionA?: OutcomeVersionEOptionalId;
	outcomeVersionB?: OutcomeVersionEOptionalId;
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
	factorPositions?: PollRevisionFactorPositionECascadeGraph;
	allTranslations?: PollRevisionTranslationECascadeGraph;
	opinions?: PollRevisionOpinionECascadeGraph;

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
	OUTCOME_A_VERSION_ID?: number | IQNumberField;
	OUTCOME_B_VERSION_ID?: number | IQNumberField;
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
	outcomeVersionA: QOutcomeVersionQRelation;
	outcomeVersionB: QOutcomeVersionQRelation;
	parent: QPollRevisionQRelation;
	children: IQOneToManyRelation<QPollRevision>;
	ratings: IQOneToManyRelation<QUserPollRevisionRating>;
	factorPositions: IQOneToManyRelation<QPollRevisionFactorPosition>;
	allTranslations: IQOneToManyRelation<QPollRevisionTranslation>;
	opinions: IQOneToManyRelation<QPollRevisionOpinion>;

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

