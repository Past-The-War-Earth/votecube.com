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
} from '../../infrastructure/qsystemgeneratedrow';
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
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../variation/qpollvariation';
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
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from '../variation/translation/qpollvariationtranslation';


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
	pollVariation?: PollVariationESelect;
	language?: LanguageESelect;
	type?: ChosenPollTranslationTypeESelect;
	variationTranslation?: PollVariationTranslationESelect;

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
	pollVariation?: PollVariationEOptionalId;
	language?: LanguageEOptionalId;
	type?: ChosenPollTranslationTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ChosenPollTranslationECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations
	variationTranslation?: PollVariationTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ChosenPollTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
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
	pollVariation: QPollVariationQRelation;
	language: QLanguageQRelation;
	type: QChosenPollTranslationTypeQRelation;
	variationTranslation: IQOneToManyRelation<QPollVariationTranslation>;

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

