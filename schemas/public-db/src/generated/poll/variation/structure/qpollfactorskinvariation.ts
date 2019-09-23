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
	IImmutableRow,
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../../../infrastructure/qimmutablerow';
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
} from '../qpollvariation';
import {
	IFactorSkinVariation,
	FactorSkinVariationECascadeGraph,
	FactorSkinVariationEId,
	FactorSkinVariationEOptionalId,
	FactorSkinVariationEUpdateProperties,
	FactorSkinVariationESelect,
	QFactorSkinVariation,
	QFactorSkinVariationQId,
	QFactorSkinVariationQRelation,
} from '../../../factor/qfactorskinvariation';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorSkinVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorSkinVariation?: IFactorSkinVariation;
	parent?: IPollFactorSkinVariation;
	children?: IPollFactorSkinVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorSkinVariationESelect
    extends ImmutableRowESelect, PollFactorSkinVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	factorSkinVariation?: FactorSkinVariationESelect;
	parent?: PollFactorSkinVariationESelect;
	children?: PollFactorSkinVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorSkinVariationEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorSkinVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorSkinVariationEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	factorSkinVariation?: FactorSkinVariationEOptionalId;
	parent?: PollFactorSkinVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorSkinVariationECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorSkinVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorSkinVariationEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_VARIATION_ID?: number | IQNumberField;
	FACTOR_SKIN_VARIATION_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_SKIN_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorSkinVariationECreateProperties
extends Partial<PollFactorSkinVariationEId>, PollFactorSkinVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorSkinVariationECreateColumns
extends PollFactorSkinVariationEId, PollFactorSkinVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorSkinVariation extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	factorSkinVariation: QFactorSkinVariationQRelation;
	parent: QPollFactorSkinVariationQRelation;
	children: IQOneToManyRelation<QPollFactorSkinVariation>;

}


// Entity Id Interface
export interface QPollFactorSkinVariationQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorSkinVariationQRelation
	extends QImmutableRowQRelation<QPollFactorSkinVariation>, QPollFactorSkinVariationQId {
}

