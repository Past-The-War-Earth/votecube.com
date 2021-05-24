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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../infrastructure/row/qsystemgeneratedrow';
import {
	PollRevisionOpinionVersionGraph,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionEOptionalId,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionESelect,
	QPollRevisionOpinionVersion,
	QPollRevisionOpinionVersionQId,
	QPollRevisionOpinionVersionQRelation,
} from '../qpollrevisionopinionversion';
import {
	PollRevisionOpinionVersion,
} from '../../../ddl/opinion/PollRevisionOpinionVersion';
import {
	LanguageGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../../infrastructure/qlanguage';
import {
	Language,
} from '../../../ddl/infrastructure/Language';
import {
	PollRevisionOpinionVersionTranslation,
} from '../../../ddl/opinion/translation/PollRevisionOpinionVersionTranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationESelect
    extends SystemGeneratedRowESelect, PollRevisionOpinionVersionTranslationEOptionalId {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	opinionVersion?: PollRevisionOpinionVersionESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	opinionVersion?: PollRevisionOpinionVersionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationGraph
	extends PollRevisionOpinionVersionTranslationEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Relations
	opinionVersion?: PollRevisionOpinionVersionGraph;
	language?: LanguageGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL?: boolean | IQBooleanField;
	POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE?: string | IQStringField;
	POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT?: string | IQStringField;
	POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionTranslationECreateProperties
extends Partial<PollRevisionOpinionVersionTranslationEId>, PollRevisionOpinionVersionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionTranslationECreateColumns
extends PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersionTranslation extends QSystemGeneratedRow<PollRevisionOpinionVersionTranslation>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	original: IQBooleanField;
	title: IQStringField;
	text: IQStringField;

	// Non-Id Relations
	opinionVersion: QPollRevisionOpinionVersionQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QPollRevisionOpinionVersionTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionVersionTranslationQRelation
	extends QSystemGeneratedRowQRelation<PollRevisionOpinionVersionTranslation, QPollRevisionOpinionVersionTranslation>, QPollRevisionOpinionVersionTranslationQId {
}

