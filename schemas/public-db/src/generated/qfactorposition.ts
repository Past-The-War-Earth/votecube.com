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
} from './qimmutablerow';
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
import {
	IPosition,
	PositionECascadeGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from './qposition';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorPosition extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorPositionESelect
    extends ImmutableRowESelect, FactorPositionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorPositionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorPositionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	FACTOR_ID?: number | IQNumberField;
	POSITION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorPositionECreateProperties
extends Partial<FactorPositionEId>, FactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorPositionECreateColumns
extends FactorPositionEId, FactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorPosition extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QFactorPositionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorPositionQRelation
	extends QImmutableRowQRelation<QFactorPosition>, QFactorPositionQId {
}

