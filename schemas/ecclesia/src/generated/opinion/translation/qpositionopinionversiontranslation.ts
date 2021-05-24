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
	PositionOpinionVersionGraph,
	PositionOpinionVersionEId,
	PositionOpinionVersionEOptionalId,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionESelect,
	QPositionOpinionVersion,
	QPositionOpinionVersionQId,
	QPositionOpinionVersionQRelation,
} from '../qpositionopinionversion';
import {
	PositionOpinionVersion,
} from '../../../ddl/opinion/PositionOpinionVersion';
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
	PositionOpinionVersionTranslation,
} from '../../../ddl/opinion/translation/PositionOpinionVersionTranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationESelect
    extends SystemGeneratedRowESelect, PositionOpinionVersionTranslationEOptionalId {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	positionOpinionVersion?: PositionOpinionVersionESelect;
	language?: LanguageESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionTranslationEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	positionOpinionVersion?: PositionOpinionVersionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionTranslationGraph
	extends PositionOpinionVersionTranslationEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	original?: boolean | IQBooleanField;
	title?: string | IQStringField;
	text?: string | IQStringField;

	// Relations
	positionOpinionVersion?: PositionOpinionVersionGraph;
	language?: LanguageGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionTranslationEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	IS_ORIGINAL?: boolean | IQBooleanField;
	TITLE?: string | IQStringField;
	TEXT?: string | IQStringField;
	POSITION_OPINION_VERSION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionTranslationECreateProperties
extends Partial<PositionOpinionVersionTranslationEId>, PositionOpinionVersionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionTranslationECreateColumns
extends PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersionTranslation extends QSystemGeneratedRow<PositionOpinionVersionTranslation>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	original: IQBooleanField;
	title: IQStringField;
	text: IQStringField;

	// Non-Id Relations
	positionOpinionVersion: QPositionOpinionVersionQRelation;
	language: QLanguageQRelation;

}


// Entity Id Interface
export interface QPositionOpinionVersionTranslationQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionOpinionVersionTranslationQRelation
	extends QSystemGeneratedRowQRelation<PositionOpinionVersionTranslation, QPositionOpinionVersionTranslation>, QPositionOpinionVersionTranslationQId {
}

