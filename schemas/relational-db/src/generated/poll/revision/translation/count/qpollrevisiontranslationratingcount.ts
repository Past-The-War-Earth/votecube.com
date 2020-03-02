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
} from '../../../../infrastructure/row/qsystemgeneratedrow';
import {
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from '../qpollrevisiontranslation';
import {
	RatingECascadeGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from '../../../../infrastructure/rating/qrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationRatingCountESelect
    extends SystemGeneratedRowESelect, PollRevisionTranslationRatingCountEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionTranslation?: PollRevisionTranslationESelect;
	rating?: RatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationRatingCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationRatingCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
	rating?: RatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationRatingCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationRatingCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_TRANSLATION_RATING_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingCountECreateProperties
extends Partial<PollRevisionTranslationRatingCountEId>, PollRevisionTranslationRatingCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationRatingCountECreateColumns
extends PollRevisionTranslationRatingCountEId, PollRevisionTranslationRatingCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslationRatingCount extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	count: IQNumberField;

	// Non-Id Relations
	pollRevisionTranslation: QPollRevisionTranslationQRelation;
	rating: QRatingQRelation;

}


// Entity Id Interface
export interface QPollRevisionTranslationRatingCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionTranslationRatingCountQRelation
	extends QSystemGeneratedRowQRelation<QPollRevisionTranslationRatingCount>, QPollRevisionTranslationRatingCountQId {
}

