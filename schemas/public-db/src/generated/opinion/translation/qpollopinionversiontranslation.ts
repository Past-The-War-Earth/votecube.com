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
} from '../../infrastructure/qsystemgeneratedrow';
import {
	IPollOpinionVersion,
	PollOpinionVersionECascadeGraph,
	PollOpinionVersionEId,
	PollOpinionVersionEOptionalId,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionESelect,
	QPollOpinionVersion,
	QPollOpinionVersionQId,
	QPollOpinionVersionQRelation,
} from '../qpollopinionversion';
import {
	ILanguage,
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
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersionTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	original?: boolean;
	title?: string;
	text?: string;

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollOpinionVersionTranslationESelect
    extends SystemGeneratedRowESelect, PollOpinionVersionTranslationEOptionalId {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollOpinionVersion?: PollOpinionVersionESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollOpinionVersionTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollOpinionVersionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollOpinionVersionTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	pollOpinionVersion?: PollOpinionVersionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollOpinionVersionTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollOpinionVersionTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_OPINION_VERSION_TRANSLATION_IS_ORIGINAL?: boolean | IQBooleanField;
	POLL_OPINION_VERSION_TRANSLATION_TITLE?: string | IQStringField;
	POLL_OPINION_VERSION_TRANSLATION_TEXT?: string | IQStringField;
	POLL_OPINION_VERSION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollOpinionVersionTranslationECreateProperties
extends Partial<PollOpinionVersionTranslationEId>, PollOpinionVersionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollOpinionVersionTranslationECreateColumns
extends PollOpinionVersionTranslationEId, PollOpinionVersionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollOpinionVersionTranslation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	original: IQBooleanField;
	title: IQStringField;
	text: IQStringField;

	// Non-Id Relations
	pollOpinionVersion: QPollOpinionVersionQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QPollOpinionVersionTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollOpinionVersionTranslationQRelation
	extends QSystemGeneratedRowQRelation<QPollOpinionVersionTranslation>, QPollOpinionVersionTranslationQId {
}

