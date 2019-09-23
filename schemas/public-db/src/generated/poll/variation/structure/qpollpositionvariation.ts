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
	IPositionVariation,
	PositionVariationECascadeGraph,
	PositionVariationEId,
	PositionVariationEOptionalId,
	PositionVariationEUpdateProperties,
	PositionVariationESelect,
	QPositionVariation,
	QPositionVariationQId,
	QPositionVariationQRelation,
} from '../../../factor/position/qpositionvariation';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollPositionVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	positionVariation?: IPositionVariation;
	parent?: IPollPositionVariation;
	children?: IPollPositionVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollPositionVariationESelect
    extends ImmutableRowESelect, PollPositionVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollVariation?: PollVariationESelect;
	positionVariation?: PositionVariationESelect;
	parent?: PollPositionVariationESelect;
	children?: PollPositionVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollPositionVariationEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollPositionVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollPositionVariationEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollVariation?: PollVariationEOptionalId;
	positionVariation?: PositionVariationEOptionalId;
	parent?: PollPositionVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollPositionVariationECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollPositionVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollPositionVariationEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_VARIATION_ID?: number | IQNumberField;
	POSITION_VARIATION_ID?: number | IQNumberField;
	PARENT_POLL_POSITION_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollPositionVariationECreateProperties
extends Partial<PollPositionVariationEId>, PollPositionVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollPositionVariationECreateColumns
extends PollPositionVariationEId, PollPositionVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollPositionVariation extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollVariation: QPollVariationQRelation;
	positionVariation: QPositionVariationQRelation;
	parent: QPollPositionVariationQRelation;
	children: IQOneToManyRelation<QPollPositionVariation>;

}


// Entity Id Interface
export interface QPollPositionVariationQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollPositionVariationQRelation
	extends QImmutableRowQRelation<QPollPositionVariation>, QPollPositionVariationQId {
}

