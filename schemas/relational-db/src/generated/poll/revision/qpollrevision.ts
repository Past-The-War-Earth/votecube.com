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
	AgeSuitableRowECascadeGraph,
	AgeSuitableRowEId,
	AgeSuitableRowEUpdateColumns,
	AgeSuitableRowEUpdateProperties,
	AgeSuitableRowESelect,
	QAgeSuitableRowQId,
	QAgeSuitableRowQRelation,
	QAgeSuitableRow,
} from '../../infrastructure/row/qagesuitablerow';
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
	OutcomeECascadeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from './qoutcome';
import {
	PollRevisionRatingECascadeGraph,
	PollRevisionRatingEId,
	PollRevisionRatingEOptionalId,
	PollRevisionRatingEUpdateProperties,
	PollRevisionRatingESelect,
	QPollRevisionRating,
	QPollRevisionRatingQId,
	QPollRevisionRatingQRelation,
} from '../rating/qpollrevisionrating';
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
    extends AgeSuitableRowESelect, PollRevisionEOptionalId {
	// Non-Id Properties
	depth?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	createdAtRun?: PollRunESelect;
	outcomeVersionA?: OutcomeESelect;
	outcomeVersionB?: OutcomeESelect;
	parent?: PollRevisionESelect;
	children?: PollRevisionESelect;
	ratings?: PollRevisionRatingESelect;
	factorPositions?: PollRevisionFactorPositionESelect;
	allTranslations?: PollRevisionTranslationESelect;
	opinions?: PollRevisionOpinionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionEId
    extends AgeSuitableRowEId {
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
	extends AgeSuitableRowEUpdateProperties {
	// Non-Id Properties
	depth?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	createdAtRun?: PollRunEOptionalId;
	outcomeVersionA?: OutcomeEOptionalId;
	outcomeVersionB?: OutcomeEOptionalId;
	parent?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionECascadeGraph
	extends AgeSuitableRowECascadeGraph {
	// Cascading Relations
	children?: PollRevisionECascadeGraph;
	ratings?: PollRevisionRatingECascadeGraph;
	factorPositions?: PollRevisionFactorPositionECascadeGraph;
	allTranslations?: PollRevisionTranslationECascadeGraph;
	opinions?: PollRevisionOpinionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionEUpdateColumns
	extends AgeSuitableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	DEPTH?: number | IQNumberField;
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
export interface QPollRevision extends QAgeSuitableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	depth: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	createdAtRun: QPollRunQRelation;
	outcomeVersionA: QOutcomeQRelation;
	outcomeVersionB: QOutcomeQRelation;
	parent: QPollRevisionQRelation;
	children: IQOneToManyRelation<QPollRevision>;
	ratings: IQOneToManyRelation<QPollRevisionRating>;
	factorPositions: IQOneToManyRelation<QPollRevisionFactorPosition>;
	allTranslations: IQOneToManyRelation<QPollRevisionTranslation>;
	opinions: IQOneToManyRelation<QPollRevisionOpinion>;

}


// Entity Id Interface
export interface QPollRevisionQId extends QAgeSuitableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionQRelation
	extends QAgeSuitableRowQRelation<QPollRevision>, QPollRevisionQId {
}

