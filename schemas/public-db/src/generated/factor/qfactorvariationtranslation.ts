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
} from '../infrastructure/qimmutableactorrow';
import {
	FactorVariationECascadeGraph,
	FactorVariationEId,
	FactorVariationEOptionalId,
	FactorVariationEUpdateProperties,
	FactorVariationESelect,
	QFactorVariation,
	QFactorVariationQId,
	QFactorVariationQRelation,
} from './qfactorvariation';
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


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorVariationTranslationESelect
    extends ImmutableActorRowESelect, FactorVariationTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factorVariation?: FactorVariationESelect;
	language?: LanguageESelect;
	parent?: FactorVariationTranslationESelect;
	children?: FactorVariationTranslationESelect;
	childFactors?: FactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorVariationTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorVariationTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorVariationTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	factorVariation?: FactorVariationEOptionalId;
	language?: LanguageEOptionalId;
	parent?: FactorVariationTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorVariationTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorVariationTranslationECascadeGraph;
	childFactors?: FactorECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorVariationTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	FACTOR_NAME?: string | IQStringField;
	FACTOR_DESCRIPTION?: string | IQStringField;
	FACTOR_VARIATION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_FACTOR_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorVariationTranslationECreateProperties
extends Partial<FactorVariationTranslationEId>, FactorVariationTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorVariationTranslationECreateColumns
extends FactorVariationTranslationEId, FactorVariationTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorVariationTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;

	// Non-Id Relations
	factorVariation: QFactorVariationQRelation;
	language: QLanguageQRelation;
	parent: QFactorVariationTranslationQRelation;
	children: IQOneToManyRelation<QFactorVariationTranslation>;
	childFactors: QFactorQRelation;

}


// Entity Id Interface
export interface QFactorVariationTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorVariationTranslationQRelation
	extends QImmutableActorRowQRelation<QFactorVariationTranslation>, QFactorVariationTranslationQId {
}

