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
} from '../row/qsystemgeneratedrow';
import {
	RatingReasonECascadeGraph,
	RatingReasonEId,
	RatingReasonEOptionalId,
	RatingReasonEUpdateProperties,
	RatingReasonESelect,
	QRatingReason,
	QRatingReasonQId,
	QRatingReasonQRelation,
} from './qratingreason';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../qlanguage';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingReasonTranslationESelect
    extends SystemGeneratedRowESelect, RatingReasonTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reason?: RatingReasonESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingReasonTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface RatingReasonTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingReasonTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	reason?: RatingReasonEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingReasonTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingReasonTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	RATING_REASON_NAME?: string | IQStringField;
	RATING_REASON_DESCRIPTION?: string | IQStringField;
	RATING_REASON_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingReasonTranslationECreateProperties
extends Partial<RatingReasonTranslationEId>, RatingReasonTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingReasonTranslationECreateColumns
extends RatingReasonTranslationEId, RatingReasonTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingReasonTranslation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	reason: QRatingReasonQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QRatingReasonTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QRatingReasonTranslationQRelation
	extends QSystemGeneratedRowQRelation<QRatingReasonTranslation>, QRatingReasonTranslationQId {
}

