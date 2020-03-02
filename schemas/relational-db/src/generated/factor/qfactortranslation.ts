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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../infrastructure/row/qimmutableactorrow';
import {
	FactorECascadeGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from './qfactor';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../infrastructure/qlanguage';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorTranslationESelect
    extends ImmutableActorRowESelect, FactorTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorESelect;
	language?: LanguageESelect;
	parent?: FactorTranslationESelect;
	children?: FactorTranslationESelect;
	childFactors?: FactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	factor?: FactorEOptionalId;
	language?: LanguageEOptionalId;
	parent?: FactorTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorTranslationECascadeGraph;
	childFactors?: FactorECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	FACTOR_NAME?: string | IQStringField;
	FACTOR_DESCRIPTION?: string | IQStringField;
	FACTOR_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorTranslationECreateProperties
extends Partial<FactorTranslationEId>, FactorTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorTranslationECreateColumns
extends FactorTranslationEId, FactorTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	factor: QFactorQRelation;
	language: QLanguageQRelation;
	parent: QFactorTranslationQRelation;
	children: IQOneToManyRelation<QFactorTranslation>;
	childFactors: IQOneToManyRelation<QFactor>;

}


// Entity Id Interface
export interface QFactorTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorTranslationQRelation
	extends QImmutableActorRowQRelation<QFactorTranslation>, QFactorTranslationQId {
}

