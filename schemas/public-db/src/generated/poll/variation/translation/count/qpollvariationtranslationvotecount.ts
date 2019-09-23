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

export interface IPollVariationTranslationVoteCount extends ISystemGeneratedRow {
	
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
export interface PollVariationTranslationVoteCountESelect
    extends SystemGeneratedRowESelect, PollVariationTranslationVoteCountEOptionalId {
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
export interface PollVariationTranslationVoteCountEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationTranslationVoteCountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationTranslationVoteCountEUpdateProperties
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
export interface PollVariationTranslationVoteCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationTranslationVoteCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_VARIATION_TRANSLATION_VOTE_COUNT_ID?: number | IQNumberField;
	COUNT?: number | IQNumberField;
	POLL_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationTranslationVoteCountECreateProperties
extends Partial<PollVariationTranslationVoteCountEId>, PollVariationTranslationVoteCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationTranslationVoteCountECreateColumns
extends PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationTranslationVoteCount extends QSystemGeneratedRow
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
export interface QPollVariationTranslationVoteCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollVariationTranslationVoteCountQRelation
	extends QSystemGeneratedRowQRelation<QPollVariationTranslationVoteCount>, QPollVariationTranslationVoteCountQId {
}

