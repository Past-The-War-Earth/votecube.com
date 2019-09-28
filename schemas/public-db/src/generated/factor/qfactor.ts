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
	FactorVariationTranslationECascadeGraph,
	FactorVariationTranslationEId,
	FactorVariationTranslationEOptionalId,
	FactorVariationTranslationEUpdateProperties,
	FactorVariationTranslationESelect,
	QFactorVariationTranslation,
	QFactorVariationTranslationQId,
	QFactorVariationTranslationQRelation,
} from './qfactorvariationtranslation';
import {
	FactorPositionECascadeGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from './position/qfactorposition';
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
	FactorSkinVariationECascadeGraph,
	FactorSkinVariationEId,
	FactorSkinVariationEOptionalId,
	FactorSkinVariationEUpdateProperties,
	FactorSkinVariationESelect,
	QFactorSkinVariation,
	QFactorSkinVariationQId,
	QFactorSkinVariationQRelation,
} from './qfactorskinvariation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect
    extends ImmutableActorRowESelect, FactorEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parentTranslation?: FactorVariationTranslationESelect;
	parent?: FactorESelect;
	children?: FactorESelect;
	factorPositions?: FactorPositionESelect;
	variations?: FactorVariationESelect;
	skins?: FactorSkinVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	parentTranslation?: FactorVariationTranslationEOptionalId;
	parent?: FactorEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorECascadeGraph;
	factorPositions?: FactorPositionECascadeGraph;
	variations?: FactorVariationECascadeGraph;
	skins?: FactorSkinVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	PARENT_FACTOR_VARIATION_TRANSLATION_ID?: number | IQNumberField;
	PARENT_FACTOR_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties
extends Partial<FactorEId>, FactorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns
extends FactorEId, FactorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	parentTranslation: QFactorVariationTranslationQRelation;
	parent: QFactorQRelation;
	children: IQOneToManyRelation<QFactor>;
	factorPositions: IQOneToManyRelation<QFactorPosition>;
	variations: IQOneToManyRelation<QFactorVariation>;
	skins: IQOneToManyRelation<QFactorSkinVariation>;

}


// Entity Id Interface
export interface QFactorQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorQRelation
	extends QImmutableActorRowQRelation<QFactor>, QFactorQId {
}

