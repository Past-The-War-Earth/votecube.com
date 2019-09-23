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
	ISystemGeneratedRow,
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../../../infrastructure/qsystemgeneratedrow';
import {
	IPollVariationTranslation,
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from '../qpollvariationtranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationTranslationOpinionCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollVariationTranslation?: IPollVariationTranslation;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationTranslationOpinionCountESelect
    extends SystemGeneratedRowESelect, PollVariationTranslationOpinionCountEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariationTranslation?: PollVariationTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationTranslationOpinionCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationTranslationOpinionCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationTranslationOpinionCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollVariationTranslation?: PollVariationTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationTranslationOpinionCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationTranslationOpinionCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_VARIATION_TRANSLATION_OPINION_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationTranslationOpinionCountECreateProperties
extends Partial<PollVariationTranslationOpinionCountEId>, PollVariationTranslationOpinionCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationTranslationOpinionCountECreateColumns
extends PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationTranslationOpinionCount extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	count: IQNumberField;

	// Non-Id Relations
	pollVariationTranslation: QPollVariationTranslationQRelation;

}


// Entity Id Interface
export interface QPollVariationTranslationOpinionCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollVariationTranslationOpinionCountQRelation
	extends QSystemGeneratedRowQRelation<QPollVariationTranslationOpinionCount>, QPollVariationTranslationOpinionCountQId {
}

