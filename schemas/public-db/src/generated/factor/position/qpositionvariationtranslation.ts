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
} from '../../infrastructure/qimmutableactorrow';
import {
	PositionVariationECascadeGraph,
	PositionVariationEId,
	PositionVariationEOptionalId,
	PositionVariationEUpdateProperties,
	PositionVariationESelect,
	QPositionVariation,
	QPositionVariationQId,
	QPositionVariationQRelation,
} from './qpositionvariation';
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


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionVariationTranslationESelect
    extends ImmutableActorRowESelect, PositionVariationTranslationEOptionalId {
	// Non-Id Properties
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	positionVariation?: PositionVariationESelect;
	language?: LanguageESelect;
	parent?: PositionVariationTranslationESelect;
	children?: PositionVariationTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionVariationTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionVariationTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionVariationTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	positionVariation?: PositionVariationEOptionalId;
	language?: LanguageEOptionalId;
	parent?: PositionVariationTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionVariationTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PositionVariationTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionVariationTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POSITION_DESCRIPTION?: string | IQStringField;
	POSITION_VARIATION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_POSITION_VARIATION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionVariationTranslationECreateProperties
extends Partial<PositionVariationTranslationEId>, PositionVariationTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionVariationTranslationECreateColumns
extends PositionVariationTranslationEId, PositionVariationTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionVariationTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	description: IQStringField;

	// Non-Id Relations
	positionVariation: QPositionVariationQRelation;
	language: QLanguageQRelation;
	parent: QPositionVariationTranslationQRelation;
	children: IQOneToManyRelation<QPositionVariationTranslation>;

}


// Entity Id Interface
export interface QPositionVariationTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionVariationTranslationQRelation
	extends QImmutableActorRowQRelation<QPositionVariationTranslation>, QPositionVariationTranslationQId {
}

