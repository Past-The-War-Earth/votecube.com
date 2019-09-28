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
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../poll/variation/qpollvariation';
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
export interface FactorSkinVariationESelect
    extends ImmutableActorRowESelect, FactorSkinVariationEOptionalId {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	factor?: FactorESelect;
	parent?: FactorSkinVariationESelect;
	children?: FactorSkinVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorSkinVariationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorSkinVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorSkinVariationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	factor?: FactorEOptionalId;
	parent?: FactorSkinVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorSkinVariationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorSkinVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorSkinVariationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	BACKGROUND_COLOR_ID?: number | IQNumberField;
	TEXT_COLOR_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	PARENT_FACTOR_SKIN_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorSkinVariationECreateProperties
extends Partial<FactorSkinVariationEId>, FactorSkinVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorSkinVariationECreateColumns
extends FactorSkinVariationEId, FactorSkinVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorSkinVariation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	backgroundColor: IQNumberField;
	textColor: IQNumberField;

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	factor: QFactorQRelation;
	parent: QFactorSkinVariationQRelation;
	children: IQOneToManyRelation<QFactorSkinVariation>;

}


// Entity Id Interface
export interface QFactorSkinVariationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorSkinVariationQRelation
	extends QImmutableActorRowQRelation<QFactorSkinVariation>, QFactorSkinVariationQId {
}

