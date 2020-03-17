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
	OutcomeTranslationECascadeGraph,
	OutcomeTranslationEId,
	OutcomeTranslationEOptionalId,
	OutcomeTranslationEUpdateProperties,
	OutcomeTranslationESelect,
	QOutcomeTranslation,
	QOutcomeTranslationQId,
	QOutcomeTranslationQRelation,
} from './translation/qoutcometranslation';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect
    extends AgeSuitableRowESelect, OutcomeEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parentTranslation?: OutcomeTranslationESelect;
	parent?: OutcomeESelect;
	children?: OutcomeESelect;
	pollRevisionsA?: PollRevisionESelect;
	pollRevisionsB?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId
    extends AgeSuitableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties
	extends AgeSuitableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	parentTranslation?: OutcomeTranslationEOptionalId;
	parent?: OutcomeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeECascadeGraph
	extends AgeSuitableRowECascadeGraph {
	// Cascading Relations
	children?: OutcomeECascadeGraph;
	pollRevisionsA?: PollRevisionECascadeGraph;
	pollRevisionsB?: PollRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns
	extends AgeSuitableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
	PARENT_OUTCOME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties
extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns
extends OutcomeEId, OutcomeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QAgeSuitableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	parentTranslation: QOutcomeTranslationQRelation;
	parent: QOutcomeQRelation;
	children: IQOneToManyRelation<QOutcome>;
	pollRevisionsA: IQOneToManyRelation<QPollRevision>;
	pollRevisionsB: IQOneToManyRelation<QPollRevision>;

}


// Entity Id Interface
export interface QOutcomeQId extends QAgeSuitableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeQRelation
	extends QAgeSuitableRowQRelation<QOutcome>, QOutcomeQId {
}

