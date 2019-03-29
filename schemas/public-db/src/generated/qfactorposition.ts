import {
	IQEntityInternal,
	IEntityIdProperties,
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
	QEntity,
	QRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IFactor,
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

export interface IFactorPosition {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

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
    extends IEntitySelectProperties, FactorPositionEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorPositionEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	FACTOR_POSITION_ID?: number | IQNumberField;
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
export interface QFactorPosition extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QFactorPositionQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QFactorPositionQRelation
	extends QRelation<QFactorPosition>, QFactorPositionQId {
}

