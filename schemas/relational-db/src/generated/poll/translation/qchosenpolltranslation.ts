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
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../revision/qpollrevision';
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
import {
	ChosenPollTranslationTypeECascadeGraph,
	ChosenPollTranslationTypeEId,
	ChosenPollTranslationTypeEOptionalId,
	ChosenPollTranslationTypeEUpdateProperties,
	ChosenPollTranslationTypeESelect,
	QChosenPollTranslationType,
	QChosenPollTranslationTypeQId,
	QChosenPollTranslationTypeQRelation,
} from './qchosenpolltranslationtype';
import {
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from '../revision/translation/qpollrevisiontranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ChosenPollTranslationESelect
    extends SystemGeneratedRowESelect, ChosenPollTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	pollRevision?: PollRevisionESelect;
	language?: LanguageESelect;
	type?: ChosenPollTranslationTypeESelect;
	revisionTranslation?: PollRevisionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ChosenPollTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ChosenPollTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ChosenPollTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	pollRevision?: PollRevisionEOptionalId;
	language?: LanguageEOptionalId;
	type?: ChosenPollTranslationTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenPollTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations
	revisionTranslation?: PollRevisionTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenPollTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	CHOSEN_POLL_TRANSLATION_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ChosenPollTranslationECreateProperties
extends Partial<ChosenPollTranslationEId>, ChosenPollTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ChosenPollTranslationECreateColumns
extends ChosenPollTranslationEId, ChosenPollTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QChosenPollTranslation extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	poll: QPollQRelation;
	pollRevision: QPollRevisionQRelation;
	language: QLanguageQRelation;
	type: QChosenPollTranslationTypeQRelation;
	revisionTranslation: IQOneToManyRelation<QPollRevisionTranslation>;

}


// Entity Id Interface
export interface QChosenPollTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QChosenPollTranslationQRelation
	extends QSystemGeneratedRowQRelation<QChosenPollTranslation>, QChosenPollTranslationQId {
}

