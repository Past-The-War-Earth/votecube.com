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
	IFactorPosition,
	FactorPositionECascadeGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from '../../../factor/position/qfactorposition';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorPositionVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	axis?: string;
	dir?: number;

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorPosition?: IFactorPosition;
	parent?: IPollFactorPositionVariation;
	children?: IPollFactorPositionVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorPositionVariationESelect
    extends ImmutableRowESelect, PollFactorPositionVariationEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	factorPosition?: FactorPositionESelect;
	parent?: PollFactorPositionVariationESelect;
	children?: PollFactorPositionVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorPositionVariationEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorPositionVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorPositionVariationEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	factorPosition?: FactorPositionEOptionalId;
	parent?: PollFactorPositionVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorPositionVariationECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorPositionVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorPositionVariationEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	FACTOR_POSITION_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_POSITION_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorPositionVariationECreateProperties
extends Partial<PollFactorPositionVariationEId>, PollFactorPositionVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorPositionVariationECreateColumns
extends PollFactorPositionVariationEId, PollFactorPositionVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorPositionVariation extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	factorPosition: QFactorPositionQRelation;
	parent: QPollFactorPositionVariationQRelation;
	children: IQOneToManyRelation<QPollFactorPositionVariation>;

}


// Entity Id Interface
export interface QPollFactorPositionVariationQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorPositionVariationQRelation
	extends QImmutableRowQRelation<QPollFactorPositionVariation>, QPollFactorPositionVariationQId {
}

