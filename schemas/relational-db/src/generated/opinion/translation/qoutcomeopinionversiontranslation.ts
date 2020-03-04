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
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../infrastructure/row/qsystemgeneratedrow';
import {
	OutcomeOpinionVersionECascadeGraph,
	OutcomeOpinionVersionEId,
	OutcomeOpinionVersionEOptionalId,
	OutcomeOpinionVersionEUpdateProperties,
	OutcomeOpinionVersionESelect,
	QOutcomeOpinionVersion,
	QOutcomeOpinionVersionQId,
	QOutcomeOpinionVersionQRelation,
} from '../qoutcomeopinionversion';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../../infrastructure/qlanguage';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationESelect
    extends SystemGeneratedRowESelect, OutcomeOpinionVersionTranslationEOptionalId {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	outcomeOpinionVersion?: OutcomeOpinionVersionESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	outcomeOpinionVersion?: OutcomeOpinionVersionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	IS_ORIGINAL?: boolean | IQBooleanField;
	TITLE?: string | IQStringField;
	TEXT?: string | IQStringField;
	OUTCOME_OPINION_VERSION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionTranslationECreateProperties
extends Partial<OutcomeOpinionVersionTranslationEId>, OutcomeOpinionVersionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionTranslationECreateColumns
extends OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersionTranslation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	original: IQBooleanField;
	title: IQStringField;
	text: IQStringField;

	// Non-Id Relations
	outcomeOpinionVersion: QOutcomeOpinionVersionQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QOutcomeOpinionVersionTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeOpinionVersionTranslationQRelation
	extends QSystemGeneratedRowQRelation<QOutcomeOpinionVersionTranslation>, QOutcomeOpinionVersionTranslationQId {
}

