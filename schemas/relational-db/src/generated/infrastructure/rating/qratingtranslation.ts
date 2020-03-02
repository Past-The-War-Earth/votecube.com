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
	RatingECascadeGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from './qrating';
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
export interface RatingTranslationESelect
    extends SystemGeneratedRowESelect, RatingTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	rating?: RatingESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface RatingTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	rating?: RatingEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	RATING_NAME?: string | IQStringField;
	RATING_DESCRIPTION?: string | IQStringField;
	RATING_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingTranslationECreateProperties
extends Partial<RatingTranslationEId>, RatingTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingTranslationECreateColumns
extends RatingTranslationEId, RatingTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingTranslation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	rating: QRatingQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QRatingTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QRatingTranslationQRelation
	extends QSystemGeneratedRowQRelation<QRatingTranslation>, QRatingTranslationQId {
}

