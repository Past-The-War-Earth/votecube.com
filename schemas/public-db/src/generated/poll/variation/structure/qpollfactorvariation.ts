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
	IFactorVariation,
	FactorVariationECascadeGraph,
	FactorVariationEId,
	FactorVariationEOptionalId,
	FactorVariationEUpdateProperties,
	FactorVariationESelect,
	QFactorVariation,
	QFactorVariationQId,
	QFactorVariationQRelation,
} from '../../../factor/qfactorvariation';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorVariation?: IFactorVariation;
	parent?: IPollFactorVariation;
	children?: IPollFactorVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorVariationESelect
    extends ImmutableRowESelect, PollFactorVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	factorVariation?: FactorVariationESelect;
	parent?: PollFactorVariationESelect;
	children?: PollFactorVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorVariationEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorVariationEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	factorVariation?: FactorVariationEOptionalId;
	parent?: PollFactorVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorVariationECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorVariationEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_VARIATION_ID?: number | IQNumberField;
	FACTOR_VARIATION_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorVariationECreateProperties
extends Partial<PollFactorVariationEId>, PollFactorVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorVariationECreateColumns
extends PollFactorVariationEId, PollFactorVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorVariation extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	factorVariation: QFactorVariationQRelation;
	parent: QPollFactorVariationQRelation;
	children: IQOneToManyRelation<QPollFactorVariation>;

}


// Entity Id Interface
export interface QPollFactorVariationQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorVariationQRelation
	extends QImmutableRowQRelation<QPollFactorVariation>, QPollFactorVariationQId {
}

