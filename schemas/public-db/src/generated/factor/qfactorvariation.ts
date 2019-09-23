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
	IImmutableActorRow,
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
	IPollVariation,
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
	IFactor,
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
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factor?: IFactor;
	parent?: IFactorVariation;
	children?: IFactorVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorVariationESelect
    extends ImmutableActorRowESelect, FactorVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	factor?: FactorESelect;
	parent?: FactorVariationESelect;
	children?: FactorVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorVariationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorVariationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	factor?: FactorEOptionalId;
	parent?: FactorVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorVariationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorVariationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	PARENT_FACTOR_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorVariationECreateProperties
extends Partial<FactorVariationEId>, FactorVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorVariationECreateColumns
extends FactorVariationEId, FactorVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorVariation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	factor: QFactorQRelation;
	parent: QFactorVariationQRelation;
	children: IQOneToManyRelation<QFactorVariation>;

}


// Entity Id Interface
export interface QFactorVariationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorVariationQRelation
	extends QImmutableActorRowQRelation<QFactorVariation>, QFactorVariationQId {
}

