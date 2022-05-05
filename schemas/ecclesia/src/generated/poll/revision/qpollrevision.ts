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
} from '@airport/air-traffic-control';
import {
	AgeSuitableRowGraph,
	AgeSuitableRowEId,
	AgeSuitableRowEUpdateColumns,
	AgeSuitableRowEUpdateProperties,
	AgeSuitableRowESelect,
	QAgeSuitableRowQId,
	QAgeSuitableRowQRelation,
	QAgeSuitableRow,
} from '../../infrastructure/row/qagesuitablerow';
import {
	PollGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	Poll,
} from '../../../ddl/poll/Poll';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../run/qpollrun';
import {
	PollRun,
} from '../../../ddl/poll/run/PollRun';
import {
	OutcomeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from './qoutcome';
import {
	Outcome,
} from '../../../ddl/poll/revision/Outcome';
import {
	PollRevisionTranslationGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from './translation/qpollrevisiontranslation';
import {
	PollRevisionTranslation,
} from '../../../ddl/poll/revision/translation/PollRevisionTranslation';
import {
	PollRevisionRatingGraph,
	PollRevisionRatingEId,
	PollRevisionRatingEOptionalId,
	PollRevisionRatingEUpdateProperties,
	PollRevisionRatingESelect,
	QPollRevisionRating,
	QPollRevisionRatingQId,
	QPollRevisionRatingQRelation,
} from '../rating/qpollrevisionrating';
import {
	PollRevisionRating,
} from '../../../ddl/poll/rating/PollRevisionRating';
import {
	PollRevisionFactorPositionGraph,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionEOptionalId,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionESelect,
	QPollRevisionFactorPosition,
	QPollRevisionFactorPositionQId,
	QPollRevisionFactorPositionQRelation,
} from './qpollrevisionfactorposition';
import {
	PollRevisionFactorPosition,
} from '../../../ddl/poll/revision/PollRevisionFactorPosition';
import {
	PollRevisionOpinionGraph,
	PollRevisionOpinionEId,
	PollRevisionOpinionEOptionalId,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionESelect,
	QPollRevisionOpinion,
	QPollRevisionOpinionQId,
	QPollRevisionOpinionQRelation,
} from '../../opinion/qpollrevisionopinion';
import {
	PollRevisionOpinion,
} from '../../../ddl/opinion/PollRevisionOpinion';
import {
	PollRevision,
} from '../../../ddl/poll/revision/PollRevision';


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
	parentTranslation?: PollRevisionTranslationESelect;
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
	parentTranslation?: PollRevisionTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionGraph
	extends PollRevisionEOptionalId, AgeSuitableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	depth?: number | IQNumberField;

	// Relations
	poll?: PollGraph;
	createdAtRun?: PollRunGraph;
	outcomeVersionA?: OutcomeGraph;
	outcomeVersionB?: OutcomeGraph;
	parent?: PollRevisionGraph;
	parentTranslation?: PollRevisionTranslationGraph;
	children?: PollRevisionGraph[];
	ratings?: PollRevisionRatingGraph[];
	factorPositions?: PollRevisionFactorPositionGraph[];
	allTranslations?: PollRevisionTranslationGraph[];
	opinions?: PollRevisionOpinionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionEUpdateColumns
	extends AgeSuitableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	DEPTH?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	OUTCOME_A_VERSION_ID?: number | IQNumberField;
	OUTCOME_B_VERSION_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;

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
export interface QPollRevision extends QAgeSuitableRow<PollRevision>
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
	parentTranslation: QPollRevisionTranslationQRelation;
	children: IQOneToManyRelation<PollRevision, QPollRevision>;
	ratings: IQOneToManyRelation<PollRevisionRating, QPollRevisionRating>;
	factorPositions: IQOneToManyRelation<PollRevisionFactorPosition, QPollRevisionFactorPosition>;
	allTranslations: IQOneToManyRelation<PollRevisionTranslation, QPollRevisionTranslation>;
	opinions: IQOneToManyRelation<PollRevisionOpinion, QPollRevisionOpinion>;

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
	extends QAgeSuitableRowQRelation<PollRevision, QPollRevision>, QPollRevisionQId {
}

